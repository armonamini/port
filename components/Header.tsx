'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScroll } from '@/contexts/ScrollContext';

export default function Header() {
  const { isScrolledPast, isMobile } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = (
    <>
      <li>
        <Link
          href="#home"
          onClick={(e) => handleScroll(e, 'home')}
          className="text-text-primary hover:text-accent transition-colors"
        >
          Home/About
        </Link>
      </li>
      <li>
        <Link
          href="#projects"
          onClick={(e) => handleScroll(e, 'projects')}
          className="text-text-primary hover:text-accent transition-colors"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href="#experience"
          onClick={(e) => handleScroll(e, 'experience')}
          className="text-text-primary hover:text-accent transition-colors"
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          href="/resume"
          className="text-text-primary hover:text-accent transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </Link>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm border-b border-accent/10">
      <nav className="container mx-auto px-6 py-4">
        {/* Desktop: full nav at top, name only when scrolled */}
        <div className="hidden md:block">
          {!isScrolledPast ? (
            <ul className="flex items-center justify-between font-sans text-sm">
              {navLinks}
            </ul>
          ) : (
            <div className="flex justify-between items-center">
              <Link
                href="#home"
                onClick={(e) => handleScroll(e, 'home')}
                className="font-serif text-xl font-semibold text-text-primary hover:text-accent transition-colors"
              >
                Armon Amini
              </Link>
            </div>
          )}
        </div>

        {/* Mobile: hamburger + dropdown */}
        <div className="md:hidden flex items-center justify-between">
          <Link
            href="#home"
            onClick={(e) => handleScroll(e, 'home')}
            className="font-serif text-xl font-semibold text-text-primary"
          >
            Armon Amini
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 text-text-primary hover:text-accent transition-colors"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobile && menuOpen && (
          <div
            className="md:hidden border-t border-accent/10 mt-2 pt-4 pb-2"
            style={{ animation: 'slideDown 0.2s ease-out' }}
          >
            <ul className="flex flex-col gap-4 font-sans text-sm">
              {navLinks}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
