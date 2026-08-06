"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "UI/UX Design",
      image: "/images/UiUX.jpg",
      description: "UI/UX dashboard design created using Figma.",
    },
    {
      title: "Inventory Dashboard Website",
      image: "/images/Sarpras.jpg",
      description: "Inventory management website using Next.js and Supabase.",
    },
    {
      title: "Prototyping",
      image: "/images/Proto.jpg",
      description: "Creating prototype using Figma.",
    },
    {
      title: "Personal Portfolio Website",
      image: "/images/Porto.jpg",
      description: "Personal portfolio website built with Next.js and Tailwind CSS.",
    },
  ];

  return (
    <motion.section
      id="projects"
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
          Projects
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Some of the projects that I have worked on.
        </motion.p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
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
              className="border border-gray-800 rounded-2xl p-5 transition-all duration-300"
            >

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.2,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="rounded-xl mb-5 aspect-video object-cover"
                />
              </motion.div>

              <h2 className="text-2xl font-semibold mb-3">
                {project.title}
              </h2>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}