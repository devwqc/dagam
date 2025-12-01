import envConfig from '@/constants/env-config';
import { createBrowserClient } from '@supabase/ssr';

export function createSupabaseBrowserClient() {
  return createBrowserClient(envConfig.supabaseUrl, envConfig.supabasePublishableKey);
}
