import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
        // ✅ Await cookies before using
        const cookieStore = await cookies();
        const token = cookieStore.get("authToken")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized: No token provided" }, { status: 401 });
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET not set");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, user }, { status: 200 });
    } catch (err) {
        console.error("Profile API error:", err);
        let status = 500;
        let message = "Server error";

        if (err.name === "TokenExpiredError") {
            status = 401;
            message = "Token expired, please login again";
        } else if (err.name === "JsonWebTokenError") {
            status = 401;
            message = "Invalid token";
        }

        return NextResponse.json({ success: false, message, error: err.message }, { status });
    }
}
