import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Chip, Stack } from '@mui/material';
import BasicCard from '@/features/links/components/basic-card';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  header: { width: { xs: '90%', sm: '75%', md: '70%', lg: '50%' } },
  title: { margin: '16px 0', fontWeight: 'bold', color: '#444' },
  content: { display: 'flex', gap: 2, width: { xs: '90%', sm: '75%', md: '70%', lg: '50%' } },
};

export default function LinksPage() {
  return (
    <Box sx={styles.container}>
      <Stack sx={styles.header}>
        <Typography variant="h4" component="h1" noWrap sx={styles.title}>
          Links
        </Typography>
      </Stack>

      <Stack sx={styles.content}>
        {[1, 2, 3, 4, 5].map((el) => (
          <BasicCard key={el} />
        ))}
      </Stack>
    </Box>
  );
}
