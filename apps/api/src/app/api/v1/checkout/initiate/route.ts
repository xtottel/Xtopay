import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';

// Path to merchants.json (relative to monorepo root)
const MERCHANTS_PATH = path.resolve(process.cwd(), '../../pay/src/app/data/merchants.json');
// Path to payments.json (for persistent storage)
const PAYMENTS_PATH = path.resolve(process.cwd(), '../../pay/src/app/data/payments.json');

async function getMerchants() {
  try {
    const data = await fs.readFile(MERCHANTS_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

async function savePayment(payment: any) {
  let payments = [];
  try {
    const data = await fs.readFile(PAYMENTS_PATH, 'utf-8');
    payments = JSON.parse(data);
  } catch (e) {}
  payments.push(payment);
  await fs.writeFile(PAYMENTS_PATH, JSON.stringify(payments, null, 2), 'utf-8');
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth) {
    return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
  }
  const [type, encoded] = auth.split(' ');
  if (type !== 'Basic' || !encoded) {
    return NextResponse.json({ error: 'Invalid authorization header' }, { status: 401 });
  }
  const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
  const [api_id, api_key] = decoded.split(':');
  if (!api_id || !api_key) {
    return NextResponse.json({ error: 'Invalid API credentials' }, { status: 401 });
  }
  const merchants = await getMerchants();
  const merchant = merchants.find((m: any) => m.api_id === api_id && m.api_key === api_key);
  if (!merchant) {
    return NextResponse.json({ error: 'Business not found or invalid credentials' }, { status: 403 });
  }
  const body = await req.json();
  const required = ['amount','description','callbackUrl','returnUrl','cancelUrl','clientReference'];
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }
  // Generate checkoutId
  const checkoutId = crypto.randomBytes(5).toString('hex');
  const checkoutUrl = `https://pay.xtopay.co/${checkoutId}`;
  // Save payment
  const payment = {
    ...body,
    checkoutId,
    status: 'pending',
    createdAt: new Date().toISOString(),
    merchant: merchant.business_id
  };
  await savePayment(payment);
  return NextResponse.json({
    status: 'success',
    data: {
      checkoutId,
      checkoutUrl,
      clientReference: body.clientReference
    }
  });
}
