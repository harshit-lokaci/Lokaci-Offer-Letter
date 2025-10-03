"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaUserTie, FaDownload, FaSave } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaFileAlt, FaEye, FaPalette, FaLaptop } from "react-icons/fa";
import Button from "../other/Button";
import Image from "next/image";

const Hero = () => {
  const [flipIndex, setFlipIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [index, setIndex] = useState(0);

  // cards
  const cardData = [
    {
      title: "Smart Save System",
      description: "Automatically save candidate profiles with intelligent validation and backup",
      color: "from-emerald-400 via-teal-500 to-cyan-600",
      icon: <FaSave className="text-4xl text-white mb-4" />,
      src: "/images/offerLetterImage6.png"
    },
    {
      title: "Candidate Management",
      description: "Streamlined input system for candidate information",
      color: "from-violet-400 via-purple-500 to-indigo-600",
      icon: <FaUserTie className="text-4xl text-white mb-4" />,
      src: "/images/offerLetterImage5.png"
    },
    {
      title: "Instant Generation",
      description: "Fast PDF creation with professional templates",
      color: "from-blue-400 via-indigo-500 to-purple-600",
      icon: <FaDownload className="text-4xl text-white mb-4" />,
      src: "/images/offerLetterImage3.png"
    },
    {
      title: "Brand Integration",
      description: "Include your company's branding elements seamlessly",
      color: "from-orange-400 via-red-500 to-pink-600",
      icon: <FaPalette className="text-4xl text-white mb-4" />,
      src: "/images/offerLetterImage4.png"
    },
    {
      title: "Brand Integration",
      description: "Include your company's branding elements seamlessly",
      color: "from-orange-400 via-red-500 to-pink-600",
      icon: <FaPalette className="text-4xl text-white mb-4" />,
      src: "/images/offerLetterImage2.png"
    },
    {
      title: "Brand Integration",
      description: "Include your company's branding elements seamlessly",
      color: "from-orange-400 via-red-500 to-pink-600",
      icon: <FaPalette className="text-4xl text-white mb-4" />,
      src: "/images/offerLetterImage1.png"
    },
  ];

  const features = [
    { icon: <FaFileAlt className="text-purple-600 text-2xl" />, text: "Professional Template" },
    { icon: <FaEye className="text-blue-600 text-2xl" />, text: "Real-time Preview" },
    { icon: <FaPalette className="text-pink-600 text-2xl" />, text: "Custom Branding" },
    { icon: <FaLaptop className="text-green-600 text-2xl" />, text: "Cross-Platform" },
  ];

  // flip card auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) setFlipIndex((prev) => (prev + 1) % cardData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardData.length, isHovered]);

  // fade up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // rotating words
  const words = ["Made Simple", "Faster", "Smarter", "Effortless"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // word change every 2s
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-4 py-2 border border-blue-200/50">
                <span className="text-sm font-medium text-blue-700">Powered By Lokaci</span>
              </div>
            </motion.div>

            {/* Heading with rotating words */}
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight text-center lg:text-left"
            >
              Offer Letters{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]} // animate between words
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Create stunning offer letters in seconds. Powerful functionality meets clean design.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <Button text={"Start Creating Now"} link={"/generator"}/>

              <Link href="https://lokaci.com/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 border-2 border-gray-200 rounded-sm bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg"
                >
                  Visit Main Site
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="relative flex flex-col justify-center lg:justify-end gap-10">
            {/* Rotating Card */}
            <div className="w-full">
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={flipIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden w-full h-92 flex flex-col justify-center items-center text-center"
                  >
                    <Image src={cardData[flipIndex].src} alt="hero image" width={600} height={500}/>

                    {/* <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${cardData[flipIndex].color} shadow-sm`}
                    >
                      {cardData[flipIndex].icon}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {cardData[flipIndex].title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                      {cardData[flipIndex].description}
                    </p> */}

                    <div className="absolute bottom-5 flex gap-2">
                      {cardData.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setFlipIndex(i)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === flipIndex
                              ? "bg-gray-900 scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* <Image src='/images/offerLetterImage.png' alt="hero image" width={600} height={400}/> */}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {f.icon}
                  <span className="font-medium text-gray-800">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
