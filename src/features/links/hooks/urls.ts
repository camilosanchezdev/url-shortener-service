import { useQuery } from '@tanstack/react-query';
import { getUrls } from '@/features/links/api/actions';
import { QueryKeys } from '@/enums/query-keys.enum';
import { useSession } from 'next-auth/react';

export default function useUrls(page: number, limit: number) {
  const { data: session } = useSession();
  const token = session?.user?.id;

  return useQuery({
    queryFn: async () => getUrls(page, limit, session),
    queryKey: [QueryKeys.URLS, page, limit],
    staleTime: 1000, // 1 second
    enabled: !!token,
  });
}
