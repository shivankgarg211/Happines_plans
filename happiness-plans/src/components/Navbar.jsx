import React from "react";


const Navbar = () => {
  return (
    <header className="shadow-sm sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/*  Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Happiness Plans Logo"
            className="h-10 w-auto"
          />
        </div>

        {/*  Navigation Links */}
        <ul className="hidden md:flex space-x-8 uppercase text-sm font-medium text-gray-700">
          <a href="#hero" className="hover:text-green-600">
            Home
          </a>
          <a href="#about" className="hover:text-green-600">
            About
          </a>
          <a href="#services" className="hover:text-green-600">
            Services
          </a>
          <a href="#contact" className="hover:text-green-600">
            Contact
          </a>
        </ul>

        {/*  Language Dropdown */}
        <div className="text-sm text-green-600 cursor-pointer hover:underline">
          English ▾
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
