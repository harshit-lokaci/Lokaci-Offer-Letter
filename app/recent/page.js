"use client";

import { useContext } from "react";
import {
    FaFilePdf,
    FaCalendarAlt,
    FaUser,
    FaMapMarkerAlt,
    FaDollarSign,
    FaTrash,
    FaRegListAlt,
    FaFolderOpen,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

const RecentLetters = () => {
    const { letters, loading, deleteLetter } = useContext(AppContext);
    const router = useRouter();

    const handleEditRedirect = (letter) => {
        router.push(`/generator?id=${letter._id}`);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 py-16 sm:py-24 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 flex items-center gap-3">
                                <FaRegListAlt className="text-purple-600" />
                                Recent Offer Letters
                            </h1>
                            <p className="text-gray-600 text-base sm:text-lg mt-2">
                                All your recently generated offer letters are saved here for easy access.
                            </p>
                        </div>
                        {/* <motion.button
                            onClick={deleteAllRecentLetters}
                            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-md transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaTrash />
                            Clear All
                        </motion.button> */}
                    </div>

                    {loading ? (
                        <p className="text-center text-gray-500">Loading...</p>
                    ) : letters.length === 0 ? (
                        <motion.div
                            className="text-center text-gray-500 py-20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaFolderOpen className="text-7xl mx-auto mb-6 text-gray-300" />
                            <p className="text-xl font-medium">No recent letters found.</p>
                            <p className="mt-2 text-gray-500">
                                Generate one to see it appear here.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                                    {letters.map((letter) => (
                                        <motion.div
                                            key={letter._id}
                                            className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                                            variants={itemVariants}
                                            whileHover={{ y: -5 }}
                                        >
                                            <Link href={`/recent/${letter._id}`} className="block">
                                                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                                                    <FaUser className="text-blue-500 text-2xl" />
                                                    {letter.candidateName}
                                                </h2>
                                                <div className="text-gray-600 space-y-3 text-sm">
                                                    <div className="flex items-center gap-3">
                                                        <FaCalendarAlt className="text-gray-400" />
                                                        <p className="font-semibold">Joining Date:</p>
                                                        <span className="text-gray-800">{letter.joiningDate || "N/A"}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <FaMapMarkerAlt className="text-gray-400" />
                                                        <p className="font-semibold">Location:</p>
                                                        <span className="text-gray-800">{letter.location || "N/A"}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <FaDollarSign className="text-gray-400" />
                                                        <p className="font-semibold">Salary:</p>
                                                        <span className="text-gray-800">{letter.salary || "N/A"}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <FaFilePdf className="text-gray-400" />
                                                        <p className="font-semibold">Job Title:</p>
                                                        <span className="text-gray-800">{letter.jobTitle || "N/A"}</span>
                                                    </div>
                                                </div>
                                                <div className="border-t border-gray-200 mt-5 pt-3 text-xs text-gray-400">
                                                    Generated on: {new Date(letter.createdAt).toLocaleString()}
                                                </div>
                                            </Link>

                                            {/* Action buttons remain outside so they don’t trigger navigation */}
                                            <div className="flex items-center gap-3 mt-4">
                                                <motion.button
                                                    onClick={() => handleEditRedirect(letter)}
                                                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300"
                                                    whileHover={{ scale: 1.07 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <FaRegListAlt className="text-white text-sm" />
                                                    Edit
                                                </motion.button>

                                                <motion.button
                                                    onClick={() => deleteLetter(letter._id)}
                                                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-md hover:from-red-600 hover:to-red-700 hover:shadow-lg transition-all duration-300"
                                                    whileHover={{ scale: 1.07 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <FaTrash className="text-white text-sm" />
                                                    Delete
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    ))}
                        </motion.div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RecentLetters;
