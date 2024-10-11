import { connectToDatabase } from "./lib/db";

export default function Home() {
  connectToDatabase();
  return (
    <div>
      <h1 className="mt-5 text-center text-4xl font-bold">EasyApply</h1>
    </div>
  );
}
