import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@/enums/query-keys.enum';
import { getUrl, getUrls } from '@/features/links/api/actions';

export default function useUrls() {
  const getUrlsList = (page: number, limit: number) => {
    return useQuery({
      queryFn: async () => getUrls(page, limit),
      queryKey: [QueryKeys.URLS, page, limit],
      staleTime: 1000, // 1 second
    });
  };
  const getUrlById = (id: number) => {
    return useQuery({
      queryFn: async () => getUrl(id),
      queryKey: [QueryKeys.URLS, id],
      staleTime: 1000, // 1 second
      enabled: id > 0,
    });
  };
  return { getUrlsList, getUrlById };
}
