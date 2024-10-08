'use server';

import { createOrUpdate } from '@/utils/crudService.util';
import { RegisterRequest } from '@/features/auth/hooks/useRegister';
import { HttpMethodsEnum } from '@/enums/http-methods.enum';

export async function register(
  data: RegisterRequest,
): Promise<{ success: boolean; errors?: any[] }> {
  return createOrUpdate<{ title?: string; originalUrl: string }>(
    'auth/register',
    data,
    HttpMethodsEnum.POST,
  );
}
