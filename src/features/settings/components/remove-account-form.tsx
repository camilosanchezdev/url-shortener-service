'use client';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import FormButton from '@/components/ui/form-button/form-button';
import useQueryParams, { IParams } from '@/hooks/params';

export default function RemoveAccountForm() {
  const { setParams } = useQueryParams();
  const handleOnClick = () => {
    const params: IParams[] = [
      {
        key: 'remove',
        value: 'true',
      },
    ];
    setParams(params);
  };
  return (
    <Box>
      <Typography variant="body1" paragraph>
        This action cannot be undone. Once you delete your account, all your data will be
        permanently removed.
      </Typography>
      <FormButton
        label="Delete Account"
        color="error"
        type="button"
        handleOnClick={handleOnClick}
        loading={false}
      />
    </Box>
  );
}
