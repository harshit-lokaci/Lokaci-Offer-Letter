'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"



const Button = ({text, link}) => {
    return(
        <>
            <Link href={link}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white px-8 py-4 rounded-sm text-lg font-semibold shadow-2xl shadow-blue-500/25"
                >
                    {text} <FaArrowRight />
                </motion.div>
            </Link>
        </>
    )
}

export default Button;
