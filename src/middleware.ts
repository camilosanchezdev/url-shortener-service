import { NextRequest, NextResponse } from 'next/server';
import { RoutesEnum } from '@/enums/routes.enum';
import { getServerToken } from '@/actions/session.action';

const privateRoutes = [RoutesEnum.DASHBOARD, RoutesEnum.LINKS];
export async function middleware(request: NextRequest) {
  const token = await getServerToken();
  if (!token && privateRoutes.includes(request.nextUrl.pathname as RoutesEnum))
    return NextResponse.redirect(new URL(RoutesEnum.HOME, request.url));

  if (token && request.nextUrl.pathname === RoutesEnum.HOME)
    return NextResponse.redirect(new URL(RoutesEnum.DASHBOARD, request.url));

  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
