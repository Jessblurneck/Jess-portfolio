/* eslint-disable no-unused-vars */
import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Web Dev", "Mobile Dev", "Hardware"];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <motion.div
      className="relative pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="my-20 text-center text-4xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Category Filter */}
      <motion.div
        className="flex justify-center gap-4 mb-12 flex-wrap"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setActiveProject(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
              selectedCategory === category
                ? "bg-white text-black"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Display */}
      <div className="max-w-6xl mx-auto space-y-16">
       {filteredProjects.map((project, index) => (
  <motion.div
    key={index}
    className="flex flex-col lg:flex-row gap-6 items-center"
    initial={{
      opacity: 0,
      x: index % 2 === 0 ? 120 : -120, // 👈 alternate from right or left edge
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 1.2,          // 👈 smoother
      ease: "easeInOut",
      delay: index * 0.15,    // 👈 stagger
    }}
    viewport={{ once: true }}
  >
    {/* Image */}
    <div className="cursor-pointer" onClick={() => setActiveProject(project)}>
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-[320px] h-[220px] object-cover rounded-lg shadow-md hover:scale-105 transition duration-300"
      />
      <p className="text-center mt-2 text-sm text-stone-400 hover:text-white">
        Click to view gallery
      </p>
    </div>

    {/* Text Info */}
    <div className="max-w-xl text-left">
      <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
      <p className="text-stone-400 mb-3 text-justify leading-relaxed tracking-normal">
        {project.description}
      </p>
      {project.technologies && (
        <ul className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, i) => (
            <li
              key={i}
              className={`px-3 py-1 rounded-full text-sm text-white font-medium shadow-md animate-glow ${
                tech === "React"
                  ? "bg-blue-500/80"
                  : tech === "Tailwind"
                  ? "bg-cyan-500/80"
                  : tech === "JavaScript"
                  ? "bg-yellow-400/80 text-black"
                  : tech === "HTML"
                  ? "bg-orange-500/80"
                  : tech === "CSS"
                  ? "bg-blue-300/80 text-black"
                  : tech === "Firebase"
                  ? "bg-amber-500/80"
                  : tech === "Node.js"
                  ? "bg-green-600/80"
                  : tech === "Android Studio"
                  ? "bg-green-500/70"
                  : tech === "Java"
                  ? "bg-red-500/80"
                  : "bg-stone-700"
              }`}
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
))}

      </div>

      {/* Modal for image gallery */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-0 sm:p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="relative bg-stone-900 w-full max-w-6xl h-full sm:h-auto rounded-none sm:rounded-2xl sm:p-6 p-2 shadow-lg overflow-y-auto max-h-screen">
              <button
                className="absolute top-2 right-3 sm:top-4 sm:right-6 text-white text-2xl sm:text-3xl hover:text-red-400"
                onClick={() => setActiveProject(null)}
                aria-label="Close Modal"
              >
                &times;
              </button>

              <h3 className="text-center text-lg sm:text-2xl text-white font-semibold mb-4 sm:mb-6 mt-8 sm:mt-0">
                {activeProject.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-0">
                {activeProject.images.slice(1, 5).map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`Project ${i + 1}`}
                    className="w-full h-auto max-h-[350px] object-contain bg-black rounded-md sm:rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.18, duration: 0.7, ease: "easeInOut" }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;
