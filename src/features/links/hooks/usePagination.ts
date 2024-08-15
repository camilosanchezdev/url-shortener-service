import { useSearchParams } from 'next/navigation';
import safeParseNumberUtil from '@/utils/safe-parse-number.util';
import { useMemo } from 'react';
import useQueryParams, { IParams } from '@/hooks/params';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '@/constants/pagination.const';

export default function usePagination(count: number) {
  const { setParams } = useQueryParams();
  const searchParams = useSearchParams();
  const page = useMemo(
    () => safeParseNumberUtil(searchParams.get('p'), DEFAULT_PAGE),
    [searchParams],
  );
  const limit = useMemo(
    () => safeParseNumberUtil(searchParams.get('l'), DEFAULT_LIMIT),
    [searchParams],
  );
  const setPage = (newPage: number, newLimit: number) => {
    const params: IParams[] = [
      {
        key: 'p',
        value: newPage.toString(),
      },
      {
        key: 'l',
        value: newLimit.toString(),
      },
    ];
    setParams(params);
  };
  const nextPage = () => {
    if (count < page * limit) return;
    setPage(page + 1, limit);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1, limit);
  };
  return { page, limit, nextPage, prevPage };
}
