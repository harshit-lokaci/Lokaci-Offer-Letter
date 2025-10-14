// app/api/auth/logout/route.js
import { cookies } from "next/headers";

export async function POST() {
    // ✅ Await cookies() first
    const cookieStore = await cookies();

    // Clear the cookie
    cookieStore.set({
        name: "authToken",
        value: "",
        httpOnly: true,
        maxAge: 0,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
    });

    return new Response(JSON.stringify({ success: true, message: "Logged out successfully" }), { status: 200 });
}
