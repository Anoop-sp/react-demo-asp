// app/dashboard/page.tsx

import { withProtectedPage } from "../../lib/withProtectedPage";

const DashboardPage = ({ session }) => {
  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>This page is protected and only accessible by authenticated users.</p>
    </div>
  );
};

// Wrap the page component with the HOC to protect it
export default withProtectedPage(DashboardPage);
