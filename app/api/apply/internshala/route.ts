import { applyToInternshala } from "@/app/actions/internshala";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await applyToInternshala();
    return NextResponse.json(
      { message: "Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
