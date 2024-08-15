import { revalidatePath } from 'next/cache';
import { GenericResponse } from '@/types/generic-response.type';
import { baseConfig } from '@/config/base.config';

const baseUrl = baseConfig.BASE_URL;

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method: RequestMethod;
  body?: string;
  headers?: { [key: string]: string };
}

async function fetchData<T>(url: string, options: FetchOptions): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as T;
}

export async function getList<T>(
  endpoint: string,
  page: number,
  limit: number,
  token?: string,
): Promise<T | null> {
  const start = page * limit - limit;
  const url = `${baseUrl}/${endpoint}?start=${start}&length=${limit}`;
  if (!token) return Promise.resolve(null);
  return fetchData<T>(url, { method: 'GET', headers: { Authorization: `Bearer ${token}` } });
}

export async function getById<T>(endpoint: string, id: number): Promise<T | null> {
  if (!id) return null;
  const url = `${baseUrl}/${endpoint}/${id}`;
  return fetchData<T>(url, { method: 'GET' });
}

export async function createOrUpdate<T>(
  endpoint: string,
  id: number | null,
  data: any,
  revalidatePathName?: string,
): Promise<GenericResponse> {
  const url = id ? `${baseUrl}/${endpoint}/${id}` : `${baseUrl}/${endpoint}`;
  const method = id ? 'PUT' : 'POST';
  const body = JSON.stringify(data);
  const options: FetchOptions = {
    method,
    body,
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    await fetchData<T>(url, options);
    if (revalidatePathName) {
      revalidatePath(revalidatePathName);
    }
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}
