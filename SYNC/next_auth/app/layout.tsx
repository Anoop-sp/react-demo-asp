// app/layout.tsx

import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Automatically redirect if the user is not authenticated
  if (status === "loading") {
    return <div>Loading...</div>; // Optionally, display a loading spinner
  }

  if (!session) {
    router.push("/auth/signin"); // Redirect to login if not authenticated
  }

  return (
    <SessionProvider>
      <html lang="en">
        <head />
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}
