'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

export default function Header({ inverted = false, hideScrollBtn = false }: { inverted?: boolean; hideScrollBtn?: boolean }) {
  const { theme, toggle } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 80);
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 80);
      lastScrollY = currentScrollY;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Vancouver',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
      );
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const hideControls = showScrollTop && isScrollingDown;
  const showCollapsedTime = hideControls && !isHeaderHovered;

  // 색상 토큰
  const cardBg     = inverted ? 'bg-primary dark:bg-[#E6E6E6]'    : 'bg-white dark:bg-[#1E1E1E]';
  const logoBg     = inverted ? 'bg-white dark:bg-[#1E1E1E]'       : 'bg-primary dark:bg-[#E6E6E6]';
  const logoText   = inverted ? 'text-primary dark:text-[#E6E6E6]' : 'text-white dark:text-[#1E1E1E]';
  const navBar     = inverted ? 'bg-white dark:bg-[#1E1E1E]'       : 'bg-primary dark:bg-[#E6E6E6]';
  const navText    = inverted ? 'text-white dark:text-[#1E1E1E]'   : 'text-primary dark:text-[#E6E6E6]';
  const timeText   = inverted ? 'text-white dark:text-[#1E1E1E]'   : 'text-primary dark:text-[#E6E6E6]';
  const toggleTrack = inverted
    ? (theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white')
    : (theme === 'dark' ? 'bg-[#E6E6E6]' : 'bg-primary');
  const toggleHandle = inverted
    ? (theme === 'dark' ? 'translate-x-[23px] bg-[#E6E6E6]' : 'translate-x-[3px] bg-primary')
    : (theme === 'dark' ? 'translate-x-[23px] bg-[#1E1E1E]' : 'translate-x-[3px] bg-white');
  const btnBg      = inverted ? 'bg-white dark:bg-[#1E1E1E]'       : 'bg-primary dark:bg-[#E6E6E6]';
  const btnIcon    = inverted ? 'text-primary dark:text-[#E6E6E6]' : 'text-white dark:text-[#1E1E1E]';

  return (
    <>
      <header
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
        className={`group/header fixed top-[24px] left-9 z-50 w-[281px] flex flex-col rounded-[8px] p-4 ${cardBg}`}
      >
        {/* 로고 */}
        <Link href="/" className={`w-full h-[21px] flex items-center justify-between px-[2px] ${logoBg}`}>
          <span className={`font-rethink font-medium text-2xl leading-none ${logoText}`}>C</span>
          <span className={`font-rethink font-medium text-2xl leading-none ${logoText}`}>SANGWHA</span>
        </Link>

        {/* 시간 */}
        <div
          className={`overflow-hidden transition-[max-height,opacity,margin-top] duration-300 ease-out ${
            showCollapsedTime ? 'max-h-[28px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <p
            className={`whitespace-nowrap text-sm font-bold leading-none py-[4px] ${timeText}`}
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            I&apos;m here — {time} Vancouver, BC
          </p>
        </div>

        {/* 메뉴 + 토글 */}
        <div
          className={`flex flex-col overflow-hidden transition-[max-height,opacity,margin-top] duration-300 ease-out ${
            hideControls
              ? 'max-h-0 opacity-0 mt-0 pointer-events-none group-hover/header:max-h-[120px] group-hover/header:opacity-100 group-hover/header:mt-2 group-hover/header:pointer-events-auto'
              : 'max-h-[120px] opacity-100 mt-2'
          }`}
        >
          <nav className="flex flex-col gap-0.5">
            <Link href="/info" className="group flex items-center py-[4px]">
              <div className={`w-0 self-stretch shrink-0 group-hover:w-[10px] transition-[width] duration-200 ease-out ${navBar}`} />
              <span className={`text-[18px] leading-none group-hover:pl-1 transition-[padding] duration-200 ${navText}`} style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}>INFO</span>
            </Link>
            <Link href="/work" className="group flex items-center py-[4px]">
              <div className={`w-0 self-stretch shrink-0 group-hover:w-[10px] transition-[width] duration-200 ease-out ${navBar}`} />
              <span className={`text-[18px] leading-none group-hover:pl-1 transition-[padding] duration-200 ${navText}`} style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}>WORK</span>
            </Link>
          </nav>
          <div className="mt-2">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className={`w-10 h-5 rounded-full relative border-0 p-0 transition-colors duration-300 ${toggleTrack}`}
            >
              <span className={`absolute left-0 top-[3px] h-3.5 w-3.5 rounded-full transition-all duration-300 ${toggleHandle}`} />
            </button>
          </div>
        </div>
      </header>

      {/* 위로 스크롤 버튼 */}
      {!hideScrollBtn && <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`group fixed top-[24px] right-9 z-50 flex h-9 w-9 items-center justify-center rounded-[8px] transition-[opacity,transform] duration-200 ${btnBg} ${
          showScrollTop ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 256"
          fill="currentColor"
          className={`transition-transform duration-200 group-hover:-translate-y-0.5 ${btnIcon}`}
        >
          <path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z" />
        </svg>
      </button>}
    </>
  );
}
