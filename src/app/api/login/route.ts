import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
  // TODO: Set a secure 'session_id' cookie with value 'abc789xyz'
  // Use httpOnly, secure (in production), sameSite: 'strict', maxAge of 1 hour
  const cookieStore = await cookies();

  return NextResponse.json({ message: "Logged in!" }, { status: 200 });
}
