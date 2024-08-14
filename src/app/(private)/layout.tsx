import React, { ReactNode } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/system';
import Scaffold from '@/components/layout/scaffold/scaffold';
import Footer from '@/components/layout/footer/footer';

const containerStyles: SxProps<Theme> = {
  padding: '0 !important',
  maxHeight: '100vh',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
};

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <Container component="main" maxWidth={false} sx={containerStyles}>
      <Scaffold>
        <Box sx={{ backgroundColor: '#e8e8e8' }}>{children}</Box>
      </Scaffold>
      <Footer />
    </Container>
  );
}
