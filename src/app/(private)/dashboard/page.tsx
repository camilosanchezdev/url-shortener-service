import PageContainer from '@/components/layout/page-container/page-container';
import Box from '@mui/material/Box';
import Dashboard from '@/features/dashboard/components/dashboard';
const styles = {
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%' } },
};
export default function DashboardPage() {
  return (
    <PageContainer title="Dashboard">
      <Box p={4} sx={styles.widthResponsive}>
        <Dashboard />
      </Box>
    </PageContainer>
  );
}
