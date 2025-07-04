import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../../lib/supabase';
import crypto from 'crypto';

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
  // Find merchant in Supabase
  const { data: merchant, error: merchantError } = await supabase
    .from('merchant')
    .select('*')
    .eq('apiId', api_id)
    .eq('apiKey', api_key)
    .single();
  if (merchantError || !merchant) {
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

  // Save payment in Supabase
  const { data: payment, error: paymentError } = await supabase
    .from('payment')
    .insert([
      {
        amount: body.amount,
        description: body.description,
        callbackUrl: body.callbackUrl,
        returnUrl: body.returnUrl,
        cancelUrl: body.cancelUrl,
        clientReference: body.clientReference,
        payeeName: body.payeeName,
        payeePhone: body.payeePhone,
        payeeEmail: body.payeeEmail,
        channel: body.channel,
        status: 'pending',
        checkoutId,
        merchantId: merchant.id,
      },
    ])
    .select()
    .single();
  if (paymentError) {
    return NextResponse.json({ error: 'Failed to create payment', details: paymentError.message }, { status: 500 });
  }
  return NextResponse.json({
    status: 'success',
    data: {
      checkoutId,
      checkoutUrl,
      clientReference: body.clientReference,
    },
  });
}
