import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Adventuro</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/destinations" className="hover:text-blue-500">Destinations</Link>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </div>

        {/* Get Started Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/Login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-gray-700 font-medium px-4 pb-4">
          <Link to="/destinations" className="hover:text-blue-500" onClick={toggleMenu}>Destinations</Link>
          <Link to="/blog" className="hover:text-blue-500" onClick={toggleMenu}>Blog</Link>
          <Link to="/contact" className="hover:text-blue-500" onClick={toggleMenu}>Contact</Link>
          <Link to="/about" className="hover:text-blue-500" onClick={toggleMenu}>About</Link>
          <Link
            to="/Login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-center"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
