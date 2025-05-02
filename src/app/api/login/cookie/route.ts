import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  // TODO: Set a secure 'session_id' cookie with value 'abc789xyz'
  // Use httpOnly, secure (in production), sameSite: 'strict', maxAge of 1 hour

  if (!process.env.PASSWORD) {
    throw new Error("PASSWORD is not defined in environment variables");
  }

  const body = await req.json();
  const cookieStore = await cookies();

  if (process.env.PASSWORD !== body.password) {
    return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
  }

  cookieStore.set({
    name: "session_id",
    value: "abc789xyz",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60, // 1 hour
  });

  return NextResponse.json({ message: "Admin access granted to Tomas" }, { status: 200 });
}
