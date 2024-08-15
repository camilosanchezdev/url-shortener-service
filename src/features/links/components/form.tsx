'use client';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { IoSaveOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';

import useGetUrl from '@/features/links/hooks/useGetUrl';
import useCreateUpdateUrl from '@/features/links/hooks/useCreateUpdateUrl';

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
type Props = {
  itemSelected: number;
};
export default function LinkForm({ itemSelected }: Props) {
  const { data: url, isLoading: isLoadingDetail } = useGetUrl(itemSelected);
  const { mutate, isPending: isLoadingMutation } = useCreateUpdateUrl();
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
    if (url) {
      const { title, originalUrl } = url;
      reset({ title, originalUrl });
    }
  }, [url, reset]);
  const handleOnSubmit = async ({ title, originalUrl }: Inputs) => {
    mutate({ title, originalUrl, itemId: itemSelected });
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
                autoComplete="off"
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
                autoComplete="off"
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
          {isLoadingMutation || isLoadingDetail ? (
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
