import { ToastPayload } from '@/types/toast-payload.type';
import { ToastTypeEnum } from '@/enums/toast-type.enum';
import encodeObjectToBase64 from '@/utils/encode-base-64.util';
import useQueryParams, { IParams } from '@/hooks/params';

export default function useToast() {
  const { setParams, removeParams } = useQueryParams();
  const showToast = (message: string, type: ToastTypeEnum, dropParams?: Array<string>) => {
    const toastMessage: ToastPayload = {
      show: true,
      type,
      message,
    };
    const toastMessageEncoded = encodeObjectToBase64<ToastPayload>(toastMessage);
    const params: IParams[] = [
      {
        key: 'toast',
        value: toastMessageEncoded,
      },
    ];
    setParams(params);
    const defaultParam = 'show';
    const unusedParams = dropParams ? [defaultParam, ...dropParams] : [defaultParam];
    removeParams(unusedParams);
  };
  return { showToast };
}
