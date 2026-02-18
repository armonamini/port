import { ScrollProvider } from '@/contexts/ScrollContext';
import Header from '@/components/Header';
import FloatingNav from '@/components/FloatingNav';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <ScrollProvider>
      <Header />
      <FloatingNav />
      <main className="scroll-smooth">
        <Hero />
        
        {/* Soft fade transition from Hero to Projects */}
        <div
          className="relative h-32 -mt-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(247, 245, 242, 1), rgba(236, 231, 225, 1))',
          }}
        />
        
        <Projects />
        
        {/* Soft fade transition from Projects to Experience */}
        <div
          className="relative h-32 -mt-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(236, 231, 225, 1), rgba(242, 239, 234, 1))',
          }}
        />
        
        <Experience />
        
        {/* Soft fade transition from Experience to Footer */}
        <div
          className="relative h-32 -mt-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(242, 239, 234, 1), rgba(227, 222, 214, 1))',
          }}
        />
        
        <Footer />
      </main>
    </ScrollProvider>
  );
}
