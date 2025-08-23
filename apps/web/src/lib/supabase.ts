/**
 * Supabase client configuration for Next.js
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wywulhfcbwcqjmyghgfw.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseAnonKey) {
  console.warn('NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. Supabase client will not work properly.');
}

export const supabase = supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
