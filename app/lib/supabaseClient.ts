import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.EXPO_PUBLIC_SUPABASE_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  // Intentionally not throwing to allow pages to render; actions will guard.
  console.warn('Supabase URL or Anon Key is not configured.');
}

export function getSupabaseClient(accessToken?: string) {
  const client = createClient(supabaseUrl || '', supabaseAnonKey || '', {
    auth: {
      persistSession: false, // no local storage in this simple web flow
      autoRefreshToken: false,
    },
    global: {
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined,
    },
  });
  return client;
}


