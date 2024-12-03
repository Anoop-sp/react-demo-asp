// app/auth/signin/page.tsx

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Function to handle the login
  const handleLogin = async () => {
    setLoading(true);
    try {
      // Trigger the authentication flow with PingID via NextAuth.js
      const result = await signIn("pingid", {
        redirect: false, // Do not redirect automatically, we will handle it manually
      });

      if (result?.error) {
        // Handle any error during login
        console.error("Login failed:", result.error);
      } else {
        // Redirect to the dashboard or a protected page after successful login
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login with PingID"}
      </button>
    </div>
  );
};

export default SignInPage;
