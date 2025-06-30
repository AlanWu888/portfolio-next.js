import { useEffect, useState } from 'react';

export function useScrollSpy(selectors: string[], offset = 0): string | null {
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
