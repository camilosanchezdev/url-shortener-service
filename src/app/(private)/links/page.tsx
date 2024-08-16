import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Box from '@mui/material/Box';

import CustomDialog from '@/components/ui/custom-dialog/custom-dialog';
import LinkForm from '@/features/links/components/form';
import safeParseNumberUtil from '@/utils/safe-parse-number.util';
import RemoveLink from '@/features/links/components/remove-link';
import CreateLink from '@/features/links/components/create-link';
import { getUrls } from '@/features/links/api/actions';
import Cards from '@/features/links/components/cards';
import PageContainer from '@/components/layout/page-container/page-container';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '@/constants/pagination.const';
import Toast from '@/components/ui/toast/toast';
import { ToastPayload } from '@/types/toast-payload.type';
import decodeBase64ToObject from '@/utils/decode-base-64.util';

const styles = {
  content: { display: 'flex', gap: 2 },
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%' } },
  actions: { display: 'flex', justifyContent: 'flex-end', margin: '10px 0' },
};

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};
export default async function LinksPage({ searchParams }: SearchParamProps) {
  const visible = searchParams?.show?.toLowerCase() === 'true';
  const remove = searchParams?.remove?.toLowerCase() === 'true';
  const toast = searchParams?.toast;
  const toastPayload: ToastPayload | null = toast
    ? decodeBase64ToObject<ToastPayload>(toast)
    : null;
  const itemSelected = safeParseNumberUtil(searchParams?.item);
  const formTitle = itemSelected ? 'Edit link' : 'Create link';
  const queryClient = new QueryClient();
  const page = safeParseNumberUtil(searchParams?.p, DEFAULT_PAGE);
  const limit = safeParseNumberUtil(searchParams?.l, DEFAULT_LIMIT);

  await queryClient.prefetchQuery({
    queryKey: ['urls', page, limit],
    queryFn: () => getUrls(page, limit),
  });

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
        <LinkForm itemSelected={itemSelected} />
      </CustomDialog>
      <CustomDialog visible={remove}>
        <RemoveLink itemSelected={itemSelected} />
      </CustomDialog>
      {toastPayload && <Toast {...toastPayload} />}
    </PageContainer>
  );
}
