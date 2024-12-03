import { DefaultSession, DefaultJWT } from "next-auth";

export interface CustomSession extends DefaultSession {
  user: {
    id: string;
    email: string;
    accessToken: string;
  };
}

export interface CustomJWT extends DefaultJWT {
  id: string;
  accessToken: string;
  email: string;
}
