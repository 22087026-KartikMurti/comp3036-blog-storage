import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const cookieStore = await cookies();

  const sessionId = cookieStore.get("session_id")?.value;

  
    if(sessionId === "abc789xyz") {
      return NextResponse.json(
        { message: "Admin access granted to Tomas" },
        { status: 200 }
      );
    }
    
    if(sessionId === undefined) {
      return NextResponse.json(
        { message: "Unauthorised" },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { message: "Invalid Session" },
      { status: 401 }
    );
  

  // TODO: Check if 'session_id' cookie exists and equals 'abc789xyz'
  // Return 200 with "Admin access granted" if valid, 401 with "Unauthorized" if not
}
