"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center px-10 py-20"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get to know me a little better.
        </motion.p>

        {/* DESCRIPTION */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-lg leading-8 text-gray-300">
            I may not know everything yet, but I'm always willing to learn. As
            a Software Engineering student, I love exploring the world of
            technology, design, and web development. From UI/UX design to
            building responsive websites, I enjoy turning ideas into something
            useful and meaningful. Every project I create is a step toward
            becoming a better designer and developer.
          </p>
        </motion.div>

        {/* INFORMATION CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            {
              title: "Age",
              value: "17 Years Old",
            },
            {
              title: "Education",
              value: "SMKN 8 Malang",
            },
            {
              title: "Internship",
              value: "6 Months Experience",
            },
            {
              title: "Location",
              value: "Pakis, Malang, Indonesia",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="border border-gray-800 rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-400">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}