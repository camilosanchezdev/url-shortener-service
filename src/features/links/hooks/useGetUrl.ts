import { useQuery } from '@tanstack/react-query';
import { getUrl } from '@/features/links/api/actions';
import { QueryKeys } from '@/enums/query-keys.enum';

export default function useGetUrl(id: number) {
  return useQuery({
    queryFn: async () => getUrl(id),
    queryKey: [QueryKeys.URLS, id],
    staleTime: 1000, // 1 second
    enabled: id > 0,
  });
}
