'use client';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import { DialogContent, IconButton, Typography } from '@mui/material';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';
import useQueryParams from '@/hooks/params';

const styles = {
  dialog: { '& .MuiPaper-root': { width: '400px' } },
  dialogTitle: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  title: { margin: '16px 0', fontWeight: 'bold', color: '#444' },
};
type Props = {
  title?: string;
  children: React.ReactNode;
  visible: boolean;
};
export default function CustomDialog({ title, children, visible }: Props) {
  const { removeParams } = useQueryParams();

  const handleClose = () => {
    removeParams(['show', 'item']);
  };
  return (
    <Dialog onClose={() => handleClose()} open={visible} sx={styles.dialog}>
      {title && (
        <DialogTitle sx={styles.dialogTitle}>
          <Typography variant="h6" component="span" noWrap sx={styles.title}>
            {title}
          </Typography>
          <IconButton onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
