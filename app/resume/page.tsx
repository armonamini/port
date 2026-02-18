import Link from 'next/link';

export const metadata = {
  title: 'Resume | Port',
  description: 'Armon Amini — Resume',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-hero">
      <div className="container mx-auto max-w-4xl px-6 py-24">
        <Link
          href="/"
          className="font-sans text-sm text-text-primary/70 hover:text-accent transition-colors inline-block mb-12"
        >
          ← Back to home
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Resume
        </h1>
        <p className="font-sans text-lg text-text-primary/80 mb-12">
          Download a copy or view below.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block font-sans text-base px-8 py-3 border border-accent/30 text-accent hover:bg-accent/5 transition-colors"
        >
          Download Resume
        </a>

        {/* Optional placeholder for embedded PDF later */}
        <div className="mt-16 pt-16 border-t border-accent/10">
          <div className="aspect-[8.5/11] max-w-2xl mx-auto bg-experience border border-accent/10 flex items-center justify-center">
            <p className="font-sans text-sm text-text-primary/50">
              PDF viewer placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
