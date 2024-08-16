import { UrlType } from '@/features/links/types/url.type';

export type DashboardType = {
  count: number;
  clicks: number;
  urls: UrlType[];
};
