'use client';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import useLogin from '@/features/auth/hooks/login';
import FormButton from '@/components/ui/form-button/form-button';
import Typography from '@mui/material/Typography';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormError from '@/components/ui/form-error/form-error';

type Inputs = {
  email: string;
  password: string;
};
type Props = {
  isError: boolean;
};

const formSchema: ZodType<Inputs> = z.object({
  email: z.string().email({ message: 'Invalid Email' }).min(1, { message: 'Required' }),
  password: z.string().min(1, { message: 'Required' }),
});

export default function LoginForm({ isError }: Props) {
  const { isLoading, login } = useLogin();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
    resolver: zodResolver(formSchema),
  });
  const handleOnSubmit = async (val: Inputs) => {
    const { email, password } = val;
    login(email, password);
  };
  return (
    <>
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
              name="email"
              control={control}
              rules={{ required: 'First name is required' }}
              render={() => (
                <TextField
                  id="outlined-basic"
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
        <FormButton label="Sign in" loading={isLoading} startIcon={<FaSignInAlt />} />
      </form>
      {isError && (
        <Typography
          role="alert"
          variant="body1"
          component="p"
          sx={{ color: '#f80202', margin: '10px 0' }}
        >
          <strong>Wrong Credentials!</strong> <span>Invalid email or password</span>
        </Typography>
      )}
    </>
  );
}
