'use client';

import Link from 'next/link';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24 bg-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary leading-tight">
            Armon Amini
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-primary leading-relaxed">
            Cybersecurity-focused Software Engineer designing and building real-world network and infrastructure systems.
          </h2>
          <p className="font-sans text-lg md:text-xl text-text-primary/90 leading-relaxed max-w-3xl">
            I'm driven by understanding how systems behave in the real world — building environments that simulate, test, and strengthen modern network infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleScroll}
              className="font-sans text-base px-8 py-3 border border-accent/30 text-accent hover:bg-accent/5 transition-colors"
            >
              View Projects
            </button>
            <Link
              href="/resume"
              className="font-sans text-base px-8 py-3 border border-accent/30 text-accent hover:bg-accent/5 transition-colors text-center"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
