import { NextRequest, NextResponse } from 'next/server';
import prisma from '@xtopay/db';

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
  // Find payment by clientReference and join merchant for auth
  const payment = await prisma.payment.findUnique({
    where: { clientReference: params.clientReference },
    include: { merchant: true },
  });
  if (!payment) {
    return NextResponse.json({ error: 'Transaction not found' }, { status: 404 });
  }
  // Check merchant API credentials
  if (
    !payment.merchant ||
    payment.merchant.apiId !== api_id ||
    payment.merchant.apiKey !== api_key
  ) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  return NextResponse.json({
    status: payment.status === 'paid' ? 'Paid' : 'Pending',
    data: {
      paymentMethod: payment.channel || undefined,
      amount: payment.amount,
      charges: 2,
      amountAfterCharges: payment.amount ? payment.amount - 2 : undefined,
      merchantName: payment.merchant.name,
      merchantEmail: undefined, // Add if available in schema
      customerPhone: payment.payeePhone,
      payeeName: payment.payeeName,
      currency: 'GHS',
    },
  });
}
