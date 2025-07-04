import { NextRequest, NextResponse } from 'next/server';

import prisma from "@xtopay/db";

export async function POST(req: NextRequest) {
  const { business_id } = await req.json();
  const auth = req.headers.get('authorization');
  if (!auth || !business_id) {
    return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
  }
  // Basic base64(api_id:api_key)
  const [type, encoded] = auth.split(' ');
  if (type !== 'Basic' || !encoded) {
    return NextResponse.json({ error: 'Invalid authorization header' }, { status: 401 });
  }
  const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
  const [api_id, api_key] = decoded.split(':');
  if (!api_id || !api_key) {
    return NextResponse.json({ error: 'Invalid API credentials' }, { status: 401 });
  }
  // Find merchant in DB
  const merchant = await prisma.merchant.findFirst({
    where: {
      businessId: business_id,
      apiId: api_id,
      apiKey: api_key,
    },
    select: {
      name: true,
      logo: true,
    },
  });
  if (!merchant) {
    return NextResponse.json({ error: 'Business not found or invalid credentials' }, { status: 403 });
  }
  return NextResponse.json(merchant);
}
