import { fetchCustom } from '@/utils/crudService.util';
import { EndpointsEnum } from '@/enums/endpoints.enum';
import { DashboardType } from '@/features/dashboard/types/dashboard.type';

export async function getDashboard() {
  return fetchCustom<DashboardType>(`${EndpointsEnum.URLS}/dashboard`);
}
