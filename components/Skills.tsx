"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      name: "UI/UX Design",
      image: "/images/figma.jpg",
    },
    {
      name: "Front-End Development",
      image: "/images/VsCode.jpg",
    },
    {
      name: "Next.js",
      image: "/images/NextJs.jpg",
    },
    {
      name: "Tailwind CSS",
      image: "/images/Tailwind.jpg",
    },
    {
      name: "Figma",
      image: "/images/Figma.jpg",
    },
    {
      name: "Canva",
      image: "/images/Canva.jpg",
    },
    {
      name: "JavaScript",
      image: "/images/JavaScript.jpg",
    },
    {
      name: "Git & GitHub",
      image: "/images/GitHub.jpg",
    },
  ];

  return (
    <motion.section
      id="skills"
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
          My Skills
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Technologies, tools, and skills that I use and continuously improve.
        </motion.p>

        {/* SKILLS CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="
                flex items-center gap-6
                border border-gray-800
                rounded-3xl
                p-8
                hover:border-white
                transition-all
                duration-300
              "
            >
              {/* LOGO */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.15,
                }}
                className="bg-zinc-900 rounded-2xl p-3"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="object-contain rounded-xl"
                />
              </motion.div>

              {/* SKILL NAME */}
              <h2 className="text-2xl font-semibold">
                {skill.name}
              </h2>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}