'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export type IParams = {
  key: string;
  value: string;
};
export default function useQueryParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);

  const navigate = (route: string) => {
    router.push(route, { scroll: false });
  };
  const setParams = (items: IParams[]) => {
    items.forEach(({ key, value }) => {
      params.set(key, value);
    });
    navigate(`${pathname}?${params.toString()}`);
  };
  const removeParams = (keys: string[]) => {
    keys.forEach((el) => {
      params.delete(el);
    });
    navigate(`${pathname}?${params.toString()}`);
  };
  return { removeParams, setParams };
}
