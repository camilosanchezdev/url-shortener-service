import { IconButton, InputAdornment } from '@mui/material';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Control, Controller, UseFormRegister } from 'react-hook-form';

interface PasswordInputWithToggleProps {
  name: string;
  label: string;
  control: Control<any>;
  register: UseFormRegister<any>;
}

export default function PasswordInput({
  name,
  label,
  control,
  register,
}: PasswordInputWithToggleProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          id={name}
          label={label}
          variant="outlined"
          autoComplete="off"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...register(name)}
        />
      )}
    />
  );
  return (
    <TextField
      variant="outlined"
      autoComplete="off"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleTogglePasswordVisibility}
              edge="end"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
