// pages/dashboard.tsx
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect or handle unauthenticated users
      console.log("User is not authenticated");
    }
  }, [status]);

  //   console.log(session);

  if (status === "loading") {
    return <div></div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {session ? (
        <div>
          <h2>Welcome, {session.user?.fullname}</h2>
          <p>Email: {session.user?.email}</p>
          <p>Phone Number: {session.user?.phone_number}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Dashboard;
