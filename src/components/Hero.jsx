import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profilePic from "../assets/jesspic.png";
import { FaDownload } from "react-icons/fa";

const HERO_CONTENT =
  "An aspiring front-end developer and current IT student with a strong passion for creating clean, responsive, and user-centered web applications. Also equipped with foundational knowledge in back-end development, enabling a full understanding of how front-end and server-side technologies work together. Dedicated to transforming concepts into seamless digital experiences through thoughtful design and code. Continuously learning modern tools and frameworks to stay current with industry standards. Committed to becoming a professional developer who delivers impactful and efficient web solutions.";

const roles = [
  "Aspiring Front-End Developer",
  "Back-End Developer",
  "Web Designer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-36 pb-4 lg:pt-48 lg:pb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="jess"
              className="border border-stone-900 rounded-3xl scale-75 shadow-lg hover:flip-glow"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center lg:items-start mt-10 text-center lg:text-left">
            {/* Animated Name */}
            <motion.h2
              className="pb-2 text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-stone-200 via-blue-400 to-purple-500 bg-[length:250%_250%] bg-clip-text text-transparent animate-gradient-soft"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
            >
              Jess Boncayao
            </motion.h2>

            {/* Fading Neon Role */}
            <span
              className={`text-2xl lg:text-3xl font-semibold text-white transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              style={{
                textShadow:
                  "0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.6)",
              }}
            >
              {roles[roleIndex]}
            </span>

            {/* Description */}
            <motion.p
              className="my-2 max-w-lg py-6 text-lg lg:text-xl leading-relaxed tracking-normal text-justify text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Download CV Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="relative inline-flex items-center gap-2 justify-center px-6 py-3 mb-10 overflow-hidden text-sm font-semibold text-white border border-indigo-500 rounded-full shadow-md group hover:text-white transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></span>
              <FaDownload className="relative z-10 text-sm" />
              <span className="relative z-10">Download CV</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
