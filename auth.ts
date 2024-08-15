import NextAuth from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import CredentialsProvider from 'next-auth/providers/credentials';
import { baseConfig } from '@/config/base.config';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authOptions,
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
});
