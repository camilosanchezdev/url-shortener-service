'use client';

import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { FaTimes } from 'react-icons/fa';
import { SnackbarContent } from '@mui/material';
import useQueryParams from '@/hooks/params';

type Props = {
  visible: boolean;
};
export default function Toast({ visible }: Props) {
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
      open={visible}
      autoHideDuration={2000}
      onClose={handleClose}
      message="Link copied"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <SnackbarContent
        style={{
          backgroundColor: '#3c8a3c',
        }}
        message={<span id="client-snackbar">Link copied</span>}
        action={action}
      />
    </Snackbar>
  );
}
