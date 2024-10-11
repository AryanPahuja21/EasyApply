"use client";

import { useSession } from "next-auth/react";
import Dashboard from "./dashboard/page";
import LandingPage from "../components/LandingPage";

export default function Home() {
  const { data: session } = useSession();
  return <div>{session?.user?.email ? <Dashboard /> : <LandingPage />}</div>;
}
