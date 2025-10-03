"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white text-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-white"></div>

            {/* Animated Rings */}
            <div className="absolute w-96 h-96 border-4 border-dashed border-blue-400 rounded-full animate-spin-slow"></div>
            <div className="absolute w-[450px] h-[450px] border-4 border-solid border-blue-500 rounded-full animate-spin-reverse-slow"></div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center p-8 rounded-2xl bg-white/80 backdrop-blur-md shadow-2xl border-2 border-blue-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Icon */}
                <motion.div
                    className="mb-8"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.2 }}
                >
                    <FaExclamationTriangle className="text-7xl text-red-700 mx-auto" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-8xl md:text-9xl font-extrabold mb-4 tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{
                        background: "linear-gradient(45deg, #3730A3, #1E3A8A)", // blue-800 → blue-900
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    404
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-lg md:text-xl text-gray-700 mb-8 max-w-sm mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Oops! The page you are looking for does not exist.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <Link
                        href="/"
                        className="inline-block px-10 py-4 font-bold text-white bg-blue-900 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                        Go Home
                    </Link>
                </motion.div>
            </motion.div>

            {/* Animations */}
            <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 25s linear infinite;
        }
      `}</style>
        </div>
    );
}
