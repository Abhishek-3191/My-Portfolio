import React, { useState } from "react";
import { motion } from "framer-motion";
import { myProjects } from "../constants/index";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>

        {/* Grid for project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProjects.map((p) => (
            <motion.div
              key={p.id}
              className="bg-white rounded-lg shadow overflow-hidden cursor-pointer flex flex-col"
              onClick={() => setActive(p)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Thumbnail */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-44 object-cover"
              />

              {/* Card content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-1 flex-grow">
                  {p.description.substring(0, 80)}...
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-indigo-600 text-sm font-medium"
                  onClick={(e) => e.stopPropagation()} // prevent modal when clicking link
                >
                  Live Demo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal popup */}
      {active && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl">{active.title}</h3>
              <button
                onClick={() => setActive(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-4">{active.description}</p>

            {/* Sub descriptions */}
            {active.subDescription && (
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
                {active.subDescription.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {/* Tags */}
            {active.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-sm"
                  >
                    <img src={t.path} alt={t.name} className="w-5 h-5" />
                    {t.name}
                  </div>
                ))}
              </div>
            )}

            {/* Link */}
            {active.href && (
              <a
                href={active.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <div className="text-white">
                Visit Project
                </div>
              </a>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
