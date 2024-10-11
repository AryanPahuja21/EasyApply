"use client";

import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="mt-5 text-center text-4xl font-bold">Dashboard</h1>
      {session?.user?.email && (
        <>
          <p>Welcome {session?.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="px-2 py-1 bg-red-500 rounded-md"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
