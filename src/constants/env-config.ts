import { isNil } from '@/utils/type-guards';

export const validateEnv = () => {
  return null;
};

const envConfig = {
  supabaseUrl: (() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    if (isNil(supabaseUrl)) {
      throw new Error('NEXT_PUBLIC_SUPABASE_URL env가 필요합니다.');
    }

    return supabaseUrl;
  })(),
  supabasePublishableKey: (() => {
    const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (isNil(supabasePublishableKey)) {
      throw new Error('NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY env가 필요합니다.');
    }

    return supabasePublishableKey;
  })(),
};

export default envConfig;
