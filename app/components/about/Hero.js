'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { toast } from "react-toastify"

motion

motion

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      };
    return(
        <>
            <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/aboutHero.jpg" 
                        alt="Background"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                {/* Decorative Background Elements */}
                <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                    <div
                        style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
                        className="aspect-[1097/845] w-[274.25px] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    ></div>
                </div>

                <div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
                    <div
                        style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
                        className="aspect-[1097/845] w-[274.25px] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    ></div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    {/* Heading and Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl lg:mx-0 text-center"
                    >
                        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                            Lokaci Offer Letter Generator
                        </h2>
                        <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
                            Easily create, customize, and manage offer letters for employees with Lokaci internal platform designed for efficiency and compliance.
                        </p>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10 justify-center"
                        >
                            <Link href="/generator" className="hover:underline">Generate Offer Letter <span aria-hidden="true">&rarr;</span></Link>
                            <button onClick={()=> toast.info("Sorry, Not Available!")} className="hover:underline">Templates <span aria-hidden="true">&rarr;</span></button>
                            <button onClick={()=> toast.info("Sorry, Not Available!")} className="hover:underline">Automation Rules <span aria-hidden="true">&rarr;</span></button>
                            <button onClick={()=> toast.info("Sorry, Not Available!")} className="hover:underline">Compliance Guide <span aria-hidden="true">&rarr;</span></button>
                        </motion.div>

                        {/* Stats */}
                        <motion.dl
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {[
                                { label: "Templates available", value: "15+" },
                                { label: "Users onboarded", value: "200+" },
                                { label: "Compliance checks", value: "Up to date" },
                                { label: "Average time saved", value: "4 hrs/week" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex flex-col-reverse gap-1 text-center"
                                >
                                    <dt className="text-base/7 text-gray-300">{stat.label}</dt>
                                    <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                                </motion.div>
                            ))}
                        </motion.dl>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;