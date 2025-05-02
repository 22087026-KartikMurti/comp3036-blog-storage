// TODO
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("session_id")?.value;
    if (sessionId === "abc789xyz") {
        cookieStore.delete("session_id");
        return NextResponse.json(
            { message: "Logged out" },
            { status: 200 }
        );
    }
    return NextResponse.json(
        { message: "Session not found" },
        { status: 401 }
    );
}
