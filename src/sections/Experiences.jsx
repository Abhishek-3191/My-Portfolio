import React from "react";
import { experiences } from "../constants/index";
import { Briefcase } from "lucide-react"; // icon (optional)

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  {exp.title} <span className="text-sm text-gray-500">({exp.job})</span>
                </h3>
                <p className="text-indigo-600 font-medium">{exp.company}</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 sm:mt-0">{exp.date}</p>
            </div>

            {/* Bullet points */}
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              {exp.contents.map((point, i) => (
                <li key={i} className="leading-relaxed hover:translate-x-1 transition-transform duration-200">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
