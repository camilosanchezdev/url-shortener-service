'use client';

import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { FaTimes } from 'react-icons/fa';
import { SnackbarContent } from '@mui/material';
import useQueryParams from '@/hooks/params';
import { ToastTypeEnum } from '@/enums/toast-type.enum';
import { ToastPayload } from '@/types/toast-payload.type';

function getToastBackground(type: ToastTypeEnum) {
  switch (type) {
    case ToastTypeEnum.SUCCESS:
      return '#3c8a3c';
  }
}
export default function Toast({ show, message, type }: ToastPayload) {
  const { removeParams } = useQueryParams();

  const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    removeParams(['toast']);
  };
  const action = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <FaTimes />
    </IconButton>
  );
  return (
    <Snackbar
      open={show}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <SnackbarContent
        style={{
          backgroundColor: getToastBackground(type),
        }}
        message={<span id="client-snackbar">{message}</span>}
        action={action}
      />
    </Snackbar>
  );
}
