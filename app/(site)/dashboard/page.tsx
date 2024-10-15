"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

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
            <Link href="/email">
              <button className="px-4 py-3 font-semibold text-black bg-blue-500 rounded-md">
                Cold Email
              </button>
            </Link>

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
