"use client"

import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const cvUrl = process.env.NEXT_PUBLIC_CV_URL || "#";

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "dark" || (!theme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="w-full bg-white dark:bg-[#343A40] text-black dark:text-white shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">Alan Wu</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-[#E57B70]">About</a>
          <a href="#experience" className="hover:text-[#E57B70]">Experience</a>
          <a href="#projects" className="hover:text-[#E57B70]">Projects</a>
          <a href="#contact" className="hover:text-[#E57B70]">Contact</a>

          <a
            href={cvUrl}
            target="_blank"
            className="bg-[#E57B70] hover:bg-[#DE6A60] text-white px-4 py-2 rounded-full transition"
          >
            Download CV
          </a>

          <button onClick={toggleDarkMode} className="ml-2">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#343A40] px-4 pb-4 space-y-3 text-sm font-medium">
          {["about", "experience", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#E57B70]"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            href={cvUrl}
            target="_blank"
            className="block mt-2 text-center bg-[#E57B70] hover:bg-[#DE6A60] text-white px-4 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
