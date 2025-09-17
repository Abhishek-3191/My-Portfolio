import React from "react";
import profilePic from "../../public/assets/photo.jpg"; // replace with your image

const About = () => {
  return (
    <section id="about" className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
        <img
         src={profilePic}
         alt="Abhishek"
         className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-top shadow-lg"
        />
        </div>


        {/* Intro Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hi, I'm Abhishek Srivastava
          </h1>
          <p className="mt-2 text-lg text-gray-600">
          Software Engineer • Full-stack developer • Problem solver
          </p>

          {/* One-liner with animation */}
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md animate-pulse">
            I turn complex problems into elegant solutions — fast, reliable, and production-ready.
          </div>

          {/* Professional Summary */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-900">Professional Summary</h2>
            <p className="mt-2 text-gray-700">
              {/* I build reliable, high-performance backend systems and polished front-end experiences.
              Experienced with Node.js, React, and scalable architectures. */}
             Full-Stack Developer and LeetCode Knight (1900+ rating, top 5% globally) with strong problem-solving and 
             system design skills. Experienced in architecting and deploying scalable web applications 
             using React, Node.js, and MongoDB, while ensuring optimized performance and clean code 
             through TDD and agile practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
