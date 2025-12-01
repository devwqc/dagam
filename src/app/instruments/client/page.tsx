'use client';

import { Instrument } from '@/features/instrument/types';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export default function InstrumentsClient() {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInstruments = async () => {
      const supabase = createSupabaseBrowserClient();
      const { data } = await supabase.from('instruments').select();
      const instrumentsData = data ?? [];

      setInstruments(instrumentsData);
      setIsLoading(false);
    };

    fetchInstruments();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}
