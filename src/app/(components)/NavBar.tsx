'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="w-full bg-white dark:bg-[#343A40] text-black dark:text-white shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">Alan Wu</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={`hover:text-[#E57B70] ${
              pathname === '/' ? 'text-[#E57B70] font-semibold' : ''
            }`}
          >
            About
          </Link>
          <a href="#experience" className="hover:text-[#E57B70]">Experience</a>
          <a href="#projects" className="hover:text-[#E57B70]">Projects</a>
          <a href="#contact" className="hover:text-[#E57B70]">Contact</a>
          <Link
            href="/cv"
            className={`hover:text-[#E57B70] ${
              pathname === '/cv' ? 'text-[#E57B70] font-semibold' : ''
            }`}
          >
            Resume
          </Link>

          {mounted && (
            <button onClick={toggleDarkMode} className="ml-2">
              {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-2">
          {mounted && (
            <button onClick={toggleDarkMode}>
              {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#343A40] px-4 pb-4 space-y-3 text-sm font-medium">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`block hover:text-[#E57B70] ${
              pathname === '/' ? 'text-[#E57B70] font-semibold' : ''
            }`}
          >
            About
          </Link>
          {['experience', 'projects', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#E57B70]"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <Link
            href="/cv"
            onClick={() => setMenuOpen(false)}
            className={`block hover:text-[#E57B70] ${
              pathname === '/cv' ? 'text-[#E57B70] font-semibold' : ''
            }`}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
