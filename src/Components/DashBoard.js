import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/LogoImage/LogoIm.jpg';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'; // Import icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <div className="relative">
            <img
              src={Logo}
              alt="AI Radiology"
              className="h-12 w-12 rounded-full border-4 border-white shadow-lg"
            />
            {/* Optional: Add a subtle glow effect to enhance visibility */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-50" />
          </div>
          <span className="text-2xl font-semibold ml-3">AI Radiology</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition duration-300">About</Link>
          <Link to="/services" className="hover:text-gray-400 transition duration-300">Services</Link>
          <Link to="/research" className="hover:text-gray-400 transition duration-300">Research</Link>
          <Link to="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
          <Link to="/profile" className="text-white">
            <FaUserCircle className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg z-50">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white">
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-10">
            <Link to="/" className="hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="hover:text-gray-400 transition duration-300" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Services</Link>
            <Link to="/research" className="hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Research</Link>
            <Link to="/contact" className="hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
