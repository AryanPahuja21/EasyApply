"use client";

import { signIn } from "next-auth/react";

const LandingPage = () => {
  return (
    <div>
      <h1 className="mt-5 text-center text-4xl font-bold">EasyApply</h1>
      <button
        onClick={() => signIn()}
        className="px-4 py-3 bg-red-300 font-semibold rounded-lg"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
