'use client';

import { Controller, useForm } from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';
import FormError from '@/components/ui/form-error/form-error';
import useRegister from '@/features/auth/hooks/useRegister';
import FormButton from '@/components/ui/form-button/form-button';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const formSchema: ZodType<Inputs> = z.object({
  name: z.string().trim().min(1, { message: 'Required' }),
  email: z.string().trim().min(1, { message: 'Required' }).email({ message: 'Invalid EMail' }),
  password: z.string().trim().min(1, { message: 'Required' }),
});

export default function RegisterForm() {
  const { mutate, isPending } = useRegister();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
    resolver: zodResolver(formSchema),
  });
  const handleOnSubmit = async ({ email, password, name }: Inputs) => {
    console.log('{email, password, name}', { email, password, name });
    mutate({ email, password, name });
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} style={{ width: '50%' }}>
      <FormGroup
        sx={{
          display: 'flex',
          gap: 2,
          margin: '16px 0',
        }}
      >
        <FormControl>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'First name is required' }}
            render={() => (
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                autoComplete="off"
                {...register('name', { required: true })}
              />
            )}
          />
          {errors.name && <FormError message={errors.name.message} />}
        </FormControl>
        <FormControl>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'First name is required' }}
            render={() => (
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                autoComplete="off"
                {...register('email', { required: true })}
              />
            )}
          />
          {errors.email && <FormError message={errors.email.message} />}
        </FormControl>
        <FormControl>
          <Controller
            name="password"
            control={control}
            render={() => (
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                {...register('password', { required: true })}
              />
            )}
          />
          {errors.password && <FormError message={errors.password.message} />}
        </FormControl>
      </FormGroup>
      <FormButton label="create account" loading={isPending} />
    </form>
  );
}
