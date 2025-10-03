"use client";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaInbox } from "react-icons/fa";
import { toast } from "react-toastify";

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

export default function PendingPage() {
  const { pendingLetters, deletePendingLetter, editPendingLetter } = useContext(AppContext);

  const handleDelete = (id) => {
    deletePendingLetter(id);
    toast.success("Letter deleted successfully!");
  };

  const handleEdit = (id) => {
    editPendingLetter(id);
    toast.info("Navigating to editor...");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900 text-center">
            Pending Offer Letters
          </h1>

          {pendingLetters.length === 0 ? (
            <motion.div
              className="text-center text-gray-500 py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaInbox className="text-8xl mx-auto mb-6 text-gray-300" />
              <p className="text-xl font-medium">No pending letters right now.</p>
              <p className="mt-2 text-gray-500">
                Any incomplete drafts you save will appear here.
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {pendingLetters.map((letter) => (
                <motion.div
                  key={letter.id}
                  className="p-6 sm:p-8 bg-white shadow-xl rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-6 border border-gray-200 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
                  variants={itemVariants}
                >
                  <div className="flex-1 text-sm sm:text-base">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {letter.candidateName}
                    </h2>
                    <p className="text-gray-600 font-medium mb-2">
                      {letter.jobTitle} - <span className="text-gray-500">{letter.location}</span>
                    </p>
                    <div className="text-gray-700 space-y-1">
                      <p>
                        <span className="font-semibold">Start Date:</span> {letter.joiningDate || "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold">Salary:</span> {letter.salary || "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold">Type:</span> {letter.category}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <motion.button
                      onClick={() => handleEdit(letter.id)}
                      className="relative py-2 w-40 text-lg font-semibold bg-blue-600 text-white rounded-lg flex items-center justify-center gap-4 shadow-[5px_5px_0_rgb(30,64,175)] hover:shadow-[2px_2px_0_rgb(30,64,175)] transition-all duration-300 group overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="absolute inset-0 flex items-center justify-center transition-colors duration-300 group-hover:text-transparent">
                        Edit
                      </span>

                      <motion.div
                        className="absolute flex items-center justify-center right-5 w-8 h-8 fill-white transition-all duration-300 group-hover:right-1/2 group-hover:mr-0"
                        animate={{ x: 0 }}
                        whileHover={{ x: -10 }}
                      >
                        <FaEdit />
                      </motion.div>
                    </motion.button>


                    <motion.button
                      onClick={() => handleDelete(letter.id)}
                      className="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-600 shadow-[5px_5px_0_rgb(185,28,28)] hover:shadow-[2px_2px_0_rgb(185,28,28)] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        viewBox="0 0 1.625 1.625"
                        className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                        height="15"
                        width="15"
                      >
                        <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"></path>
                        <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"></path>
                        <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"></path>
                      </svg>

                      <svg
                        width="16"
                        fill="none"
                        viewBox="0 0 39 7"
                        className="origin-right duration-500 group-hover:rotate-90"
                      >
                        <line strokeWidth="4" stroke="white" y2="5" x2="39" y1="5"></line>
                        <line strokeWidth="3" stroke="white" y2="1.5" x2="26.0357" y1="1.5" x1="12"></line>
                      </svg>

                      <svg width="16" fill="none" viewBox="0 0 33 39">
                        <mask fill="white" id="path-1-inside-1_delete">
                          <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                        </mask>
                        <path
                          mask="url(#path-1-inside-1_delete)"
                          fill="white"
                          d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                        ></path>
                        <path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
                        <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
                      </svg>
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
}