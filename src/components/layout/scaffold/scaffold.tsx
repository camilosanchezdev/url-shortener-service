'use client';

import { AppBar, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { RxHamburgerMenu } from 'react-icons/rx';
import UserMenu from '@/components/layout/user-menu/user-menu';
import Sidebar from '@/components/layout/sidebar/sidebar';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { SxProps, Theme } from '@mui/system';
import Stack from '@mui/material/Stack';

const styles = {
  appBar: {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
  toolBar: { display: 'flex', justifyContent: 'space-between', zIndex: 1100 },
  title: { display: 'flex', alignItems: 'center', gap: 2 },
};
const boxStyles: SxProps<Theme> = {
  backgroundColor: '#e8e8e8',
  borderRadius: '10px',
  marginTop: '72px',
  minHeight: 'calc(100vh - 72px)',
  maxHeight: 'calc(100vh - 72px)',
  overflowY: 'scroll',
  gridColumn: 'span 12 / span 12',
};
const contentStyles: SxProps<Theme> = {
  backgroundColor: '#e8e8e8',
  borderRadius: '10px',
  marginTop: '72px',
  paddingBottom: '80px',
  gridColumn: 'span 12 / span 12',
};

type Props = {
  children: ReactNode;
};
export default function Scaffold({ children }: Props) {
  const greaterThan900 = useMediaQuery('(min-width: 900px)');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(greaterThan900);
  }, [greaterThan900]);
  const contentMarginLeft = useMemo(() => {
    if (greaterThan900) {
      return open ? '260px' : '72px';
    }
    return '0';
  }, [greaterThan900, open]);
  return (
    <>
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolBar}>
          <Box sx={styles.title}>
            <IconButton color="primary" edge="start" onClick={() => setOpen(!open)}>
              <RxHamburgerMenu />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              noWrap
              sx={{ color: '#444444', fontWeight: 'bold' }}
            >
              URL Shortener Service
            </Typography>
          </Box>

          <UserMenu />
        </Toolbar>
      </AppBar>
      <Sidebar open={open} setOpen={setOpen} greaterThan900={greaterThan900} />
      <Box
        sx={{
          ...boxStyles,
          marginLeft: contentMarginLeft,
        }}
      >
        <Stack sx={contentStyles}>{children}</Stack>
      </Box>
    </>
  );
}
