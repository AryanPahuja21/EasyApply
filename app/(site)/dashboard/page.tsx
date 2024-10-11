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
            onClick={async () =>
              await fetch("http://localhost:3000/api/apply/internshala", {
                method: "POST",
              })
            }
            className="px-2 py-1 bg-amber-500 rounded-md"
          >
            Apply to Internshala
          </button>
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
