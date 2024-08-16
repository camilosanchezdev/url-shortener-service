import PageContainer from '@/components/layout/page-container/page-container';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import ChangePasswordForm from '@/features/settings/components/change-password-form';
import { ToastPayload } from '@/types/toast-payload.type';
import decodeBase64ToObject from '@/utils/decode-base-64.util';
import Toast from '@/components/ui/toast/toast';

const styles = {
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%' } },
};

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function SettingsPage({ searchParams }: SearchParamProps) {
  const toast = searchParams?.toast;
  const toastPayload: ToastPayload | null = toast
    ? decodeBase64ToObject<ToastPayload>(toast)
    : null;
  return (
    <PageContainer title="Settings">
      <Box p={4} sx={styles.widthResponsive}>
        <Grid container spacing={4}>
          {/* Change Password Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Change Password
              </Typography>
              <ChangePasswordForm />
            </Paper>
          </Grid>

          {/* Update Profile Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Update Profile
              </Typography>
              <form>
                <TextField label="Name" name="name" fullWidth margin="normal" />
                <TextField label="Email" name="email" type="email" fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  Update Profile
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Delete Account Form */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="error">
                Delete Account
              </Typography>
              <Typography variant="body1" paragraph>
                This action cannot be undone. Once you delete your account, all your data will be
                permanently removed.
              </Typography>
              <Button variant="contained" color="error" fullWidth>
                Delete Account
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {toastPayload && <Toast {...toastPayload} />}
    </PageContainer>
  );
}
