import { execSync } from 'child_process';
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(process.cwd(), '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;

if (!projectId) {
  console.error('NEXT_PUBLIC_SUPABASE_PROJECT_ID env가 필요합니다.');
  process.exit(1);
}

try {
  console.debug('=== Supabase DB types 생성 시작 ===');

  execSync(
    `pnpm exec supabase gen types typescript --project-id ${projectId} --schema public > src/lib/supabase/database.types.ts`,
    {
      stdio: 'inherit',
    },
  );

  console.debug('=== Supabase DB types 생성 완료 ===');
  process.exit(0);
} catch (error) {
  console.error('=== Supabase DB types 생성 실패 ===');
  console.error(error);
  process.exit(1);
}
