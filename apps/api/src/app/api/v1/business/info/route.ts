import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

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

  // Find merchant in Supabase
  const { data: merchant, error } = await supabase
    .from('merchant')
    .select('name, logo')
    .eq('businessId', business_id)
    .eq('apiId', api_id)
    .eq('apiKey', api_key)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }

  if (!merchant) {
    return NextResponse.json({ error: 'Business not found or invalid credentials' }, { status: 403 });
  }

  return NextResponse.json(merchant);
}