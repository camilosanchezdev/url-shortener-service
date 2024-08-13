import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function DashboardPage() {
  return (
    <Box sx={{ margin: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        noWrap
        sx={{ margin: '16px 0', fontWeight: 'bold', color: '#444' }}
      >
        Dashboard
      </Typography>
    </Box>
  );
}
