'use client';

import Link from 'next/link';
import { useScroll } from '@/contexts/ScrollContext';
import type { SectionId } from '@/contexts/ScrollContext';

const ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home/About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export default function FloatingNav() {
  const { isScrolledPast, activeSection, isMobile } = useScroll();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isMobile) return null;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 transition-opacity duration-200 ease-out"
      style={{
        opacity: isScrolledPast ? 1 : 0,
        pointerEvents: isScrolledPast ? 'auto' : 'none',
      }}
      aria-label="Section navigation"
    >
      <ul className="flex items-center gap-8 font-sans text-sm bg-hero/95 backdrop-blur-sm border border-accent/10 px-6 py-3">
        {ITEMS.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              onClick={(e) => handleScroll(e, id)}
              className="flex flex-col items-center gap-1.5 text-text-primary hover:text-accent transition-colors"
            >
              <span>{label}</span>
              {activeSection === id && (
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                  aria-hidden
                />
              )}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/resume"
            className="text-text-primary hover:text-accent transition-colors"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
