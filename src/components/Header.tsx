'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

type NavItem = { id: string; label: string };

export default function Header({
  inverted = false,
  hideScrollBtn = false,
  projectNav,
  leftClass = 'left-9',
  stableNav = false,
}: {
  inverted?: boolean;
  hideScrollBtn?: boolean;
  projectNav?: NavItem[];
  leftClass?: string;
  stableNav?: boolean;
}) {
  const { theme, toggle } = useTheme();
  const [showScrollTop, setShowScrollTop]     = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [time, setTime]                       = useState('');
  const [activeSection, setActiveSection]     = useState('');

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
          hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
        }).format(new Date())
      );
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!projectNav?.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -60% 0px' }
    );
    projectNav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [projectNav]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const hideControls    = !stableNav && showScrollTop && isScrollingDown;
  const showProjectNav  = !stableNav && Boolean(projectNav?.length) && hideControls;
  const showCollapsedTime = hideControls && !isHeaderHovered && !showProjectNav;

  // 색상 토큰
  const cardBg      = inverted ? 'bg-primary dark:bg-[#E6E6E6]'    : 'bg-white dark:bg-[#1E1E1E]';
  const logoBg      = inverted ? 'bg-white dark:bg-[#1E1E1E]'       : 'bg-primary dark:bg-[#E6E6E6]';
  const logoText    = inverted ? 'text-primary dark:text-[#E6E6E6]' : 'text-white dark:text-[#1E1E1E]';
  const navBar      = inverted ? 'bg-white dark:bg-[#1E1E1E]'       : 'bg-primary dark:bg-[#E6E6E6]';
  const navText     = inverted ? 'text-white dark:text-[#1E1E1E]'   : 'text-primary dark:text-[#E6E6E6]';
  const timeText    = inverted ? 'text-white dark:text-[#1E1E1E]'   : 'text-primary dark:text-[#E6E6E6]';
  const toggleTrack = inverted
    ? (theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white')
    : (theme === 'dark' ? 'bg-[#E6E6E6]' : 'bg-primary');
  const toggleHandle = inverted
    ? (theme === 'dark' ? 'translate-x-[23px] bg-[#E6E6E6]' : 'translate-x-[3px] bg-primary')
    : (theme === 'dark' ? 'translate-x-[23px] bg-[#1E1E1E]' : 'translate-x-[3px] bg-white');
  const btnBg   = inverted ? 'bg-white dark:bg-[#1E1E1E]'       : 'bg-primary dark:bg-[#E6E6E6]';
  const btnIcon = inverted ? 'text-primary dark:text-[#E6E6E6]' : 'text-white dark:text-[#1E1E1E]';

  return (
    <>
      <header
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
        id="main-header"
        className={`group/header fixed top-[24px] ${leftClass} z-50 flex flex-col rounded-[8px] p-4 ${cardBg} ${
          showProjectNav ? 'w-fit' : 'w-[281px]'
        }`}
      >
        {/* 로고 */}
        <Link href="/" className={`w-[249px] h-[21px] flex items-center justify-between px-[2px] ${logoBg}`}>
          <span className={`font-rethink font-medium text-2xl leading-none ${logoText}`}>C</span>
          <span className={`font-rethink font-medium text-2xl leading-none ${logoText}`}>SANGWHA</span>
        </Link>

        {/* 시간 (일반 모드) */}
        <div
          className={`overflow-hidden transition-[max-height,opacity,margin-top] duration-300 ease-out ${
            showCollapsedTime ? 'max-h-[28px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <p className={`whitespace-nowrap text-sm font-bold leading-none py-[4px] ${timeText}`} style={{ fontFamily: "'Satoshi', sans-serif" }}>
            I&apos;m here — {time} Vancouver, BC
          </p>
        </div>

        {/* 프로젝트 nav — 기본: 활성 섹션만 ●+label, 헤더 호버: 전체 펼침 */}
        {projectNav?.length ? (
          <div
            className={`overflow-hidden transition-[max-height,opacity,margin-top] duration-200 ease-out ${
              showProjectNav ? 'max-h-[36px] opacity-100 mt-2 pointer-events-auto' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
            }`}
          >
            <div className="flex items-center py-[4px]">
              {projectNav.map(({ id, label }) => {
                const isActive = (activeSection || projectNav[0].id) === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`flex items-center gap-2 overflow-hidden whitespace-nowrap transition-[max-width,opacity,padding-right] duration-200 ease-out ${
                      isActive
                        ? 'max-w-[240px] opacity-100 pr-5'
                        : 'max-w-0 opacity-0 pointer-events-none pr-0 group-hover/header:max-w-[240px] group-hover/header:opacity-100 group-hover/header:pointer-events-auto group-hover/header:pr-5'
                    }`}
                  >
                    <span className={`w-[7px] h-[7px] rounded-full flex-shrink-0 ${isActive ? navBar : 'opacity-0'}`} />
                    <span
                      className={`text-[18px] leading-none font-medium uppercase ${isActive ? navText : 'text-[#ADADAD] dark:text-[#555]'}`}
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* 메뉴 + 토글 — showProjectNav일 땐 hover reveal 없이 완전 숨김 */}
        <div
          className={`flex flex-col overflow-hidden transition-[max-height,opacity,margin-top] duration-200 ease-out ${
            showProjectNav
              ? 'max-h-0 opacity-0 mt-0 pointer-events-none'
              : hideControls
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

      {/* 위로 스크롤 버튼 — project nav 펼쳐지면 카드 안에 가려지므로 숨김 */}
      {!hideScrollBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`group fixed top-[24px] right-9 z-50 flex h-9 w-9 items-center justify-center rounded-[8px] transition-[opacity,transform] duration-200 ${btnBg} ${
            showScrollTop ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className={`transition-transform duration-200 group-hover:-translate-y-0.5 ${btnIcon}`}>
            <path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z" />
          </svg>
        </button>
      )}
    </>
  );
}
