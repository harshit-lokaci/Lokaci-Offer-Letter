import { cookies } from "next/headers";

export async function POST(req) {
    // Clear the cookie
    cookies().set({
        name: "authToken",
        value: "",
        httpOnly: true,
        maxAge: 0, // expires immediately
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
    });

    return new Response(JSON.stringify({ success: true, message: "Logged out successfully" }), { status: 200 });
}
