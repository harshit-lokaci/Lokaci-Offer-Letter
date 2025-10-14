import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req) {
    await dbConnect();

    try {
        let { name, email, password, role } = await req.json();

        // Trim inputs
        name = name?.trim();
        email = email?.trim().toLowerCase();
        password = password?.trim();

        if (!name || !email || !password || !role) {
            return new Response(JSON.stringify({ success: false, message: "All fields are required" }), { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ success: false, message: "Invalid email format" }), { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new Response(JSON.stringify({ success: false, message: "User already exists" }), { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();

        return new Response(JSON.stringify({ success: true, message: "User registered successfully" }), { status: 201 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ success: false, message: "Server error", error: err.message }), { status: 500 });
    }
}
