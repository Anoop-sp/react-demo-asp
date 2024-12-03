import NextAuth, { NextAuthOptions } from "next-auth";
import { CustomSession, CustomJWT } from "@/types/next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "pingid",
      name: "PingID",
      type: "oauth",
      wellKnown: process.env.PINGID_WELL_KNOWN_URL, // OIDC discovery URL
      clientId: process.env.PINGID_CLIENT_ID,
      clientSecret: process.env.PINGID_CLIENT_SECRET,
      authorization: { params: { scope: "openid profile email" } },
      checks: ["pkce", "state"],
      profile(profile: Record<string, any>) {
        return {
          id: profile.sub || "",
          name: profile.name || profile.preferred_username || "",
          email: profile.email || "",
          image: profile.picture || null,
        };
      },
    },
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }): Promise<CustomJWT> {
      if (account) {
        token.id = account.id;
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.email = profile.email;
      }
      return token as CustomJWT;
    },
    async session({ session, token }): Promise<CustomSession> {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        accessToken: token.accessToken as string,
      };
      return session as CustomSession;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
