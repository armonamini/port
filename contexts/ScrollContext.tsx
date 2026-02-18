'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const SCROLL_THRESHOLD_PX = 150;
const ACTIVE_SECTION_TOP_OFFSET_PX = 200;

export type SectionId = 'home' | 'projects' | 'experience';

interface ScrollContextValue {
  isScrolledPast: boolean;
  activeSection: SectionId;
  isMobile: boolean;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

const SECTION_IDS: SectionId[] = ['home', 'projects', 'experience'];

function getActiveSection(): SectionId {
  if (typeof document === 'undefined') return 'home';
  let active: SectionId = 'home';
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= ACTIVE_SECTION_TOP_OFFSET_PX) {
      active = id;
    }
  }
  return active;
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isMobile, setIsMobile] = useState(false);

  const update = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolledPast(scrollY > SCROLL_THRESHOLD_PX);
    setActiveSection(getActiveSection());
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const value = useMemo<ScrollContextValue>(
    () => ({ isScrolledPast, activeSection, isMobile }),
    [isScrolledPast, activeSection, isMobile]
  );

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useScroll must be used within ScrollProvider');
  return ctx;
}
