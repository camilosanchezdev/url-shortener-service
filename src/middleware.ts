import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { baseConfig } from '@/config/base.config';
import { RoutesEnum } from '@/enums/routes.enum';

const secret = baseConfig.NEXTAUTH_SECRET;

const privateRoutes = [RoutesEnum.DASHBOARD, RoutesEnum.LINKS];
export async function middleware(request: NextRequest) {
  const decoded = await getToken({ req: request, secret });
  if (!decoded && privateRoutes.includes(request.nextUrl.pathname as RoutesEnum))
    return NextResponse.redirect(new URL(RoutesEnum.HOME, request.url));

  if (decoded && request.nextUrl.pathname === RoutesEnum.HOME)
    return NextResponse.redirect(new URL(RoutesEnum.DASHBOARD, request.url));

  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
