import { useMutation } from '@tanstack/react-query';

import { removeUrl } from '@/features/links/api/actions';
import useToast from '@/hooks/useToast';
import { ToastTypeEnum } from '@/enums/toast-type.enum';

export default function useRemoveUrl() {
  const { showToast } = useToast();
  const showError = () => {
    showToast('Something wrong', ToastTypeEnum.ERROR, ['item']);
  };
  return useMutation<{ success: boolean; errors?: any[] }, Error, { itemId: number }>({
    mutationFn: ({ itemId }) => removeUrl(itemId),
    onSuccess: (response) => {
      if (response.success) {
        showToast('Link removed successfully', ToastTypeEnum.SUCCESS, ['item', 'remove']);
      } else {
        showError();
      }
    },
    onError: () => {
      showError();
    },
  });
}
