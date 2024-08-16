'use server';

import { createOrUpdate } from '@/utils/crudService.util';

import { ChangePasswordRequest } from '@/features/settings/hooks/useChangePassword';
import { HttpMethodsEnum } from '@/enums/http-methods.enum';

export async function changePassword(
  payload: ChangePasswordRequest,
): Promise<{ success: boolean; errors?: any[] }> {
  return createOrUpdate<{ title?: string; originalUrl: string }>(
    'users/change-password',
    payload,
    HttpMethodsEnum.PUT,
  );
}
