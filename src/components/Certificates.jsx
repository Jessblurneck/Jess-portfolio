/* eslint-disable no-unused-vars */
import { useState } from "react";
import { CERTIFICATES } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Alternate slide-in direction and slow edge motion
  const getVariant = (index) => {
    return {
      hidden: {
        opacity: 0,
        x: index % 2 === 0 ? 200 : -200, // Farther from edges
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.1, // Slightly slower
          ease: "easeInOut",
          delay: index * 0.18,
        },
      },
    };
  };

  return (
    <motion.div
      className="pb-10 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.h2
        className="my-12 text-center text-3xl sm:text-4xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Certificates
      </motion.h2>

      {/* Certificates List */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-transparent p-5 rounded-lg border border-gray-600 text-white"
            variants={getVariant(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={cert.image}
              alt={`Certificate ${index + 1}`}
              className="w-full md:w-[250px] h-auto object-cover rounded-xl cursor-pointer shadow-sm"
              onClick={() => setSelectedImage(cert.image)}
            />
            <div className="text-left w-full">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
               <p className="text-stone-400 mb-3 text-justify leading-relaxed tracking-normal">
        {cert.description}
      </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl border-4 border-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;
