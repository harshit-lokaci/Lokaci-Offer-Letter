import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  await dbConnect();

  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });

    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET not set");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // ✅ Await cookies() before setting the cookie
    const cookieStore = await cookies();
    cookieStore.set({
      name: "authToken",
      value: token,
      httpOnly: true,
      maxAge: 24 * 60 * 60, // 1 day
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/", // cookie available for entire site
    });

    return new Response(
      JSON.stringify({
        success: true,
        user: { id: user._id, email: user.email, role: user.role },
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error", error: err.message }), { status: 500 });
  }
}
