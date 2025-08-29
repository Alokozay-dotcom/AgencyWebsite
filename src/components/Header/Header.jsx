import React, { useState } from "react";
import logo from "./logo.svg";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "UI Components", id: "ui-components" },
    { name: "Features", id: "features" },
    { name: "Our Team", id: "team" },
    { name: "Pricing", id: "pricing" },
    { name: "Blanding", id: "blanding" },
  ];

  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === "dark";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 shadow px-4 md:px-8 lg:px-12 py-4 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-cyan-200 text-gray-900"
      }`}
      
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className={`h-10 transition-filter duration-300 ${
              darkMode ? "brightness-0 invert" : ""
            }`}
          />
        </div>

        {/* Center Nav Links (desktop) */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10 font-semibold text-base whitespace-nowrap">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                className={`relative transition-all duration-300 ease-in-out ${
                  darkMode
                    ? "text-gray-200 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-700"
                } 
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 
                after:transition-all after:duration-300 
                ${
                  darkMode
                    ? "after:bg-blue-400 hover:after:w-full"
                    : "after:bg-blue-700 hover:after:w-full"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle & auth */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
              darkMode ? "bg-yellow-400" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                darkMode ? "translate-x-7 bg-white" : "translate-x-0 bg-yellow-400"
              }`}
            />
            <span className="absolute left-1 text-xs">☀️</span>
            <span className="absolute right-1 text-xs">🌙</span>
          </button>

          {/* Desktop Auth links */}
          <div className="hidden md:flex gap-6 font-semibold text-base">
            <Link
              to="/login"
              className={`transition-colors duration-300 ${
                darkMode ? "text-gray-200 hover:text-yellow-400" : "text-gray-700 hover:text-yellow-500"
              }`}
            >
              Login
            </Link>
            <div className={`border-l h-5 ${darkMode ? "border-gray-600" : "border-gray-300"}`} />
            <Link
              to="/register"
              className={`transition-colors duration-300 ${
                darkMode ? "text-gray-200 hover:text-yellow-400" : "text-gray-700 hover:text-yellow-500"
              }`}
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul
          className={`md:hidden mt-4 flex flex-col gap-4 font-semibold text-base transition-colors duration-300 ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                className={`block px-3 py-2 rounded-md transition-all duration-300 ${
                  darkMode ? "hover:bg-gray-800 hover:text-blue-400" : "hover:bg-gray-200 hover:text-blue-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* Mobile Auth */}
          <li>
            <Link
              to="/login"
              className={`block px-3 py-2 rounded-md transition-all duration-300 ${
                darkMode ? "hover:bg-gray-800 hover:text-yellow-400" : "hover:bg-gray-200 hover:text-yellow-500"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className={`block px-3 py-2 rounded-md transition-all duration-300 ${
                darkMode ? "hover:bg-gray-800 hover:text-yellow-400" : "hover:bg-gray-200 hover:text-yellow-500"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Register
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
