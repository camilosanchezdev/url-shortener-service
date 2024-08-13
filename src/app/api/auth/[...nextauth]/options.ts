import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { baseConfig } from '@/config/base.config';
const secret = baseConfig.NEXTAUTH_SECRET;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 1 Day
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const response = await fetch(`${baseConfig.BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        })
          .then((res) => {
            if (!res.ok) {
              return null;
            }
            return res.json();
          })
          .catch(() => {
            return null;
          });

        if (response?.token) {
          return { id: response.token, email: response.email };
        } else {
          return null;
        }
      },
    }),
  ],
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
