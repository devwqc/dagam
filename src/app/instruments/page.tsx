import { createSupabaseServerClient } from '@/lib/supabase/server';

export default async function Instruments() {
  const supabase = await createSupabaseServerClient();
  const { data: instruments } = await supabase.from('instruments').select();

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}
