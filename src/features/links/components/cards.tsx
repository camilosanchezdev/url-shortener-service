'use client';

import Stack from '@mui/material/Stack';

import BasicCard from '@/features/links/components/basic-card';
import useGetUrls from '@/features/links/hooks/useGetUrls';
import Pagination from '@/features/links/components/pagination';

const styles = {
  content: { display: 'flex', gap: 2 },
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%', lg: '50%' } },
  actions: { display: 'flex', justifyContent: 'flex-end', margin: '10px 0' },
};

type Props = {
  page: number;
  limit: number;
};
export default function Cards({ page, limit }: Props) {
  const { data: urls } = useGetUrls(page, limit);
  return (
    <>
      {urls && (
        <Stack sx={{ ...styles.widthResponsive, ...styles.content }}>
          {urls.data.map((el) => (
            <BasicCard key={el.id} {...el} />
          ))}
          <Pagination count={urls.count} />
        </Stack>
      )}
    </>
  );
}
