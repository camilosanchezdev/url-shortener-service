'use client';

import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/system';

const boxStyles: SxProps<Theme> = {
  background: 'white',
  width: '100%',
  height: '50px',
  gridColumn: 'span 12 / span 12',
  position: 'absolute',
  bottom: 0,
  color: '#444444',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box component="footer" sx={boxStyles}>
      URL Shortener Service - {currentYear}
    </Box>
  );
}
