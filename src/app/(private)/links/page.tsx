import Stack from '@mui/material/Stack';
import BasicCard from '@/features/links/components/basic-card';
import PageContainer from '@/components/layout/page-container/page-container';
import CreateLink from '@/features/links/components/create-link';
import Box from '@mui/material/Box';
import CustomDialog from '@/components/ui/custom-dialog/custom-dialog';
import LinkForm from '@/features/links/components/form';
import safeParseNumber from '@/utils/safe-parse-number';
import RemoveLink from '@/features/links/components/remove-link';
import Toast from '@/components/ui/toast/toast';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getUrls } from '@/features/links/api/actions';
import Cards from '@/features/links/components/cards';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

const styles = {
  content: { display: 'flex', gap: 2 },
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%', lg: '50%' } },
  actions: { display: 'flex', justifyContent: 'flex-end', margin: '10px 0' },
};

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};
export default async function LinksPage({ searchParams }: SearchParamProps) {
  const session = await getServerSession(authOptions);
  const token = session?.user?.id;
  const visible = searchParams?.show?.toLowerCase() === 'true';
  const remove = searchParams?.remove?.toLowerCase() === 'true';
  const visibleToast = searchParams?.toast?.toLowerCase() === 'true';
  const itemSelected = safeParseNumber(searchParams?.item);
  const formTitle = itemSelected ? 'Edit link' : 'Create link';
  const queryClient = new QueryClient();
  const page = searchParams?.page && !isNaN(+searchParams?.page) ? +searchParams?.page : 1;
  const limit = searchParams?.limit && !isNaN(+searchParams?.limit) ? +searchParams?.limit : 5;
  if (token) {
    await queryClient.prefetchQuery({
      queryKey: ['urls', page, limit],
      queryFn: () => getUrls(page, limit, session),
    });
  }

  return (
    <PageContainer title="Links">
      <Box
        sx={{
          ...styles.widthResponsive,
          ...styles.actions,
        }}
      >
        <CreateLink />
      </Box>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Cards page={page} limit={limit} />
      </HydrationBoundary>

      <CustomDialog title={visible ? formTitle : ' '} visible={visible}>
        <LinkForm />
      </CustomDialog>
      <CustomDialog visible={remove}>
        <RemoveLink />
      </CustomDialog>
      <Toast visible={visibleToast} />
    </PageContainer>
  );
}
