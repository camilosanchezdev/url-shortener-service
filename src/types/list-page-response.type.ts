export type ListPageResponseType<T> = {
  count: number;
  start: number;
  length: number;
  data: Array<T>;
};
