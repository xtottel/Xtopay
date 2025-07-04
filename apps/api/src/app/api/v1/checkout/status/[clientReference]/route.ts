import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

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

  // Find payment with merchant data in Supabase
  const { data: paymentData, error } = await supabase
    .from('payment')
    .select(`
      *,
      merchant:merchant_id (*)
    `)
    .eq('clientReference', params.clientReference)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }

  if (!paymentData) {
    return NextResponse.json({ error: 'Transaction not found' }, { status: 404 });
  }

  // Check merchant API credentials
  if (
    !paymentData.merchant ||
    paymentData.merchant.apiId !== api_id ||
    paymentData.merchant.apiKey !== api_key
  ) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  return NextResponse.json({
    status: paymentData.status === 'paid' ? 'Paid' : 'Pending',
    data: {
      paymentMethod: paymentData.channel || undefined,
      amount: paymentData.amount,
      charges: 2,
      amountAfterCharges: paymentData.amount ? paymentData.amount - 2 : undefined,
      merchantName: paymentData.merchant.name,
      merchantEmail: undefined, // Add if available in schema
      customerPhone: paymentData.payeePhone,
      payeeName: paymentData.payeeName,
      currency: 'GHS',
    },
  });
}