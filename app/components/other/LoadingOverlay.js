import { AnimatePresence, motion } from "framer-motion";
import { FiFileText, FiSettings } from "react-icons/fi";
import { useEffect, useState } from "react";

const messages = [
    "Generating your Offer Letter...",
    "Polishing the details...",
    "Finalizing formatting...",
    "Almost there..."
];

const LoadingOverlay = ({ isLoading }) => {
    const [currentMessage, setCurrentMessage] = useState(messages[0]);

    // Rotate messages every 3s
    useEffect(() => {
        if (!isLoading) return;
        const interval = setInterval(() => {
            setCurrentMessage(
                messages[Math.floor(Math.random() * messages.length)]
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        className="relative w-56 p-6 bg-white dark:bg-gray-800 bg-opacity-90 rounded-xl shadow-2xl flex flex-col items-center justify-center space-y-5"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    >
                        {/* Icon with animated aura */}
                        <div className="relative w-28 h-28 flex justify-center items-center">
                            {/* Glowing pulse */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-4 border-blue-500"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            />
                            <FiFileText className="text-blue-600 dark:text-blue-400 text-8xl" />
                            <FiSettings className="absolute bottom-2 right-2 text-blue-400 dark:text-blue-300 text-3xl animate-spin" />
                        </div>

                        {/* Rotating messages */}
                        <motion.p
                            key={currentMessage}
                            className="text-gray-700 dark:text-gray-200 text-center text-lg font-semibold"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            {currentMessage}
                        </motion.p>

                        {/* Animated progress shimmer bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                                className="h-2.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                style={{ width: "50%" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingOverlay;
