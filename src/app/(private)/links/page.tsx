import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import BasicCard from '@/features/links/components/basic-card';
import Button from '@mui/material/Button';
import { IoCreateOutline } from 'react-icons/io5';
import PageContainer from '@/components/layout/page-container/page-container';

const styles = {
  content: { display: 'flex', gap: 2 },
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%', lg: '50%' } },
};

export default function LinksPage() {
  return (
    <PageContainer title="Links">
      <Box
        sx={{
          ...styles.widthResponsive,
          ...{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0' },
        }}
      >
        <Button
          variant="contained"
          sx={{ width: '250px', display: 'flex', alignItems: 'center' }}
          startIcon={<IoCreateOutline />}
        >
          Add link
        </Button>
      </Box>
      <Stack sx={{ ...styles.widthResponsive, ...styles.content }}>
        {[1, 2, 3, 4, 5].map((el) => (
          <BasicCard key={el} />
        ))}
      </Stack>
    </PageContainer>
  );
}
