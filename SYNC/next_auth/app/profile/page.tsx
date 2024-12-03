// app/profile/page.tsx

import { useAuth } from "../../lib/useAuth";

const ProfilePage = () => {
  const { session, status } = useAuth();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You need to be logged in to view this page.</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>This is your profile page, and it is protected.</p>
    </div>
  );
};

export default ProfilePage;
