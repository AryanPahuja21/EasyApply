"use client";

import { signIn } from "next-auth/react";

const LandingPage = () => {
  return (
    <div>
      <h1 className="mt-5 text-center text-4xl font-bold">EasyApply</h1>
      <p className="mt-5 text-center text-xl">
        EasyApply is an automatic job application tool.
      </p>
      <div className="mt-7 flex justify-center">
        <button
          onClick={() => signIn()}
          className="px-4 py-3 bg-green-700 font-semibold rounded-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
