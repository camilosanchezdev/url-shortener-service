'use client';

import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useQueryParams from '@/hooks/params';
import useRemoveAccount from '@/features/settings/hooks/useRemoveAccount';

export default function RemoveAccountDialog() {
  const { mutate } = useRemoveAccount();
  const { removeParams } = useQueryParams();
  const handleConfirm = () => {
    mutate(null);
  };

  const handleClose = () => {
    removeParams(['remove']);
  };
  return (
    <Box>
      <DialogTitle id="alert-dialog-title"> Do you want to remove your account?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You will not be able to undo this action
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleConfirm} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Box>
  );
}
