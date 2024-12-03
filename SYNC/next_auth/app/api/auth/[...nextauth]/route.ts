// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import PingID from "next-auth/providers/pingid";  // PingID provider for NextAuth.js

export const authOptions = {
  providers: [
    PingID({
      clientId: process.env.PINGID_CLIENT_ID!,
      clientSecret: process.env.PINGID_CLIENT_SECRET!,
      authorizationUrl: "https://<ping-id-domain>/oauth2/authorize", // PingID authorization URL
      tokenUrl: "https://<ping-id-domain>/oauth2/token", // PingID token URL
      userinfoUrl: "https://<ping-id-domain>/userinfo", // PingID user info URL
    }),
  ],
  session: {
    strategy: "jwt", // Using JWT for session management
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token; // Store the access token in JWT
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken; // Pass the token to the session object
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page (optional)
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
