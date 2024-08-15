export type UrlType = {
  id: number;
  title: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  deleted: boolean;
};
