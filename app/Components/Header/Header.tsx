import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">
            YourLogo
          </a>
        </div>
        <nav className="space-x-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/services" className="hover:text-gray-400">
            Services
          </a>
          <a href="/products" className="hover:text-gray-400">
            Products
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>
        <div className="flex space-x-4">
          <a href="/login" className="hover:text-gray-400">
            Login
          </a>
          <a
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
