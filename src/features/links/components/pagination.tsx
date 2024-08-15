import Button from '@mui/material/Button';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';
import Box from '@mui/material/Box';
import usePagination from '@/features/links/hooks/usePagination';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
};
type Props = {
  count: number;
};
export default function Pagination({ count }: Props) {
  const { page, limit, nextPage, prevPage } = usePagination(count);
  return (
    <Box sx={styles.container}>
      <Button
        variant="contained"
        type="button"
        startIcon={<MdNavigateBefore />}
        sx={styles.button}
        disabled={page === 1}
        onClick={prevPage}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        type="button"
        endIcon={<MdNavigateNext />}
        sx={styles.button}
        disabled={count < page * limit}
        onClick={nextPage}
      >
        Next
      </Button>
    </Box>
  );
}
