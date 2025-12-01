import { isNil } from '@/utils/type-guards';

export const validateEnv = () => {
  return null;
};

const NEXT_PUBLIC_SUPABASE_URL = 'NEXT_PUBLIC_SUPABASE_URL';
const NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY';

const getRequiredStringEnv = (envKey: string) => {
  if (isNil(process.env[envKey])) {
    throw new Error(`${envKey} env가 필요합니다.`);
  }

  return process.env[envKey];
};

const envConfig = {
  supabaseUrl: getRequiredStringEnv(NEXT_PUBLIC_SUPABASE_URL),
  supabasePublishableKey: getRequiredStringEnv(NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY),
};

export default envConfig;
