'use client';

import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormError from '@/components/ui/form-error/form-error';
import FormButton from '@/components/ui/form-button/form-button';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useGetInformation from '@/features/settings/hooks/useGetInformation';
import { useEffect } from 'react';
import useUpdateInformation from '@/features/settings/hooks/useUpdateInformation';

export type Inputs = {
  name: string;
  email: string;
};

const formSchema: ZodType<Inputs> = z.object({
  name: z.string().trim().min(1, { message: 'Required' }),
  email: z.string().trim().min(1, { message: 'Required' }).email({ message: 'Invalid EMail' }),
});

const styles = {
  formGroup: { display: 'flex', flexDirection: 'column', gap: 1 },
  formControl: { margin: '10px 0' },
};

export default function UpdateProfileForm() {
  const { data, isLoading } = useGetInformation();
  const { mutate, isPending } = useUpdateInformation();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
    resolver: zodResolver(formSchema),
  });
  useEffect(() => {
    if (data) {
      const { name, email } = data;
      reset({ name, email });
    }
  }, [data, reset]);
  const handleOnSubmit = async ({ name, email }: Inputs) => {
    mutate({ email, name });
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormGroup sx={styles.formGroup}>
        <FormControl sx={styles.formControl}>
          {/*{...field}*/}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                disabled={isLoading}
                id="name"
                label="Name"
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{ shrink: !!field.value }}
                {...register('name')}
              />
            )}
          />
          {errors.name && <FormError message={errors.name.message} />}
        </FormControl>
        <FormControl sx={styles.formControl}>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field }) => (
              <TextField
                disabled={isLoading}
                InputLabelProps={{ shrink: !!field.value }}
                id="email"
                label="Email"
                variant="outlined"
                autoComplete="off"
                {...register('email')}
              />
            )}
          />
          {errors.email && <FormError message={errors.email.message} />}
        </FormControl>
        <FormButton label="Update Profile" loading={isPending} />
      </FormGroup>
    </form>
  );
}
