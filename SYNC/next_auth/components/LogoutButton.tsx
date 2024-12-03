// components/LogoutButton.tsx

import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Sign out without redirecting immediately
    router.push("/auth/signin"); // Redirect to the sign-in page after logging out
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
