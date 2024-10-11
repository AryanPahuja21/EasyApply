"use client";

import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user?.email && (
        <>
          <p className="mt-5 text-center text-3xl font-bold">
            Welcome {session?.user?.name}
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <button
              onClick={async () =>
                await fetch("http://localhost:3000/api/apply/internshala", {
                  method: "POST",
                })
              }
              className="px-4 py-3 font-semibold text-black bg-amber-500 rounded-md"
            >
              Apply to Internshala
            </button>
            <button
              onClick={() => signOut()}
              className="px-4 py-3 font-semibold text-black bg-red-500 rounded-md"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
