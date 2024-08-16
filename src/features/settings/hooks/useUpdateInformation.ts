import useToast from '@/hooks/useToast';
import { ToastTypeEnum } from '@/enums/toast-type.enum';
import { useMutation } from '@tanstack/react-query';
import { updateInformation } from '@/features/settings/api/actions';

export type UpdateInformationRequest = {
  name: string;
  email: string;
};
export default function useUpdateInformation() {
  const { showToast } = useToast();
  const showError = () => {
    showToast('Wrong credentials', ToastTypeEnum.ERROR);
  };
  return useMutation<{ success: boolean; errors?: any[] }, Error, UpdateInformationRequest>({
    mutationFn: (data) => updateInformation(data),
    onSuccess: (response) => {
      if (response.success) {
        showToast('User informatión saved successfully', ToastTypeEnum.SUCCESS);
      } else {
        showError();
      }
    },
    onError: () => {
      showError();
    },
  });
}
