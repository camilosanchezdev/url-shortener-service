'use server';

import { getList, createOrUpdate, getById } from '@/utils/crudService.util';
import { ListPageResponseType } from '@/types/list-page-response.type';
import { UrlType } from '@/features/links/types/url.type';
import { EndpointsEnum } from '@/enums/endpoints.enum';

export async function getUrls(page: number, limit: number) {
  return getList<ListPageResponseType<UrlType>>(`${EndpointsEnum.URLS}/customer`, page, limit);
}
export async function getUrl(id: number) {
  return getById<UrlType>(`${EndpointsEnum.URLS}/customer`, id);
}

export async function createOrUpdateUrl(
  data: { title?: string; originalUrl: string },
  itemId?: number,
): Promise<{ success: boolean; errors?: any[] }> {
  return createOrUpdate<{ title?: string; originalUrl: string }>(
    'urls/customer',
    data,
    itemId,
    '/links',
  );
}
