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

const styles = {
  content: { display: 'flex', gap: 2 },
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%', lg: '50%' } },
  actions: { display: 'flex', justifyContent: 'flex-end', margin: '10px 0' },
};

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};
export default function LinksPage({ searchParams }: SearchParamProps) {
  const visible = searchParams?.show?.toLowerCase() === 'true';
  const remove = searchParams?.remove?.toLowerCase() === 'true';
  const visibleToast = searchParams?.toast?.toLowerCase() === 'true';
  const itemSelected = safeParseNumber(searchParams?.item);

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
      <Stack sx={{ ...styles.widthResponsive, ...styles.content }}>
        {[1, 2, 3, 4, 5].map((el) => (
          <BasicCard key={el} />
        ))}
      </Stack>
      <CustomDialog title={itemSelected ? 'Edit link' : 'Create link'} visible={visible}>
        <LinkForm />
      </CustomDialog>
      <CustomDialog visible={remove}>
        <RemoveLink />
      </CustomDialog>
      <Toast visible={visibleToast} />
    </PageContainer>
  );
}
