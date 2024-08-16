'use client';

import { Grid, List, ListItem, ListItemText, Paper, Skeleton, Typography } from '@mui/material';
import useGetDashboard from '@/features/dashboard/hooks/useGetDashboard';
import { baseConfig } from '@/config/base.config';

export default function Dashboard() {
  const { data, isLoading } = useGetDashboard();
  return (
    <Grid container spacing={4}>
      {/* Total Short URLs */}
      <Grid item xs={12} md={4}>
        {isLoading ? (
          <Skeleton variant="rectangular" width={362} height={136} />
        ) : (
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6">Total Short URLs</Typography>
            <Typography variant="h3">{data?.count}</Typography>
          </Paper>
        )}
      </Grid>

      {/* Total Clicks */}
      <Grid item xs={12} md={4}>
        {isLoading ? (
          <Skeleton variant="rectangular" width={362} height={136} />
        ) : (
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6">Total Clicks</Typography>
            <Typography variant="h3">{data?.clicks}</Typography>
          </Paper>
        )}
      </Grid>

      {/* Top Short URLs */}
      <Grid item xs={12} md={4}>
        {isLoading ? (
          <Skeleton variant="rectangular" width={362} height={319} />
        ) : (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Top Short URLs
            </Typography>
            <List>
              {data?.urls.map((url, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${url.title ?? url.originalUrl} (${url.clicks} clicks)`}
                    secondary={`${baseConfig.BASE_URL}/q/${url.shortCode}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}
