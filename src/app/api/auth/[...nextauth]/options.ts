import { baseConfig } from '@/config/base.config';
import { NextAuthConfig } from 'next-auth';
const secret = baseConfig.NEXTAUTH_SECRET;

export const authOptions: NextAuthConfig = {
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 1 Day
  },
  providers: [],
  callbacks: {
    session: async ({ session, token }) => {
      if (token?.id && session.user) {
        session.user.id = token.id.toString();
      }
      return { ...session, data: token.userData };
    },
    jwt: async ({ token, user }) => {
      if (user?.id) {
        token.accessToken = user.id;
      }
      return {
        ...user,
        ...token,
      };
    },
  },
  secret,
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
  },
};
