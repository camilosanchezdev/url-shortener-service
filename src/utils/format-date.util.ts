import dayjs from 'dayjs';

export default function formatDate(date: string, format: string): string {
  return dayjs(date).format(format);
}
