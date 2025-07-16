/* eslint-disable no-unused-vars */
import { RiReactjsLine } from "react-icons/ri";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiPhp,
  SiTailwindcss,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";

const techIcons = [
  {
    icon: <SiHtml5 className="text-orange-500" />,
    name: "HTML5",
    description: "The backbone of every web page I create structuring content the way I want it to appear.",
  },
  {
    icon: <SiCss3 className="text-blue-500" />,
    name: "CSS3",
    description: "Where I add style, personality, and layout to bring life to my web designs.",
  },
  {
    icon: <SiJavascript className="text-yellow-400" />,
    name: "JavaScript",
    description: "My go-to for adding interaction and making websites dynamic and engaging.",
  },
  {
    icon: <RiReactjsLine className="text-cyan-400" />,
    name: "React.js",
    description: "My favorite library for building modern, component-based UIs efficiently.",
  },
  {
    icon: <SiPython className="text-yellow-500" />,
    name: "Python",
    description: "A language I turn to for logic-heavy tasks and clean, readable code.",
  },
  {
    icon: <SiGithub className="text-white" />,
    name: "GitHub",
    description: "Where I host and collaborate on code, track issues, and manage project versions.",
  },
  {
    icon: <SiPhp className="text-indigo-700" />,
    name: "PHP",
    description: "Where I began my server-side journey handling forms, sessions, and backend logic.",
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
    name: "Tailwind CSS",
    description: "My go-to utility-first framework for crafting clean and responsive UIs quickly.",
  },
  {
    icon: <SiMysql className="text-blue-700" />,
    name: "MySQL",
    description: "A reliable companion for storing structured data and managing relationships.",
  },
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -80 : 80,
    rotate: i % 2 === 0 ? -4 : 4,
    scale: 0.9,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  }),
};

const Technologies = () => {
  return (
    <motion.div
      className="py-20 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Technologies & Tools
      </motion.h2>

      {/* Tech Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl border border-stone-700 shadow-md bg-stone-900/70 backdrop-blur-sm
            hover:shadow-blue-400/50 hover:scale-[1.04] transition-all duration-300"
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="text-5xl mb-4 transition-transform duration-300 hover:scale-110"
              style={{
                textShadow:
                  "0 0 6px currentColor, 0 0 12px currentColor, 0 0 20px currentColor",
              }}
            >
              {tech.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
            <p className="text-sm text-stone-300">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
