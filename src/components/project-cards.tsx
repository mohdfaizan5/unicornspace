"use client";

import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

// Define the Project type for the array of projects
type Project = {
  name: string;
  image: any;
  alt: string;
  description: string;
};

// Define initial offset and angle variants for the deck effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    y: -40,
    x: -40,
    opacity: 0,
    rotate: -10,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function ProjectCards({ projects }: { projects: Project[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="relative grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative origin-center"
            variants={cardVariants}
            style={{ zIndex: projects.length - index }}
          >
            <Card className=" bg-background  bg-gradient-to-r from-black to-gray-950 text-white border rounded-lg shadow-lg transform transition-transform">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-800">
                      {project.name[0]}
                    </span>
                  </div>
                  <span className="text-2xl font-semibold">{project.name}</span>
                </div>
                <motion.div
                  className="relative h-64 w-full rounded-lg overflow-hidden shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
                <p className="text-base text-gray-300">{project.description}</p>
                <motion.div
                  className="flex items-center gap-2 text-lg text-blue-400 transition-all cursor-pointer"
                  whileHover={{ x: 5, color: "#60A5FA" }}
                >
                  <span>View Project</span>
                  <motion.button
                    className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950"
                    whileHover={{ rotate: 45 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-200"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </motion.button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
