import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import LoginForm from '@/features/auth/components/login-form';

export default function Home() {
  return (
    <Container maxWidth={false} sx={{ padding: '0 !important', minHeight: '100vh' }}>
      <Grid container>
        <Grid item xs={8}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#e3e3e3',
              minHeight: '100vh',
              padding: '0 140px',
            }}
          >
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              Build stronger digital connections
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
              Use our URL shortener, QR Codes, and landing pages to engage your audience and connect
              them to the right information. Build, edit, and track everything inside the Bitly
              Connections Platform.
            </Typography>
            <Image
              src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/illustration-dashboard.webp"
              alt="logo"
              width={432}
              height={324}
            />
            {/*<Link href="/about" color="secondary" component={NextLink}>*/}
            {/*  Go to the about page*/}
            {/*</Link>*/}
            {/*<ProTip />*/}
            {/*<Copyright />*/}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ededed',
              minHeight: '100vh',
            }}
          >
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
              Sign in to your account
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account? Get started
            </Typography>
            <LoginForm />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
