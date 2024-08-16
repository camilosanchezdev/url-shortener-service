import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/enums/query-keys.enum';
import { getInformation } from '@/features/settings/api/actions';

export default function useGetInformation() {
  return useQuery({
    queryFn: async () => getInformation(),
    queryKey: [QueryKeys.INFORMATION],
    staleTime: 1000, // 1 second
  });
}
