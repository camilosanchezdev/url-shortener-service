import { useMutation } from '@tanstack/react-query';

import { createOrUpdateUrl } from '@/features/links/api/actions';
import useToast from '@/hooks/useToast';
import { ToastTypeEnum } from '@/enums/toast-type.enum';

export type UrlRequest = {
  title?: string;
  originalUrl: string;
  itemId?: number;
};
export default function useCreateUpdateUrl() {
  const { showToast } = useToast();
  const showError = () => {
    showToast('Something wrong', ToastTypeEnum.ERROR, ['item']);
  };
  return useMutation<{ success: boolean; errors?: any[] }, Error, UrlRequest>({
    mutationFn: (data) => createOrUpdateUrl(data),
    onSuccess: (response) => {
      if (response.success) {
        showToast('Link saved successfully', ToastTypeEnum.SUCCESS, ['item']);
      } else {
        showError();
      }
    },
    onError: () => {
      showError();
    },
  });
}
