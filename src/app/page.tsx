import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import LoginForm from '@/features/auth/components/login-form';
import Stack from '@mui/material/Stack';
import RegisterForm from '@/features/auth/components/register-form';
import Link from 'next/link';
import { ToastPayload } from '@/types/toast-payload.type';
import decodeBase64ToObject from '@/utils/decode-base-64.util';
import Toast from '@/components/ui/toast/toast';

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const styles = {
  leftBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    minHeight: '100vh',
  },
  leftBoxContent: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    minHeight: '100vh',
  },
  text: { mb: 2 },
  textBold: { fontWeight: 'bold' },
};

export default function Home({ searchParams }: SearchParamProps) {
  const isError = searchParams?.error === 'CredentialsSignin';
  const toast = searchParams?.toast;
  const toastPayload: ToastPayload | null = toast
    ? decodeBase64ToObject<ToastPayload>(toast)
    : null;
  const register = searchParams?.q?.toLowerCase() === 'register';
  return (
    <Container maxWidth={false} sx={{ padding: '0 !important', minHeight: '100vh' }}>
      <Grid container>
        <Grid item xs={8}>
          <Box sx={styles.leftBox}>
            <Stack sx={styles.leftBoxContent}>
              <Typography variant="h4" component="h1" sx={styles.text}>
                Build stronger digital connections
              </Typography>
              <Typography variant="body1" component="p" sx={styles.text}>
                Use our URL shortener to engage your audience and connect them to the right
                information. Build, edit, and track everything inside the URL Shortener Service.
              </Typography>
              <Image src="/dashboard.webp" alt="logo" width={432} height={324} priority />
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={styles.rightBox}>
            {register ? (
              <>
                <Typography variant="h6" component="h2" sx={styles.text}>
                  Get started absolutely free
                </Typography>
                <Typography variant="body1" component="p" sx={styles.text}>
                  {'Already have an account? '}
                  <Link href="?q=signin" style={styles.textBold}>
                    Sign in
                  </Link>
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="h6" component="h2" sx={styles.text}>
                  Sign in to your account
                </Typography>
                <Typography variant="body1" component="p" sx={styles.text}>
                  {"Don't have an account? "}
                  <Link href="?q=register" style={styles.textBold}>
                    Get started
                  </Link>
                </Typography>
              </>
            )}
            {register ? <RegisterForm /> : <LoginForm isError={isError} />}
          </Box>
        </Grid>
      </Grid>
      {toastPayload && <Toast {...toastPayload} />}
    </Container>
  );
}
