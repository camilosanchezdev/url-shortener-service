import PageContainer from '@/components/layout/page-container/page-container';
import { Box, Typography, Grid, Paper } from '@mui/material';
import ChangePasswordForm from '@/features/settings/components/change-password-form';
import { ToastPayload } from '@/types/toast-payload.type';
import decodeBase64ToObject from '@/utils/decode-base-64.util';
import Toast from '@/components/ui/toast/toast';
import UpdateProfileForm from '@/features/settings/components/update-profile-form';
import RemoveAccountForm from '@/features/settings/components/remove-account-form';
import CustomDialog from '@/components/ui/custom-dialog/custom-dialog';
import RemoveAccountDialog from '@/features/settings/components/remove-account-dialog';

const styles = {
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%' } },
};

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function SettingsPage({ searchParams }: SearchParamProps) {
  const remove = searchParams?.remove?.toLowerCase() === 'true';
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
              <UpdateProfileForm />
            </Paper>
          </Grid>

          {/* Delete Account Form */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="error">
                Delete Account
              </Typography>
              <RemoveAccountForm />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {toastPayload && <Toast {...toastPayload} />}
      <CustomDialog visible={remove}>
        <RemoveAccountDialog />
      </CustomDialog>
    </PageContainer>
  );
}
