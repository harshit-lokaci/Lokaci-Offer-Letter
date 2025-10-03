'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import {
    FaRegFileAlt,
    FaBolt,
    FaShieldAlt,
    FaUserCheck,
    FaChartLine,
    FaCloudUploadAlt,
} from "react-icons/fa"
import Button from "../other/Button"

const ValuesSection = () => {
    const values = [
        {
            icon: FaRegFileAlt,
            title: "Smart Templates",
            description:
                "Choose from professionally designed templates that ensure consistency and clarity in every communication. Templates are fully customizable to suit your organization’s tone and policies.",
        },
        {
            icon: FaBolt,
            title: "Automate Workflows",
            description:
                "Speed up hiring processes with automated workflows that streamline approvals, notifications, and revisions—keeping every stakeholder informed and aligned.",
        },
        {
            icon: FaShieldAlt,
            title: "Compliance & Accuracy",
            description:
                "Reduce legal risks with built-in compliance checks and standardized content that adheres to company policies and local labor laws, ensuring offers are accurate and enforceable.",
        },
        {
            icon: FaUserCheck,
            title: "Enhanced Candidate Experience",
            description:
                "Deliver seamless, personalized offer letters that create a sense of trust and excitement, helping candidates feel valued from the moment they receive their offer.",
        },
        {
            icon: FaChartLine,
            title: "Data-Driven Insights",
            description:
                "Gain actionable insights through metrics like offer acceptance rates, processing times, and more, enabling you to refine and optimize your hiring strategy.",
        },
        {
            icon: FaCloudUploadAlt,
            title: "Secure Cloud Access",
            description:
                "Access templates and manage workflows anytime, anywhere with secure cloud infrastructure, ensuring your HR team stays productive and efficient.",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <section className="relative flex justify-center flex-col items-center isolate overflow-hidden bg-white px-6 sm:px-12 lg:px-20 py-16 sm:py-24 lg:py-32">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6 text-black max-w-5xl"
            >
                Lokaci Offer Letter{" "}
                <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
                    Generator is a Game-Changer
                </span>
            </motion.h2>

            <p className="max-w-3xl mx-auto text-center text-base sm:text-lg text-indigo-700 mb-12 sm:mb-16">
                {"Designed to empower HR teams and hiring managers, Lokaci’s Offer Letter Generator combines automation, accuracy, and personalization. It’s not just a tool – it’s a trusted partner that ensures every offer letter you send is professional, compliant, and tailored to each candidate’s journey."}
            </p>

            {/* Values Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-12"
            >
                {values.map((value, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-blue-900 flex flex-col items-center text-center hover:border-2 hover:border-blue-400"
                    >
                        <value.icon className="text-5xl sm:text-6xl lg:text-7xl text-blue-800 mb-4 sm:mb-6" />
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
                            {value.title}
                        </h3>
                        <p className="text-sm sm:text-base text-indigo-700">
                            {value.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA */}
            <div className="text-center mt-14 sm:mt-20">
                <p className="text-indigo-700 mb-4 sm:mb-6 text-base sm:text-lg">
                    Ready to transform how you handle offers?
                </p>
                <Button text={"Get Started Now"} link={"/"}/>
            </div>
        </section>
    )
}

export default ValuesSection
