'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

export default function Header() {
  const { theme, toggle } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed left-0 right-0 top-0 z-40 bg-white/40 backdrop-blur-[5px] transition-[height,opacity] duration-300 ease-out dark:bg-[#1E1E1E]/40 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${isHeaderHovered ? 'h-[160px]' : 'h-[84px]'}`}
      />

    <header
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
      className="group/header fixed top-[24px] left-[28px] z-50 w-[249px] flex flex-col overflow-visible"
    >
      {/* 1. 로고 */}
      <div className="w-[249px] h-[21px] bg-primary dark:bg-[#E6E6E6] flex items-center justify-between px-[2px] hover:w-[270px] transition-[width] duration-300 ease-in-out">
        <span className="font-rethink text-white dark:text-[#1E1E1E] font-medium text-2xl leading-none">C</span>
        <span className="font-rethink text-white dark:text-[#1E1E1E] font-medium text-2xl leading-none">SANGWHA</span>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed top-[24px] right-[28px] flex h-7 w-7 items-center justify-center text-primary transition-[opacity,transform] duration-200 dark:text-[#E6E6E6] ${
          showScrollTop
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <span
          aria-hidden="true"
          className="h-full w-full bg-current"
          style={{
            WebkitMaskImage: "url('/assets/icons/arrow-circle-up-fill.svg')",
            maskImage: "url('/assets/icons/arrow-circle-up-fill.svg')",
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
          }}
        />
      </button>

      {/* 2. INFO / WORK */}
      <nav
        className={`flex flex-col gap-0.5 overflow-hidden transition-[max-height,opacity,transform,margin] duration-300 ease-out ${
          showScrollTop
            ? 'mt-0 max-h-0 -translate-y-1 opacity-0 pointer-events-none group-hover/header:mt-2 group-hover/header:max-h-[64px] group-hover/header:translate-y-0 group-hover/header:opacity-100 group-hover/header:pointer-events-auto'
            : 'mt-2 max-h-[64px] translate-y-0 opacity-100'
        }`}
      >
        <Link href="/info" className="group flex items-center py-[4px]">
          <div className="w-0 self-stretch bg-primary dark:bg-[#E6E6E6] shrink-0 group-hover:w-[10px] transition-[width] duration-200 ease-out" />
          <span className="text-[18px] leading-none text-primary dark:text-[#E6E6E6] group-hover:pl-1 transition-[padding] duration-200" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}>INFO</span>
        </Link>
        <Link href="#work" className="group flex items-center py-[4px]">
          <div className="w-0 self-stretch bg-primary dark:bg-[#E6E6E6] shrink-0 group-hover:w-[10px] transition-[width] duration-200 ease-out" />
          <span className="text-[18px] leading-none text-primary dark:text-[#E6E6E6] group-hover:pl-1 transition-[padding] duration-200" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}>WORK</span>
        </Link>
      </nav>

      {/* 3. 토글 */}
      <div className="mt-2">
        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className={`w-10 h-5 rounded-full relative border-0 p-0 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-[#E6E6E6]' : 'bg-primary'
          }`}
        >
          <span
            className={`absolute left-0 top-[2px] w-4 h-4 rounded-full transition-all duration-300 ${
              theme === 'dark' ? 'translate-x-5 bg-[#1E1E1E]' : 'translate-x-[2px] bg-white'
            }`}
          />
        </button>
      </div>

    </header>
    </>
  );
}
