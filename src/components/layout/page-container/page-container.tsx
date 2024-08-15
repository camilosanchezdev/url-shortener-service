import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoCreateOutline } from 'react-icons/io5';
import BasicCard from '@/features/links/components/basic-card';
import { ReactNode } from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  title: { margin: '16px 0', fontWeight: 'bold', color: '#444' },
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%' } },
};

type Props = {
  children?: ReactNode;
  title: string;
};
export default function PageContainer({ children, title }: Props) {
  return (
    <Box sx={styles.container}>
      <Stack sx={styles.widthResponsive}>
        <Typography variant="h4" component="h1" noWrap sx={styles.title}>
          {title}
        </Typography>
      </Stack>
      {children}
    </Box>
  );
}
