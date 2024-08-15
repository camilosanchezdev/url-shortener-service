import { ToastTypeEnum } from '@/enums/toast-type.enum';

export type ToastPayload = {
  show: boolean;
  type: ToastTypeEnum;
  message: string;
};
