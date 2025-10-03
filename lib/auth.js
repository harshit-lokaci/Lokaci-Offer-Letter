// frontend/lib/auth.js
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export function getCurrentUser() {
    const cookieStore = cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) return null;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded; // contains user id
    } catch (err) {
        return null;
    }
}
