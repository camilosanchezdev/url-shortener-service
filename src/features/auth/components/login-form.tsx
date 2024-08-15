'use client';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import useLogin from '@/features/auth/hooks/login';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { isLoading, login } = useLogin();
  const { control, register, handleSubmit } = useForm<Inputs>();
  const handleOnSubmit = async (val: Inputs) => {
    const { email, password } = val;
    login(email, password);
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
        </FormControl>
      </FormGroup>
      <div>
        <Button
          variant="contained"
          startIcon={<FaSignInAlt />}
          type="submit"
          sx={{ width: '100%' }}
        >
          Sign in
        </Button>
      </div>
    </form>
  );
}
