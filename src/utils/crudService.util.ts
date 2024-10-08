'use server';
import { revalidatePath } from 'next/cache';
import { GenericResponse } from '@/types/generic-response.type';
import { baseConfig } from '@/config/base.config';
import { getServerToken } from '@/actions/session.action';
import { HttpMethodsEnum } from '@/enums/http-methods.enum';

const baseUrl = baseConfig.BASE_API_URL;

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method: RequestMethod;
  body?: string;
  headers?: { [key: string]: string };
}

export async function fetchCustom<T>(endpoint: string): Promise<T> {
  const url = `${baseUrl}/${endpoint}`;
  return fetchData<T>(url, { method: 'GET' });
}

async function fetchData<T>(url: string, options: FetchOptions): Promise<T> {
  const token = await getServerToken();
  const response = await fetch(url, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as T;
}

export async function getList<T>(endpoint: string, page: number, limit: number): Promise<T | null> {
  const start = page * limit - limit;
  const url = `${baseUrl}/${endpoint}?start=${start}&length=${limit}`;
  return fetchData<T>(url, { method: 'GET' });
}

export async function getById<T>(endpoint: string, id: number): Promise<T | null> {
  if (!id) return null;
  const url = `${baseUrl}/${endpoint}/${id}`;
  return fetchData<T>(url, { method: 'GET' });
}

export async function createOrUpdate<T>(
  endpoint: string,
  data: any,
  method: HttpMethodsEnum,
  id?: number,
  revalidatePathName?: string,
): Promise<GenericResponse> {
  const url = id ? `${baseUrl}/${endpoint}/${id}` : `${baseUrl}/${endpoint}`;
  const body = JSON.stringify(data);
  const options: FetchOptions = {
    method,
    body,
    headers: { 'Content-Type': 'application/json' }, // , Authorization: `Bearer ${token}`
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
export async function remove<T>(
  endpoint: string,
  id: number,
  revalidatePathName?: string,
): Promise<GenericResponse> {
  const url = `${baseUrl}/${endpoint}/${id}`;
  const method = 'DELETE';
  const options: FetchOptions = {
    method,
    headers: { 'Content-Type': 'application/json' }, // , Authorization: `Bearer ${token}`
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
