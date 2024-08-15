import { getUrlByShortCode } from '@/features/links/api/actions';
import { redirect } from 'next/navigation';

type Props = { params: { slug: string } };

export default async function QueryPage({ params }: Props) {
  const slug = params.slug;
  const response = await getUrlByShortCode(slug);
  redirect(response.url);
}
