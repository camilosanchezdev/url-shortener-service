import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { ReactNode } from 'react';

const buttonStyles: SxProps<Theme> = {
  width: '100%',
  height: '40px',
};

type Props = {
  loading: boolean;
  label: string;
  startIcon?: ReactNode;
};
export default function FormButton({ label, loading, startIcon }: Props) {
  return (
    <Box>
      {loading ? (
        <Button variant="contained" type="submit" sx={buttonStyles} disabled>
          <CircularProgress size="1.5rem" />
        </Button>
      ) : (
        <Button variant="contained" type="submit" sx={buttonStyles} startIcon={startIcon}>
          {label}
        </Button>
      )}
    </Box>
  );
}
