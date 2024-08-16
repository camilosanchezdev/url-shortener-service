'use client';

import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import FormError from '@/components/ui/form-error/form-error';
import FormButton from '@/components/ui/form-button/form-button';
import { IoSaveOutline } from 'react-icons/io5';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';
import useChangePassword from '@/features/settings/hooks/useChangePassword';
import PasswordInput from '@/components/ui/password-input/password-input';

const styles = {
  formGroup: { display: 'flex', flexDirection: 'column', gap: 1 },
  formControl: { margin: '10px 0' },
};

export type Inputs = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const formSchema: ZodType<Inputs> = z
  .object({
    currentPassword: z.string().trim().min(1, { message: 'Required' }),
    newPassword: z.string().trim().min(8, { message: 'Password must be at least 8 characters' }),
    confirmNewPassword: z.string().trim().min(1, { message: 'Required' }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ['confirmNewPassword'],
  });

export default function ChangePasswordForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    mode: 'all',
    resolver: zodResolver(formSchema),
  });
  const { mutate, isPending } = useChangePassword(reset);
  const handleOnSubmit = async ({ currentPassword, newPassword, confirmNewPassword }: Inputs) => {
    mutate({ newPassword, currentPassword });
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormGroup sx={styles.formGroup}>
        <FormControl sx={styles.formControl}>
          <PasswordInput
            name="currentPassword"
            label="Current Password"
            control={control}
            register={register}
          />
          {errors.currentPassword && <FormError message={errors.currentPassword.message} />}
        </FormControl>
        <FormControl sx={styles.formControl}>
          <PasswordInput
            name="newPassword"
            label="New Password"
            control={control}
            register={register}
          />
          {errors.newPassword && <FormError message={errors.newPassword.message} />}
        </FormControl>
        <FormControl sx={styles.formControl}>
          <PasswordInput
            name="confirmNewPassword"
            label="Confirm New Password"
            control={control}
            register={register}
          />
          {errors.confirmNewPassword && <FormError message={errors.confirmNewPassword.message} />}
        </FormControl>
        <FormButton label="Update password" loading={isPending} startIcon={<IoSaveOutline />} />
      </FormGroup>
    </form>
  );
}
