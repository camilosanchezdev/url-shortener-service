import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/enums/query-keys.enum';
import { getDashboard } from '@/features/dashboard/api/actions';

export default function useGetDashboard() {
  return useQuery({
    queryFn: async () => getDashboard(),
    queryKey: [QueryKeys.DASHBOARD],
    staleTime: 1000, // 1 second
  });
}
