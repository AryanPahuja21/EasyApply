"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <h1 className="mt-5 text-center text-4xl font-bold">EasyApply</h1>
      <button
        onClick={() => signIn()}
        className="px-4 py-3 bg-red-300 font-semibold rounded-lg"
      >
        Get Started
      </button>
      {session?.user?.email && (
        <>
          <p>Welcome {session?.user?.name ?? "Anonymous"}</p>
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
}
