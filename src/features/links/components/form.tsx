'use client';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { Controller, useForm } from 'react-hook-form';
import { IoSaveOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';

import useGetUrl from '@/features/links/hooks/useGetUrl';
import useCreateUpdateUrl from '@/features/links/hooks/useCreateUpdateUrl';
import FormError from '@/components/ui/form-error/form-error';
import FormButton from '@/components/ui/form-button/form-button';

const styles = {
  formGroup: { display: 'flex', flexDirection: 'column', gap: 1 },
  formControl: { margin: '10px 0' },
};

type Inputs = {
  title?: string;
  originalUrl: string;
};

export const formSchema: ZodType<Inputs> = z.object({
  title: z.string().optional(),
  originalUrl: z.string().trim().url({ message: 'Invalid URL' }).min(1, { message: 'Required' }),
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
                label="Title (optional)"
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
          {errors.originalUrl && <FormError message={errors.originalUrl.message} />}
        </FormControl>
        <FormButton
          label="Save"
          loading={isLoadingMutation || isLoadingDetail}
          startIcon={<IoSaveOutline />}
        />
      </FormGroup>
    </form>
  );
}
