'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#171717', // Primary color for buttons and inputs
      // main: '#1976d2', // Primary color for buttons and inputs
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for buttons
          padding: '8px 16px', // Padding for buttons
          boxShadow: 'none', // Remove default box shadow
          '&:hover': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Custom hover effect
          },
        },
        containedPrimary: {
          backgroundColor: '#171717',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#333333', // Darker shade on hover
          },
        },
        outlined: {
          borderColor: '#171717',
          color: '#171717',
          '&:hover': {
            borderColor: '#1e1e1e',
            backgroundColor: '#333333', // Light background on hover
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
