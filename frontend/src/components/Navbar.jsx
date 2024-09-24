import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = ({ onScrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (section) => {
    if (location.pathname === "/") {
      // If on the home page, just scroll
      onScrollToSection(section);
    } else {
      // If not on the home page, navigate to home first and then scroll
      navigate("/");
      setTimeout(() => {
        onScrollToSection(section);
      }, 100); // Delay to ensure the page has loaded before scrolling
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="bg-white shadow-lg w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 font-medium">
          <div className="flex items-center">
            {/* Logo */}
            <NavLink to="/" className="flex-shrink-0">
              <img className="h-16 w-auto" src={logo} alt="Logo" />
            </NavLink>
            {/* Links */}
            <div className="hidden md:flex space-x-8 ml-10">
              <NavLink to="/" className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium">
                Home
              </NavLink>
              <button
                onClick={() => handleScrollOrNavigate("about")}
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => handleScrollOrNavigate("services")}
                className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Services
              </button>
              <NavLink to="/contact" className="text-gray-800 hover:text-orange-500 px-3 py-2 rounded-md text-lg font-medium">
                Contact Us
              </NavLink>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="block text-gray-800 hover:bg-gray-100 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium">
              Home
            </NavLink>
            <button
              onClick={() => handleScrollOrNavigate("about")}
              className="block text-gray-800 hover:bg-gray-100 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => handleScrollOrNavigate("services")}
              className="block text-gray-800 hover:bg-gray-100 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </button>
            <NavLink to="/contact" className="block text-gray-800 hover:bg-gray-100 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium">
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
