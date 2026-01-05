import React from 'react';
import { mySocials } from '../constants/index';

export default function Footer() {
  return (
    <footer className="bg-white w-full max-w-6xl mx-auto px-4">
      {/* Full-width separator line */}
      <div className="w-full border-t border-gray-200" />

      {/* Footer content in one line */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Terms & Privacy */}
        <div className="text-sm text-gray-500 text-center md:text-left">
          Terms & Conditions | Privacy Policy
        </div>

        {/* Social icons */}
       <div className="flex gap-12">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Abhishek Srivastava.  All rights reserved.
        </div>
      </div>
    </footer>
  );
}
