'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useRouter } from 'next/navigation';

const sectionIds = ['experience', 'projects', 'contact'];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const activeId = useScrollSpy(['about', ...sectionIds]);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (id: string) => {
    setMenuOpen(false);

    if (pathname !== '/') {
      router.push(`/#${id}`);

      // Listen for route change then scroll
      const scrollOnRoute = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        window.removeEventListener('hashchange', scrollOnRoute);
      };

      window.addEventListener('hashchange', scrollOnRoute);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="w-full bg-sidebar text-sidebar-foreground shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">Alan Wu</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button
            onClick={() => handleNavClick('about')}
            className={`nav-link ${activeId === 'about' ? 'nav-link-active' : ''}`}
          >
            About
          </button>

          {sectionIds.map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`nav-link ${activeId === id ? 'nav-link-active' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}

          <Link
            href="/cv"
            className={`nav-link ${pathname === '/cv' ? 'nav-link-active' : ''}`}
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
        <div className="md:hidden bg-sidebar text-sidebar-foreground px-4 pb-4 space-y-3 text-sm font-medium">
          <button
            onClick={() => {
              handleNavClick('about');
              setMenuOpen(false);
            }}
            className={`mobile-nav-link ${activeId === 'about' ? 'mobile-nav-link-active' : ''}`}
          >
            About
          </button>
          {sectionIds.map((id) => (
            <button
              key={id}
              onClick={() => {
                handleNavClick(id);
                setMenuOpen(false);
              }}
              className={`mobile-nav-link ${activeId === id ? 'mobile-nav-link-active' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <Link
            href="/cv"
            onClick={() => setMenuOpen(false)}
            className={`mobile-nav-link ${pathname === '/cv' ? 'mobile-nav-link-active' : ''}`}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
