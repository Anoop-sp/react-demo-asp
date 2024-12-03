// lib/useAuth.ts

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Custom hook to check authentication on the client-side
export const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait for the session to load
    if (!session) {
      router.push("/auth/signin"); // Redirect to login if not authenticated
    }
  }, [session, status, router]);

  return { session, status };
};
