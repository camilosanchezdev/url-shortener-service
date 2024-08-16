'use client';

import useToast from '@/hooks/useToast';
import { ToastTypeEnum } from '@/enums/toast-type.enum';
import { useMutation } from '@tanstack/react-query';
import { removeAccount } from '@/features/settings/api/actions';
import { signOut } from 'next-auth/react';

export default function useRemoveAccount() {
  const { showToast } = useToast();
  const showError = () => {
    showToast('Something went wrong', ToastTypeEnum.ERROR);
  };
  return useMutation<{ success: boolean; errors?: any[] }, Error, null>({
    mutationFn: () => removeAccount(),
    onSuccess: (response) => {
      if (response.success) {
        showToast('User removed  successfully', ToastTypeEnum.SUCCESS);
        signOut({ redirect: true, callbackUrl: '/' });
      } else {
        showError();
      }
    },
    onError: () => {
      showError();
    },
  });
}
