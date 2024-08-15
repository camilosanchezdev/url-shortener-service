'use server';

import { getList, createOrUpdate, getById, remove, fetchCustom } from '@/utils/crudService.util';
import { ListPageResponseType } from '@/types/list-page-response.type';
import { UrlType } from '@/features/links/types/url.type';
import { EndpointsEnum } from '@/enums/endpoints.enum';
import { UrlRequest } from '@/features/links/hooks/useCreateUpdateUrl';

export async function getUrls(page: number, limit: number) {
  return getList<ListPageResponseType<UrlType>>(`${EndpointsEnum.URLS}/customer`, page, limit);
}
export async function getUrl(id: number) {
  return getById<UrlType>(`${EndpointsEnum.URLS}/customer`, id);
}

export async function createOrUpdateUrl(
  data: UrlRequest,
): Promise<{ success: boolean; errors?: any[] }> {
  const { itemId, ...payload } = data;
  return createOrUpdate<{ title?: string; originalUrl: string }>(
    'urls/customer',
    payload,
    itemId,
    '/links',
  );
}
export async function removeUrl(itemId: number): Promise<{ success: boolean; errors?: any[] }> {
  return remove<{ title?: string; originalUrl: string }>('urls/customer', itemId, '/links');
}
export async function getUrlByShortCode(shortCode: string): Promise<{ url: string }> {
  return fetchCustom<{ url: string }>(`urls/short/${shortCode}`);
}
