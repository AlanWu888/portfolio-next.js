import { useEffect, useState } from 'react';

export function useScrollSpy(selectors: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      let currentId: string | null = null;

      for (const id of selectors) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > threshold) {
            currentId = id;
            break;
          }
        }
      }

      // exception: if near bottom of page, force 'contact' as active
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      const bottomThreshold = 10; // px from bottom
      const isAtBottom = scrollY + clientHeight >= scrollHeight - bottomThreshold;

      if (isAtBottom && selectors.includes('contact')) {
        currentId = 'contact';
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectors]);

  return activeId;
}
