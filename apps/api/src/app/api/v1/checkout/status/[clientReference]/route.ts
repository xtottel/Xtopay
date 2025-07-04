import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

// Path to payments.json (for persistent storage)
const PAYMENTS_PATH = path.resolve(process.cwd(), '../../../pay/src/app/data/payments.json');

async function getPayments() {
  try {
    const data = await fs.readFile(PAYMENTS_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

export async function GET(req: NextRequest, { params }: { params: { clientReference: string } }) {
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
  const payments = await getPayments();
  const payment = payments.find((p: any) => p.clientReference === params.clientReference);
  if (!payment) {
    return NextResponse.json({ error: 'Transaction not found' }, { status: 404 });
  }
  // Simulate a paid response for demo
  return NextResponse.json({
    status: payment.status === 'paid' ? 'Paid' : 'Pending',
    data: {
      transactionId: payment.xtopayTransactionId || 'XT-83928238',
      externalId: payment.transactionReference || 'mtn-2398234',
      paymentMethod: payment.channel || 'mobilemoney',
      amount: payment.amount,
      charges: 2,
      amountAfterCharges: payment.amount ? payment.amount - 2 : undefined
    }
  });
}
