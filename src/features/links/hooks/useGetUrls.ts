import { useQuery } from '@tanstack/react-query';
import { getUrls } from '@/features/links/api/actions';
import { QueryKeys } from '@/enums/query-keys.enum';

export default function useGetUrls(page: number, limit: number) {
  return useQuery({
    queryFn: async () => getUrls(page, limit),
    queryKey: [QueryKeys.URLS, page, limit],
    staleTime: 1000, // 1 second
  });
}
