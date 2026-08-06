"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-10 py-14"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Feel free to contact me for collaboration or opportunities.
        </motion.p>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="border border-gray-800 rounded-2xl p-8 transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-6">
            Let's Connect
          </h2>

          <div className="space-y-6 text-gray-300">

            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-500">
                Email
              </p>

              <p>
                balyaagz@gmail.com
              </p>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
            >
              <p className="text-gray-500">
                Location
              </p>

              <p>
                Malang, Indonesia
              </p>
            </motion.div>

            {/* SOCIAL MEDIA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-500 mb-4">
                Social Media
              </p>

              <div className="flex gap-8 text-4xl">

                {/* GitHub */}
                <a
                  href="https://github.com/Hi-Ken1945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    hover:text-white
                    hover:rotate-[360deg]
                    hover:scale-110
                    hover:drop-shadow-lg
                    transition-all
                    duration-700
                  "
                >
                  <FaGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/balya-a-k-a-73597b38a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    hover:text-blue-500
                    hover:rotate-[360deg]
                    hover:scale-110
                    hover:drop-shadow-lg
                    transition-all
                    duration-700
                  "
                >
                  <FaLinkedin />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/balyaahuhh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    hover:text-pink-500
                    hover:rotate-[360deg]
                    hover:scale-110
                    hover:drop-shadow-lg
                    transition-all
                    duration-700
                  "
                >
                  <FaInstagram />
                </a>

              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}