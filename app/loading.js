'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { RiLoader2Fill } from "react-icons/ri";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      {/* Fancy Spinner */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Outer gradient ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-[6px] border-t-blue-800 border-r-blue-800 border-b-blue-200 border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
        />

        {/* Middle dashed ring */}
        <motion.div
          className="absolute inset-3 rounded-full border-[4px] border-dashed border-blue-800"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          <RiLoader2Fill className="w-16 h-16 text-white bg-blue-900 p-3 rounded-full shadow-lg" />
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.p
        className="mt-8 text-lg font-semibold text-gray-800"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingPage;
