// lib/withProtectedPage.tsx

import { getSession } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

// HOC to protect pages by checking the session
export const withProtectedPage = (WrappedComponent: React.ComponentType) => {
  const ProtectedPage = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  // getServerSideProps for server-side authentication check
  ProtectedPage.getServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await getSession(context); // Check session on the server-side

    if (!session) {
      // Redirect to login if no session found
      return {
        redirect: {
          destination: "/auth/signin", // Redirect to the sign-in page
          permanent: false,
        },
      };
    }

    return {
      props: { session }, // Pass the session to the page component
    };
  };

  return ProtectedPage;
};
