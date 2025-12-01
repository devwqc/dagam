import envConfig from '@/constants/env-config';
import { createBrowserClient } from '@supabase/ssr';
import type { Database } from './database.types';

export function createSupabaseBrowserClient() {
  return createBrowserClient<Database>(envConfig.supabaseUrl, envConfig.supabasePublishableKey);
}
