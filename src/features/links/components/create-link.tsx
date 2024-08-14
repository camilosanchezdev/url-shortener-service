'use client';

import Button from '@mui/material/Button';
import { IoCreateOutline } from 'react-icons/io5';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const styles = {
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%', lg: '50%' } },
};

export default function CreateLink() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleOpen = () => {
    const params = new URLSearchParams(searchParams);
    params.set('show', 'true');
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <Button
      variant="contained"
      sx={{ width: '250px', display: 'flex', alignItems: 'center' }}
      startIcon={<IoCreateOutline />}
      onClick={handleOpen}
    >
      Add link
    </Button>
  );
}
