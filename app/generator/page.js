'use client';

import { useContext, useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import LetterPreview from './components/LetterPreview';
import SidebarForm from './components/SidebarForm';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import LoadingOverlay from '../components/other/LoadingOverlay';

export default function OfferLetterGenerator() {
  const { previewRef, isLoading } = useContext(AppContext);

  return (
    <>
      <Header />
      <motion.div
        className="min-h-screen bg-gray-50 text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-0 md:px-4 py-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
              <FaFileAlt className="text-blue-800" />
              Offer Letter Platform
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Internal platform for generating offer letters
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-6 lg:gap-8 justify-center items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Sidebar takes 1/3 */}
            <div className="order-1 lg:col-span-1 max-w-3xl">
              <SidebarForm />
            </div>

            {/* Preview takes 2/3 */}
            <div className="order-2 lg:col-span-2 w-full bg-white rounded-lg">
              <LetterPreview previewRef={previewRef} />
            </div>
          </motion.div>

        </div>
      </motion.div>
      <Footer />
      <LoadingOverlay isLoading={isLoading}/>
    </>
  );
}
