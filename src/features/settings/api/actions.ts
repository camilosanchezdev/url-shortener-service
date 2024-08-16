'use server';

import { createOrUpdate, fetchCustom } from '@/utils/crudService.util';

import { ChangePasswordRequest } from '@/features/settings/hooks/useChangePassword';
import { HttpMethodsEnum } from '@/enums/http-methods.enum';
import { UpdateInformationRequest } from '@/features/settings/hooks/useUpdateInformation';
import { GenericResponse } from '@/types/generic-response.type';

export async function changePassword(
  payload: ChangePasswordRequest,
): Promise<{ success: boolean; errors?: any[] }> {
  return createOrUpdate<{ title?: string; originalUrl: string }>(
    'users/change-password',
    payload,
    HttpMethodsEnum.PUT,
  );
}
export async function updateInformation(
  payload: UpdateInformationRequest,
): Promise<GenericResponse> {
  return createOrUpdate<{ title?: string; originalUrl: string }>(
    'users/information',
    payload,
    HttpMethodsEnum.PUT,
  );
}

export async function getInformation(): Promise<{ name: string; email: string }> {
  return fetchCustom('users/information');
}

export async function removeAccount(): Promise<GenericResponse> {
  return createOrUpdate('users/remove-account', undefined, HttpMethodsEnum.DELETE);
}
