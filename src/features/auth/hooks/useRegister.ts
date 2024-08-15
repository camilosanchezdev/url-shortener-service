import useToast from '@/hooks/useToast';
import { ToastTypeEnum } from '@/enums/toast-type.enum';
import { useMutation } from '@tanstack/react-query';
import { register } from '@/features/auth/api/actions';

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};
export default function useRegister() {
  const { showToast } = useToast();
  const showError = () => {
    showToast('Something wrong', ToastTypeEnum.ERROR, ['item']);
  };
  return useMutation<{ success: boolean; errors?: any[] }, Error, RegisterRequest>({
    mutationFn: (data) => register(data),
    onSuccess: (response) => {
      if (response.success) {
        showToast('Account created successfully', ToastTypeEnum.SUCCESS, ['q']);
      } else {
        showError();
      }
    },
    onError: () => {
      showError();
    },
  });
}
