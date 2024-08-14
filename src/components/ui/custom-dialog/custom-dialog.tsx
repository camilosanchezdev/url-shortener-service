'use client';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React, { ReactNode, useState } from 'react';
import { DialogContent, IconButton, Typography } from '@mui/material';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  // children: ReactNode;
  children: React.ReactNode;
  visible: boolean;
  // setVisible: (val: boolean) => void;
};
export default function CustomDialog({ title, children, visible }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleClose = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('show');
    params.delete('item');
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <Dialog
      onClose={() => handleClose()}
      open={visible}
      sx={{ '& .MuiPaper-root': { width: '400px' } }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h6"
          component="span"
          noWrap
          sx={{ margin: '16px 0', fontWeight: 'bold', color: '#444' }}
        >
          {title}
        </Typography>
        <IconButton onClick={() => handleClose()}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
