"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { HiUser, HiMail, HiLockClosed, HiUsers, HiCheck } from "react-icons/hi";
import { ImCross } from "react-icons/im";

// /**
//  * @param {Object} props
//  * @param {boolean} props.isOpen
//  * @param {() => void} props.onClose
//  */
export default function CreateUserModal({ isOpen, onClose }) {
    const modalRef = useRef();
    const [loading, setLoading] = useState(false);

    // Lock body scroll
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        if (isOpen) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [isOpen]);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && !loading) {
            onClose();
        }
    };

    const handleSubmit = async (data) => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await res.json();

            if (!res.ok) {
                toast.error(result.message || "User creation failed");
                return;
            }

            toast.success(result.message || "User created successfully!");
            onClose();
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4"
                    onClick={handleClickOutside}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        ref={modalRef}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md relative p-6 border border-gray-200 dark:border-gray-700"
                        initial={{ y: "-100vh", opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: "100vh", opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors disabled:cursor-not-allowed"
                            onClick={onClose}
                            disabled={loading}
                            aria-label="Close modal"
                        >
                            <ImCross size={24} />
                        </button>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Create New User</h2>

                        <form
                            className="space-y-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                handleSubmit({
                                    name: formData.get("name"),
                                    email: formData.get("email"),
                                    password: formData.get("password"),
                                    role: formData.get("role"),
                                });
                            }}
                        >
                            {/* Name */}
                            <div className="relative">
                                <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="!w-full !pl-12 !pr-4 !py-3 !border !border-gray-300 !rounded-lg !text-gray-800 !placeholder-gray-400 focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-blue-500 !transition"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="!w-full !pl-12 !pr-4 !py-3 !border !border-gray-300 !rounded-lg !text-gray-800 !placeholder-gray-400 focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-blue-500 !transition"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="!w-full !pl-12 !pr-4 !py-3 !border !border-gray-300 !rounded-lg !text-gray-800 !placeholder-gray-400 focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-blue-500 !transition"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            {/* Role */}
                            <div className="relative">
                                <HiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <select
                                    name="role"
                                    className="!w-full !pl-12 !pr-4 !py-3 !border !border-gray-300 !rounded-lg !text-gray-800 !placeholder-gray-400 focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-blue-500 !transition cursor-pointer"
                                    defaultValue="user"
                                    disabled={loading}
                                >
                                    <option value="user">Standard User</option>
                                    <option value="admin">Administrator</option>
                                    <option value="superadmin">Super Administrator</option>
                                </select>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 rounded-lg text-white font-semibold shadow-md transition ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95"
                                    }`}
                            >
                                {loading ? "Creating..." : "Create User"}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
