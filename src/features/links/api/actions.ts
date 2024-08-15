'use server';

import { getList } from '@/utils/crudService.util';
import { ListPageResponseType } from '@/types/list-page-response.type';
import { UrlType } from '@/features/links/types/url.type';
import { EndpointsEnum } from '@/enums/endpoints.enum';
import { Session } from 'next-auth';

export async function getUrls(page: number, limit: number, session: Session | null) {
  const token = session?.user?.id;
  return getList<ListPageResponseType<UrlType>>(
    `${EndpointsEnum.URLS}/customer`,
    page,
    limit,
    token,
  );
}
