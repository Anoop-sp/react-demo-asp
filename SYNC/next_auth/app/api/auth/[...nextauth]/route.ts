import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "pingid",
      name: "PingID",
      type: "oauth",
      wellKnown: process.env.PINGID_WELL_KNOWN_URL, // The OIDC discovery endpoint for PingID
      clientId: process.env.PINGID_CLIENT_ID,
      clientSecret: process.env.PINGID_CLIENT_SECRET,
      authorization: { params: { scope: "openid profile email" } },
      checks: ["pkce", "state"], // Ensure security
    },
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.id = account.id;
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.email = profile.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          accessToken: token.accessToken,
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
