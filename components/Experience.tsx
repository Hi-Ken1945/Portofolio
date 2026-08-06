"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    "UI/UX Design",
    "Front-End Development",
    "Dashboard Development",
    "Team Collaboration",
  ];

  return (
    <motion.section
      id="experience"
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
          Experience
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          My internship and learning experiences.
        </motion.p>

        {/* EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="border border-gray-800 rounded-2xl p-8 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4">
            6-Month Internship at PT Universal Big Data
          </h2>

          <p className="text-gray-400 leading-8 mb-6">
            Your internship story will be written here later.
            You can tell visitors about your role, projects,
            and the skills that you developed during your internship.
          </p>

          <div className="space-y-3">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.4,
                }}
                className="text-gray-300"
              >
                • {item}
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}