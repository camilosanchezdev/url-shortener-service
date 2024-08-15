'use client';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import { IoSaveOutline } from 'react-icons/io5';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircularProgress } from '@mui/material';
import { createOrUpdateUrl } from '@/features/links/api/actions';
import { ToastPayload } from '@/types/toast-payload.type';
import { ToastTypeEnum } from '@/enums/toast-type.enum';
import encodeObjectToBase64 from '@/utils/encode-base-64.util';
import useQueryParams, { IParams } from '@/hooks/params';

const styles = {
  formGroup: { display: 'flex', flexDirection: 'column', gap: 1 },
  formControl: { margin: '10px 0' },
  button: { width: '100%', height: '40px' },
  error: { margin: '8px 0 0 0', color: '#fd3131' },
};

type Inputs = {
  title?: string;
  originalUrl: string;
};

export const formSchema: ZodType<Inputs> = z.object({
  title: z.string().optional(),
  originalUrl: z.string().trim().min(1, { message: 'Required' }),
});
export default function LinkForm() {
  const { setParams, removeParams } = useQueryParams();
  const [itemSelected, setItemSelected] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
    resolver: zodResolver(formSchema),
  });
  const handleOnSubmit = async (data: Inputs) => {
    const response = await createOrUpdateUrl(data);
    if (response.success) {
      const toastMessage: ToastPayload = {
        show: true,
        type: ToastTypeEnum.SUCCESS,
        message: 'Link created successfully',
      };
      const toastMessageEncoded = encodeObjectToBase64<ToastPayload>(toastMessage);
      const params: IParams[] = [
        {
          key: 'toast',
          value: toastMessageEncoded,
        },
      ];
      setParams(params);
      removeParams(['show']);
    }
    console.log('=>(form.tsx:49) response', response);
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormGroup sx={styles.formGroup}>
        <FormControl sx={styles.formControl}>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Title name is required' }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                InputLabelProps={{ shrink: !!field.value }}
                {...register('title')}
              />
            )}
          />
        </FormControl>
        <FormControl sx={styles.formControl}>
          <Controller
            name="originalUrl"
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="URL"
                variant="outlined"
                InputLabelProps={{ shrink: !!field.value }}
                {...register('originalUrl')}
              />
            )}
          />
          {errors.originalUrl && (
            <Typography variant="body2" component="span" noWrap sx={styles.error}>
              {errors.originalUrl.message}
            </Typography>
          )}
        </FormControl>
        <Box>
          {isLoading ? (
            <Button
              variant="contained"
              className="w-full"
              type="submit"
              sx={styles.button}
              disabled
            >
              <CircularProgress size="1.5rem" />
            </Button>
          ) : (
            <Button
              variant="contained"
              startIcon={<IoSaveOutline />}
              className="w-full"
              type="submit"
              sx={styles.button}
            >
              Save
            </Button>
          )}
        </Box>
      </FormGroup>
    </form>
  );
}
