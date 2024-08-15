'use client';

import Stack from '@mui/material/Stack';

import BasicCard from '@/features/links/components/basic-card';
import useUrls from '@/features/links/hooks/urls';

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
  // const { data: urls, isLoading } = useUrls(page, limit);
  const { getUrlsList } = useUrls();
  const { data: urls, isLoading } = getUrlsList(page, limit);
  return (
    <Stack sx={{ ...styles.widthResponsive, ...styles.content }}>
      {urls?.data.map((el) => <BasicCard key={el.id} {...el} />)}
    </Stack>
  );
}
