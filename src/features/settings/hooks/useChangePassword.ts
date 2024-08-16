import useToast from '@/hooks/useToast';
import { ToastTypeEnum } from '@/enums/toast-type.enum';
import { useMutation } from '@tanstack/react-query';
import { changePassword } from '@/features/settings/api/actions';
import { UseFormReset } from 'react-hook-form';
import { Inputs } from '@/features/settings/components/change-password-form';

export type ChangePasswordRequest = {
  currentPassword: string;
  newPassword: string;
};
export default function useChangePassword(reset: UseFormReset<Inputs>) {
  const { showToast } = useToast();
  const showError = () => {
    showToast('Wrong credentials', ToastTypeEnum.ERROR, ['item']);
  };
  return useMutation<{ success: boolean; errors?: any[] }, Error, ChangePasswordRequest>({
    mutationFn: (data) => changePassword(data),
    onSuccess: (response) => {
      if (response.success) {
        showToast('Password changed successfully', ToastTypeEnum.SUCCESS);
        reset({ currentPassword: '', confirmNewPassword: '', newPassword: '' });
      } else {
        showError();
      }
    },
    onError: () => {
      showError();
    },
  });
}
