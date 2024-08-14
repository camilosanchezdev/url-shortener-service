'use client';

import Button from '@mui/material/Button';
import { IoCreateOutline } from 'react-icons/io5';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useQueryParams, { IParams } from '@/hooks/params';

const styles = {
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%', lg: '50%' } },
};

export default function CreateLink() {
  const { setParams } = useQueryParams();

  const handleOpen = () => {
    const params: IParams[] = [
      {
        key: 'show',
        value: 'true',
      },
    ];
    setParams(params);
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
