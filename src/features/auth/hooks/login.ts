import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const res = await signIn('credentials', {
        email,
        password,
        callbackUrl: '/dashboard',
        redirect: true,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    login,
  };
}
