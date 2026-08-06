"use client";

import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="text-center max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-4"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-7xl font-bold mb-6"
        >
          PORTFOLIO
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-semibold mb-8"
        >
          UI/UX Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 leading-8 text-lg mb-10"
        >
          Creating beautiful, modern, and user-friendly
          digital experiences through design and code.
        </motion.p>

        <motion.a
          href="#profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
            inline-block
            bg-white
            text-black
            px-8
            py-4
            rounded-xl
            font-semibold
          "
        >
          Explore Portfolio
        </motion.a>
      </motion.div>
    </section>
  );
}