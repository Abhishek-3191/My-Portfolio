import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center text-xl font-bold text-blue-600">
            Abhishek Srivastava
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-blue-600">About Us</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a 
              href="https://drive.google.com/file/d/1vdfGDyk6JKWRengc3O73uYJUf0paGftT/view"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              View Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#about" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-100">Projects</a>
          <a href="#experience" className="block px-4 py-2 hover:bg-gray-100">Experience</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
         
            <div className="text-white">
              <a
           href="https://drive.google.com/file/d/1nTTg2b67KETQiGGAcC_mMY0mOhaX7ZJQ/view?usp=drivesdk" download target="_blank" rel="noopener noreferrer"
            className="block px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700"
          >
            View Resume
          </a>
            
            </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
