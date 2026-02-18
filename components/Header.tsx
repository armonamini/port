'use client';

import Link from 'next/link';

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm border-b border-accent/10">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex items-center justify-between font-sans text-sm">
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
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
