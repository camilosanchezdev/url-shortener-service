import { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface UserData {
    token: string;
  }
  interface User extends DefaultUser {}
  interface Session {
    user?: User;
    data: UserData;
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
