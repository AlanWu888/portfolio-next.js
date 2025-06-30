
'use client';

import { useEffect } from 'react';
import NavBar from './(components)/NavBar';
import HeroPage from "./(components)/HeroPage";
import WorkExperienceSection from "./(components)/WorkExperience";

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    }
  }, []);

  return (
    <>
      <NavBar />
      <HeroPage />
      <WorkExperienceSection />
      {/* other sections */}
    </>
  );
}
