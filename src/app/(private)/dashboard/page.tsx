import PageContainer from '@/components/layout/page-container/page-container';
import { Box, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
const styles = {
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%' } },
};
export default function DashboardPage() {
  return (
    <PageContainer title="Dashboard">
      <Box p={4} sx={styles.widthResponsive}>
        <Grid container spacing={4}>
          {/* Total Short URLs */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6">Total Short URLs</Typography>
              <Typography variant="h3">123</Typography>
            </Paper>
          </Grid>

          {/* Total Clicks */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6">Total Clicks</Typography>
              <Typography variant="h3">123</Typography>
            </Paper>
          </Grid>

          {/* Top Short URLs */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Top Short URLs
              </Typography>
              <List>
                {[1, 2, 3].map((url, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`sample title (44 clicks)`}
                      secondary={`http://bit.ly/abc123`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
