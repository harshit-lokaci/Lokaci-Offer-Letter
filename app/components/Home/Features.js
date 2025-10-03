"use client";

import { FaPalette, FaMobileAlt, FaBolt, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBook className="w-8 h-8 text-blue-800" />,
    title: "Professional Offer Letters",
    desc: "Generate sleek, error-free offer letters instantly with smart company templates.",
  },
  {
    icon: <FaBolt className="w-8 h-8 text-blue-800" />,
    title: "Real-Time Preview",
    desc: "Preview offer letters live and ensure everything looks perfect before sending.",
  },
  {
    icon: <FaPalette className="w-8 h-8 text-blue-800" />,
    title: "Custom Branding",
    desc: "Seamlessly integrate your company’s logo, fonts, and colors into every letter.",
  },
  {
    icon: <FaMobileAlt className="w-8 h-8 text-blue-800" />,
    title: "Cross-Platform Access",
    desc: "Access the generator from desktop, tablet, or mobile — optimized for all devices.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeaturesSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Platform{" "}
              <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Powerful tools designed to make creating, customizing, and managing
            offer letters effortless for modern hiring teams.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:-translate-y-1">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
