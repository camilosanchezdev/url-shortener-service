'use server';

import { auth } from '../../auth';

export const getServerToken = async () => {
  const session = await auth();
  return session?.user?.id;
};

export const getServerUser = async () => {
  const session = await auth();
  return session?.user;
};
