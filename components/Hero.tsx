"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      id="profile"
      className="flex items-center justify-center px-10 py-14"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

        {/* FOTO PROFILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/profile.png"
            alt="Balya"
            width={260}
            height={260}
            className="rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* PROFILE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mb-4">
            Balya Agusty Ken Arok
          </h1>

          <p className="text-gray-300 text-lg">
            17 Years Old
          </p>

          <p className="text-gray-300 text-lg">
            SMKN 8 Malang
          </p>

          <p className="text-gray-300 text-lg mb-6">
            Software Engineering Student
          </p>

          <h2 className="text-3xl font-semibold mb-6">
            UI/UX Designer
          </h2>

          <p className="text-gray-400 max-w-xl leading-8 mb-8">
            Passionate about creating modern, responsive,
            and user-friendly digital experiences through
            design and code.
          </p>

          {/* SOCIAL MEDIA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex gap-8 text-4xl"
          >
            <a
              href="https://github.com/Hi-Ken1945"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:rotate-[360deg] hover:scale-110 hover:drop-shadow-lg transition-all duration-700"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/balya-a-k-a-73597b38a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 hover:rotate-[360deg] hover:scale-110 hover:drop-shadow-lg transition-all duration-700"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/balyaahuhh?igsh=bXdpY2YzOWQwYWI0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 hover:rotate-[360deg] hover:scale-110 hover:drop-shadow-lg transition-all duration-700"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}