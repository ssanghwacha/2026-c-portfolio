'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import TextType from '@/components/TextType';
import { useTheme } from '@/providers/ThemeProvider';
import { ArrowsOut } from '@phosphor-icons/react';

const getCursorUrl = (color: string) => {
  const svgData = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3H13V9H11V3ZM11 15H13V21H11V15ZM15 11H21V13H15V11ZM3 11H9V13H3V11ZM12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11Z" fill="${color}"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`;
};

const getArrowCursorUrl = (color: string) => {
  const svgData = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24H16V20H14V18H12V16H18V14H16V12H14V10H12V8H10V6H8V4H6V2H4V22H6V20H8V18H10V20H12V24Z" fill="${color}"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`;
};

const getClickCursorUrl = (color: string) => {
  const svgData = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_306_583)"><path d="M14.1827 24H16.7282V21.4545H15.4554V20.1818H14.1827V18.9091H18.0009V17.6364H16.7282V16.3636H15.4554V15.0909H14.1827V13.8182H12.91V12.5455H11.6373V11.2727H10.3645V10H9.0918V22.7273H10.3645V21.4545H11.6373V20.1818H12.91V21.4545H14.1827V24Z" fill="${color}"/><path d="M3.9282 3L5.66025 2L8.66025 7.19615L6.9282 8.19615L3.9282 3ZM11.3923 7.9282L16.5885 4.9282L17.5885 6.66025L12.3923 9.66025L11.3923 7.9282ZM1 13.9282L6.19615 10.9282L7.19615 12.6603L2 15.6603L1 13.9282Z" fill="${color}"/></g><defs><clipPath id="clip0_306_583"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`;
};

const introText = "Hi! I'm Sangwha";
const recentItems = ['Experience', 'Education', 'Outside'];
const outsideOfDesignLabels = ['Love nature', 'Travel', 'City views I love', 'Cat Person', 'Figure skating', 'My favorite ice rink'];
const outsideOfDesignImages = [
  '/assets/info/od-01.jpg',
  '/assets/info/od-02.jpg',
  '/assets/info/od-03.jpg',
  '/assets/info/od-04.jpg',
  '/assets/info/od-05.jpg',
  '/assets/info/od-06.jpg',
];
const experienceItems = [
  {
    label: 'Web Designer',
    company: 'Aperture Coffee Bar',
    year: '2025',
    logo: '/assets/info/aperture_coffee_bar_logo.jpeg',
  },
  {
    label: 'Product Designer',
    company: 'BURST Creative Group',
    year: '2025',
    logo: '/assets/info/burst_creative_group_logo.jpeg',
  },
  {
    label: 'Graphic Designer',
    company: 'H Mart Toronto',
    year: '2024',
    logo: '/assets/info/1631306493726.jpeg',
  },
  {
    label: 'Brand Designer',
    company: 'Bungaejangter Inc.',
    year: '2022',
    logo: '/assets/info/bungaejangter_logo.jpeg',
  },
  {
    label: 'Brand Designer',
    company: 'Eland Eats',
    year: '2021',
    logo: '/assets/info/1637213901684.jpeg',
  },
];
const educationItems = [
  {
    label: 'Diploma in New Media Design and Web Development',
    school: 'BCIT',
    year: '2025',
    logo: '/assets/info/bcit_logo.jpeg',
  },
  {
    label: 'Bachelor of Fine Arts - BFA, Visual Communication Design',
    school: "Duksung Women's University",
    year: '2021',
    logo: '/assets/info/duksung_univ.jpeg',
  },
];

function SearchIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m20 20-4.2-4.2m2.27-5.18a7.45 7.45 0 1 1-14.9 0 7.45 7.45 0 0 1 14.9 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M230.1,108.76l-20.84-7.43q-1.83-4.44-4.15-8.66l9.48-20a12,12,0,0,0-2.33-13.82L197.13,43.74a12,12,0,0,0-13.82-2.33l-20,9.48q-4.22-2.32-8.66-4.15L147.24,25.9A12,12,0,0,0,135.93,18H120.07a12,12,0,0,0-11.31,7.9l-7.43,20.84q-4.44,1.83-8.66,4.15l-20-9.48a12,12,0,0,0-13.82,2.33L43.74,58.87a12,12,0,0,0-2.33,13.82l9.48,20q-2.32,4.22-4.15,8.66L25.9,108.76A12,12,0,0,0,18,120.07v15.86a12,12,0,0,0,7.9,11.31l20.84,7.43q1.83,4.44,4.15,8.66l-9.48,20a12,12,0,0,0,2.33,13.82l15.13,15.13a12,12,0,0,0,13.82,2.33l20-9.48q4.22,2.32,8.66,4.15l7.43,20.84a12,12,0,0,0,11.31,7.9h15.86a12,12,0,0,0,11.31-7.9l7.43-20.84q4.44-1.83,8.66-4.15l20,9.48a12,12,0,0,0,13.82-2.33l15.13-15.13a12,12,0,0,0,2.33-13.82l-9.48-20q2.32-4.22,4.15-8.66l20.84-7.43a12,12,0,0,0,7.9-11.31V120.07A12,12,0,0,0,230.1,108.76ZM128,164a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z" />
    </svg>
  );
}


function ShortcutKey({ children }: { children: ReactNode }) {
  return (
    <span className="flex min-w-[26px] items-center justify-center rounded-[6px] border border-[#E9EAEB] bg-white px-1 py-1 text-[14px] font-medium leading-none text-[#9EA2AD] dark:border-[#2E2E2E] dark:bg-[#242424] dark:text-[#D9D9D9]">
      {children}
    </span>
  );
}

function PanelKey({ children }: { children: ReactNode }) {
  return (
    <span className="flex min-w-[21px] items-center justify-center rounded-[4.929px] border border-white/20 bg-primary px-1 py-1 text-[12px] font-medium leading-none text-white/60 dark:bg-[#1E1E1E] dark:text-white/60">
      {children}
    </span>
  );
}

function Avatar({ active = false }: { active?: boolean }) {
  return (
    <span className="relative flex h-[16px] w-[16px] shrink-0 items-center justify-center sm:h-[18px] sm:w-[18px] xl:h-[26px] xl:w-[26px]">
      <Image
        src="/assets/icons/smile.svg"
        alt=""
        width={26}
        height={26}
        className={`h-full w-full ${active ? 'brightness-0 invert' : 'dark:brightness-0 dark:invert dark:opacity-70'}`}
      />
    </span>
  );
}

function CommandRow({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  const { theme } = useTheme();
  return (
    <button type="button" onClick={onClick} className="w-full px-0 py-0.5 text-left xl:px-[9px]" style={{ cursor: theme === 'dark' ? `url('${getClickCursorUrl('#00FF00')}') 24 24, pointer` : 'url(/assets/info/click.svg) 24 24, pointer' }}>
      <div className={`flex h-full w-full items-center justify-center gap-[4px] rounded-[9px] px-[4px] py-[9px] transition-colors sm:gap-[6px] sm:px-[6px] xl:justify-start xl:gap-[9px] xl:p-[9px] ${active ? 'bg-primary dark:bg-[#2A2A2A]' : ''}`}>
        <Avatar active={active} />
        <span className={`min-w-0 truncate font-satoshi text-[11.5px] font-medium leading-none sm:text-[13px] xl:text-[15px] ${active ? 'text-white dark:text-white' : 'text-primary dark:text-[#999999]'}`}>
          {label}
        </span>
      </div>
    </button>
  );
}

function ExperiencePanel({ inline = false }: { inline?: boolean }) {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 960, y: 260 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (inline) return;

    const updatePosition = () => {
      const margin = 24;
      const width = 552;
      const height = 450;
      const maxX = Math.max(margin, window.innerWidth - width - margin);
      const maxY = Math.max(margin, window.innerHeight - height - margin);
      const nextX = Math.min(Math.max(window.innerWidth * 0.56, margin), maxX);
      const nextY = Math.min(Math.max(window.innerHeight * 0.29, margin), maxY);

      setPosition({ x: nextX, y: nextY });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [inline]);

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (event: PointerEvent) => {
      const deltaX = Math.abs(event.clientX - dragStartRef.current.x);
      const deltaY = Math.abs(event.clientY - dragStartRef.current.y);
      if (!hasMoved && deltaX + deltaY < 4) return;

      setHasMoved(true);
      setPosition({
        x: event.clientX - dragOffsetRef.current.x,
        y: event.clientY - dragOffsetRef.current.y,
      });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      setHasMoved(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [hasMoved, isDragging]);

  return (
    <section
      className={`${inline ? 'flex h-auto w-full' : 'fixed z-20 hidden h-auto w-[552px] xl:flex'} flex-col overflow-hidden rounded-[11px] bg-primary shadow-[0_18px_42px_-16px_rgba(0,0,0,0.25)] dark:bg-[#1E1E1E]`}
      style={inline ? undefined : {
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: `url('${getCursorUrl(theme === 'dark' ? '#00FF00' : '#000000')}') 24 24, auto`
      }}
      onPointerDown={inline ? undefined : (event) => {
        dragStartRef.current = { x: event.clientX, y: event.clientY };
        dragOffsetRef.current = {
          x: event.clientX - position.x,
          y: event.clientY - position.y,
        };
        setIsDragging(true);
      }}
    >
      <div
        className="flex h-[48px] select-none items-center gap-[10px] border-b border-white/20 px-[13px] text-[14px] font-medium text-white/60 dark:border-white/10"
      >
        <span className="flex h-[21px] w-[21px] items-center justify-center rounded-[5px] bg-white/10 text-white/60">
          <ArrowsOut size={16} />
        </span>
        <span className="font-satoshi">Search Career...</span>
      </div>

      <div className="flex flex-col px-[14px] pt-[21px] text-white">
        <p className="mb-[20px] px-[8px] font-satoshi text-[13px] font-medium uppercase leading-none text-white/60 dark:text-[#777]">
          CAREER
        </p>

        <div className="flex flex-col">
          {experienceItems.map((item, index) => (
            <div key={`${item.company}-${item.year}`}>
              <div
                className="flex min-h-[56px] items-center justify-between gap-3 rounded-[5px] px-[8px] py-[10px] text-[12px] font-medium text-white/80 sm:min-h-[60px] sm:text-[13px] xl:min-h-[64px] xl:text-[14px]"
              >
                <div className="flex min-w-0 items-center gap-[12px] xl:gap-[14px]">
                  <span className="relative h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full bg-white sm:h-[32px] sm:w-[32px] xl:h-[34px] xl:w-[34px]">
                    <Image src={item.logo} alt="" fill sizes="34px" className="object-cover" />
                  </span>
                  <div className="min-w-0 font-satoshi">
                    <p className="truncate text-[12.5px] font-semibold leading-[1.2] text-white sm:text-[13.5px] xl:text-[14px]">
                      {item.label}
                    </p>
                    <p className="truncate pt-1 text-[11px] font-medium leading-[1.2] text-white/60 sm:text-[12px] xl:text-[12.5px]">
                      {item.company}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center justify-end whitespace-nowrap font-satoshi">
                  <span className="text-[11px] text-white/72 sm:text-[12px] xl:text-[13px]">{item.year}</span>
                </div>
              </div>
              {index < experienceItems.length - 1 ? (
                <div className="mx-[8px] h-px bg-white/12 dark:bg-white/10" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-[49px] items-center justify-between border-t border-black/10 bg-black/10 px-[14px] text-[12px] font-medium text-white/60">
        <span>{inline ? 'Use arrows to navigate' : 'Drag to move'}</span>
        <div className="flex items-center gap-[8px]">
          <span className="text-white/40">Settings</span>
          <PanelKey>⌘</PanelKey>
          <PanelKey>S</PanelKey>
        </div>
      </div>
    </section>
  );
}

function OutsideOfDesignPanel({ index, imageSrc, initialPosition, initialPositionRatio, width, height, aspectRatio, isMobile = false, wideViewportLeftShift = 0 }: { index: number; imageSrc: string; initialPosition: { x: number; y: number }; initialPositionRatio?: { x: number; y: number }; width: number; height: number; aspectRatio?: string; isMobile?: boolean; wideViewportLeftShift?: number }) {
  const { theme } = useTheme();
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const ratioX = initialPositionRatio?.x;
  const ratioY = initialPositionRatio?.y;
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile || ratioX == null || ratioY == null) return;

    const updatePosition = () => {
      const margin = 24;
      const maxX = Math.max(margin, window.innerWidth - width - margin);
      const maxY = Math.max(margin, window.innerHeight - height - margin);
      const wideViewportOffset = Math.max(0, window.innerWidth - 1366) * wideViewportLeftShift;
      const nextX = Math.min(Math.max((window.innerWidth * ratioX) - wideViewportOffset, margin), maxX);
      const nextY = Math.min(Math.max(window.innerHeight * ratioY, margin), maxY);

      setPosition({ x: nextX, y: nextY });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [height, isMobile, ratioX, ratioY, wideViewportLeftShift, width]);

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (event: PointerEvent) => {
      const deltaX = Math.abs(event.clientX - dragStartRef.current.x);
      const deltaY = Math.abs(event.clientY - dragStartRef.current.y);
      if (!hasMoved && deltaX + deltaY < 4) return;

      setHasMoved(true);
      setPosition({
        x: event.clientX - dragOffsetRef.current.x,
        y: event.clientY - dragOffsetRef.current.y,
      });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      setHasMoved(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [hasMoved, isDragging]);

  if (isMobile) {
    return (
      <section
        className="flex w-[60%] flex-col overflow-hidden rounded-[11px] bg-white shadow-[0_18px_42px_-16px_rgba(0,0,0,0.18)] dark:bg-[#1E1E1E]"
        style={{
          height: `${height}px`,
        }}
      >
        <div className="flex h-[44px] select-none items-center gap-[10px] border-b border-[#E9EAEB] px-[13px] text-[13px] font-medium text-[#9EA2AD] dark:border-white/10 dark:text-white/60">
          <span className="flex h-[21px] w-[21px] items-center justify-center rounded-[5px] border border-[#E9EAEB] bg-white text-[#9EA2AD] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:text-[#ADADAD]">
            <ArrowsOut size={16} />
          </span>
          <span className="truncate font-satoshi text-xs">
            {outsideOfDesignLabels[index]}
          </span>
        </div>

        <div className="flex min-h-0 flex-1 select-none justify-start bg-white dark:bg-[#1E1E1E]">
          <div className="relative h-full w-full" style={aspectRatio ? { aspectRatio } : {}}>
            <Image
              src={imageSrc}
              alt={`Outside of Design ${index + 1}`}
              fill
              sizes="60vw"
              className="object-cover pointer-events-none"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="fixed z-20 hidden flex-col overflow-hidden rounded-[11px] bg-white shadow-[0_18px_42px_-16px_rgba(0,0,0,0.18)] dark:bg-[#1E1E1E] xl:flex"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}px`,
        height: `${height}px`,
        cursor: `url('${getCursorUrl(theme === 'dark' ? '#00FF00' : '#000000')}') 24 24, auto`
      }}
      onPointerDown={(event) => {
        dragStartRef.current = { x: event.clientX, y: event.clientY };
        dragOffsetRef.current = {
          x: event.clientX - position.x,
          y: event.clientY - position.y,
        };
        setIsDragging(true);
      }}
    >
      <div className="flex h-[44px] select-none items-center gap-[10px] border-b border-[#E9EAEB] px-[13px] text-[13px] font-medium text-[#9EA2AD] dark:border-white/10 dark:text-white/60">
        <span className="flex h-[21px] w-[21px] items-center justify-center rounded-[5px] border border-[#E9EAEB] bg-white text-[#9EA2AD] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:text-[#ADADAD]">
          <ArrowsOut size={16} />
        </span>
        <span className="font-satoshi">
          {outsideOfDesignLabels[index]}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 select-none">
        <div className="relative w-full" style={aspectRatio ? { aspectRatio } : {}}>
          <Image
            src={imageSrc}
            alt={`Outside of Design ${index + 1}`}
            fill
            sizes="300px"
            className="object-cover pointer-events-none"
          />
        </div>
      </div>

      <div className="flex h-[44px] items-center justify-between border-t border-[#E9EAEB] bg-white px-[14px] text-[11px] font-medium text-[#9EA2AD] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:text-[#ADADAD]">
        <div className="flex items-center gap-[8px]">
          <span>Drag to move</span>
        </div>
      </div>
    </section>
  );
}

function EducationPanel({ inline = false }: { inline?: boolean }) {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 1100, y: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (inline) return;

    const updatePosition = () => {
      const margin = 24;
      const width = 480;
      const height = 280;
      const maxX = Math.max(margin, window.innerWidth - width - margin);
      const maxY = Math.max(margin, window.innerHeight - height - margin);
      const nextX = Math.min(Math.max(window.innerWidth * 0.64, margin), maxX);
      const nextY = Math.min(Math.max(window.innerHeight * 0.49, margin), maxY);

      setPosition({ x: nextX, y: nextY });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [inline]);

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (event: PointerEvent) => {
      const deltaX = Math.abs(event.clientX - dragStartRef.current.x);
      const deltaY = Math.abs(event.clientY - dragStartRef.current.y);
      if (!hasMoved && deltaX + deltaY < 4) return;

      setHasMoved(true);
      setPosition({
        x: event.clientX - dragOffsetRef.current.x,
        y: event.clientY - dragOffsetRef.current.y,
      });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      setHasMoved(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [hasMoved, isDragging]);

  return (
    <section
      className={`${inline ? 'flex h-[min(270px,calc(100vh-348px))] w-full' : 'fixed z-30 hidden h-[280px] w-[480px] xl:flex'} flex-col overflow-hidden rounded-[11px] bg-white shadow-[0_18px_42px_-16px_rgba(0,0,0,0.18)] dark:bg-[#1E1E1E]`}
      style={inline ? undefined : {
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: `url('${getCursorUrl(theme === 'dark' ? '#00FF00' : '#000000')}') 24 24, auto`
      }}
      onPointerDown={inline ? undefined : (event) => {
        dragStartRef.current = { x: event.clientX, y: event.clientY };
        dragOffsetRef.current = {
          x: event.clientX - position.x,
          y: event.clientY - position.y,
        };
        setIsDragging(true);
      }}
    >
      <div className="flex h-[44px] select-none items-center gap-[10px] border-b border-[#E9EAEB] px-[13px] text-[13px] font-medium text-[#9EA2AD] dark:border-white/10 dark:text-white/60">
        <span className="flex h-[21px] w-[21px] items-center justify-center rounded-[5px] border border-[#E9EAEB] bg-white text-[#9EA2AD] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:text-[#ADADAD]">
          <ArrowsOut size={16} />
        </span>
        <span className="font-satoshi">Search Education...</span>
      </div>

      <div className="flex flex-col px-[14px] pt-[18px] text-[#545454] dark:text-white">
        <p className="mb-[16px] px-[8px] font-satoshi text-[13px] font-medium uppercase leading-none text-[#9EA2AD] dark:text-[#777]">
          EDUCATION
        </p>

        <div className="flex flex-col">
          {educationItems.map((item, index) => (
            <div key={`${item.school}-${item.year}`}>
              <div className="flex min-h-[56px] items-center justify-between gap-3 rounded-[6px] px-[8px] py-[10px] text-[12px] font-medium text-[#545454] dark:text-white/80 sm:min-h-[60px] sm:text-[13px] xl:min-h-[64px] xl:text-[14px]">
                <div className="flex min-w-0 items-center gap-[12px] xl:gap-[14px]">
                  <span className="relative h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full bg-white sm:h-[32px] sm:w-[32px] xl:h-[34px] xl:w-[34px]">
                    <Image src={item.logo} alt="" fill sizes="34px" className="object-cover" />
                  </span>
                  <div className="min-w-0 font-satoshi">
                    <p className="line-clamp-2 text-[12.5px] font-semibold leading-[1.2] text-[#2F3133] dark:text-white sm:text-[13.5px] xl:text-[14px]">
                      {item.label}
                    </p>
                    <p className="truncate pt-1 text-[11px] font-medium leading-[1.2] text-[#7B7F88] dark:text-white/60 sm:text-[12px] xl:text-[12.5px]">
                      {item.school}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center justify-end whitespace-nowrap font-satoshi">
                  <span className="text-[11px] text-[#9EA2AD] dark:text-white/72 sm:text-[12px] xl:text-[13px]">{item.year}</span>
                </div>
              </div>
              {index < educationItems.length - 1 ? (
                <div className="mx-[8px] h-px bg-[#EDEEF0] dark:bg-white/10" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-[44px] items-center justify-between border-t border-[#E9EAEB] bg-white px-[14px] text-[11px] font-medium text-[#9EA2AD] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:text-[#ADADAD]">
        <span>{inline ? 'Use arrows to navigate' : 'Drag to move'}</span>
        <div className="flex items-center gap-[8px]">
          <span className="hidden sm:inline">Settings</span>
          <span className="flex min-w-[21px] items-center justify-center rounded-[4.929px] border border-[#E9EAEB] bg-white px-1 py-1 text-[12px] font-medium leading-none text-[#9EA2AD] dark:border-[#2E2E2E] dark:bg-[#242424] dark:text-[#D9D9D9]">⌘</span>
          <span className="flex min-w-[21px] items-center justify-center rounded-[4.929px] border border-[#E9EAEB] bg-white px-1 py-1 text-[12px] font-medium leading-none text-[#9EA2AD] dark:border-[#2E2E2E] dark:bg-[#242424] dark:text-[#D9D9D9]">S</span>
        </div>
      </div>
    </section>
  );
}

function InfoCommandMenu() {
  const [activeItem, setActiveItem] = useState('Outside');
  const [outsideOfDesignIndex, setOutsideOfDesignIndex] = useState(0);
  const showExperiencePanel = activeItem === 'Experience';
  const showEducationPanel = activeItem === 'Education';
  const showOutsideOfDesignPanel = activeItem === 'Outside';

  useEffect(() => {
    if (!showOutsideOfDesignPanel) {
      setOutsideOfDesignIndex(0);
      return;
    }

    const intervalId = window.setInterval(() => {
      setOutsideOfDesignIndex((currentIndex) => (currentIndex + 1) % outsideOfDesignImages.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [showOutsideOfDesignPanel]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        const currentIndex = recentItems.indexOf(activeItem);
        let newIndex;

        if (e.key === 'ArrowUp') {
          newIndex = currentIndex === 0 ? recentItems.length - 1 : currentIndex - 1;
        } else {
          newIndex = currentIndex === recentItems.length - 1 ? 0 : currentIndex + 1;
        }

        setActiveItem(recentItems[newIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  return (
    <>
      <div className="no-scrollbar fixed bottom-0 left-3 top-6 z-20 flex w-[calc(100vw-24px)] max-w-[686px] flex-col gap-4 overflow-y-auto pb-6 sm:left-4 sm:w-[calc(100vw-32px)] xl:contents xl:overflow-visible xl:pb-0">
      <div className="shrink-0 xl:hidden">
        <Header showClickCursor={true} hideScrollBtn={true} inlineOnMobile={true} />
      </div>
      <section className="flex h-auto w-full shrink-0 flex-col overflow-hidden rounded-[13px] border border-[#E9EAEB] bg-white shadow-[0_17px_34px_-13px_rgba(88,92,95,0.1)] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] xl:fixed xl:left-9 xl:top-[188px] xl:z-20 xl:h-[min(524px,calc(100vh-220px))] xl:w-[calc(100vw-32px)] xl:max-w-[686px]">
        <div className="flex h-[61px] shrink-0 items-center border-b border-[#E9EAEB] bg-white px-[21px] dark:border-[#2E2E2E] dark:bg-[#1E1E1E]">
          <div className="flex min-w-0 flex-1 items-center gap-[9px]">
            <span className="shrink-0 text-primary dark:text-[#E6E6E6]">
              <SearchIcon />
            </span>
            <TextType
              as="p"
              text={introText}
              typingSpeed={110}
              pauseDuration={1700}
              deletingSpeed={70}
              loop
              showCursor
              cursorCharacter="_"
              cursorBlinkDuration={0.5}
              className="min-w-0 flex-1 truncate py-1 font-satoshi text-[18px] font-semibold leading-[1.25] text-primary dark:text-[#E6E6E6]"
            />
          </div>
        </div>

        <div className="flex flex-none flex-col gap-1 pt-[17px] xl:min-h-0 xl:flex-1">
          <div className="w-full max-w-none space-y-3 px-[17px] font-satoshi text-[14px] font-medium leading-[1.32] text-[#545454] dark:text-[#E6E6E6] sm:text-[15px] xl:space-y-4 xl:text-[16px] xl:leading-[1.25]">
            <p>
              I&apos;ve always been interested in how small visual details can change the way people experience something.
            </p>
            <p>
              That curiosity started with branding and gradually expanded into UX and digital product design. Today, I work across visual systems, interfaces, and digital experiences with a focus on clarity, usability, and consistency.
            </p>
            <p>
              Find me on{' '}
              <a href="#" className="text-primary hover:opacity-70 dark:text-accent">LinkedIn</a>,{' '}
              <a href="#" className="text-primary hover:opacity-70 dark:text-accent">Behance</a>, or via{' '}
              <a href="mailto:sangwhacha0@gmail.com" className="text-primary hover:opacity-70 dark:text-accent">Email</a>.
            </p>
          </div>

          <div className="h-[10px] shrink-0 xl:h-[22px]" />

          <p className="px-[17px] font-satoshi text-[13px] font-medium leading-none text-[#9EA2AD] dark:text-[#777]">
            RECENT
          </p>

          <div className="grid grid-cols-3 gap-2 px-[17px] py-2 xl:block xl:px-0 xl:py-0">
            {recentItems.map((item) => (
              <CommandRow
                key={item}
                label={item}
                active={activeItem === item}
                onClick={() => setActiveItem(item)}
              />
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#E9EAEB] bg-white p-[14px] font-satoshi text-[11px] font-medium text-[#9EA2AD] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:text-[#ADADAD] sm:text-[12px] xl:p-[17px] xl:text-[15px]">
          <div className="flex min-w-0 items-center gap-[9px]">
            <span>Use</span>
            <ShortcutKey>↓</ShortcutKey>
            <ShortcutKey>↑</ShortcutKey>
            <span className="hidden whitespace-nowrap sm:inline">to navigate</span>
          </div>
          <div className="flex shrink-0 items-center gap-[9px]">
            <span className="hidden sm:inline">To close</span>
            <ShortcutKey>esc</ShortcutKey>
            <span className="flex h-[21px] w-[21px] items-center justify-center text-[#9EA2AD] dark:text-[#ADADAD]">
              <SettingsIcon />
            </span>
          </div>
        </div>
      </section>
      {/* Mobile/Tablet */}
      <div className="pointer-events-none min-h-0 shrink-0 xl:hidden">
        {showExperiencePanel ? (
          <div className="pointer-events-auto">
            <ExperiencePanel inline />
          </div>
        ) : null}
        {showEducationPanel ? (
          <div className="pointer-events-auto">
            <EducationPanel inline />
          </div>
        ) : null}
        {showOutsideOfDesignPanel && (
          <div className="pointer-events-auto pb-4">
            <OutsideOfDesignPanel
              key={outsideOfDesignIndex}
              index={outsideOfDesignIndex}
              imageSrc={outsideOfDesignImages[outsideOfDesignIndex]}
              initialPosition={{ x: 0, y: 0 }}
              width={100}
              height={340}
              isMobile
            />
          </div>
        )}
      </div>
      </div>
      {/* Desktop */}
      <div className="hidden xl:block">
        {showExperiencePanel ? <ExperiencePanel /> : null}
        {showEducationPanel ? <EducationPanel /> : null}
        {showOutsideOfDesignPanel && (
          <>
            <OutsideOfDesignPanel
              index={0}
              imageSrc="/assets/info/od-01.jpg"
              initialPosition={{ x: 1010, y: 200 }}
              initialPositionRatio={{ x: 0.725, y: 0.275 }}
              width={210}
              height={270}
            />
            <OutsideOfDesignPanel
              index={1}
              imageSrc="/assets/info/od-02.jpg"
              initialPosition={{ x: 1200, y: 100 }}
              initialPositionRatio={{ x: 0.84, y: 0.155 }}
              width={174}
              height={231}
            />
            <OutsideOfDesignPanel
              index={2}
              imageSrc="/assets/info/od-03.jpg"
              initialPosition={{ x: 1340, y: 420 }}
              initialPositionRatio={{ x: 0.572, y: 0.435 }}
              wideViewportLeftShift={0.48}
              width={252}
              height={309}
            />
            <OutsideOfDesignPanel
              index={3}
              imageSrc="/assets/info/od-04.jpg"
              initialPosition={{ x: 1010, y: 530 }}
              initialPositionRatio={{ x: 0.667, y: 0.685 }}
              width={174}
              height={231}
              aspectRatio="4/3"
            />
            <OutsideOfDesignPanel
              index={4}
              imageSrc="/assets/info/od-05.jpg"
              initialPosition={{ x: 790, y: 300 }}
              initialPositionRatio={{ x: 0.565, y: 0.112 }}
              width={174}
              height={231}
              aspectRatio="4/3"
            />
            <OutsideOfDesignPanel
              index={5}
              imageSrc="/assets/info/od-06.jpg"
              initialPosition={{ x: 1240, y: 620 }}
              initialPositionRatio={{ x: 0.838, y: 0.62 }}
              width={174}
              height={231}
              aspectRatio="4/3"
            />
          </>
        )}
      </div>

    </>
  );
}

export default function InfoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();
  const backgroundVideo = theme === 'dark' ? '/assets/info/Info_BG-02.mp4' : '/assets/info/Info_BG.mp4';
  const meImage = theme === 'dark' ? '/assets/info/image_me2.png' : '/assets/info/image_me 1.png';

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
      videoRef.current.load();
      void videoRef.current.play().catch(() => {});
    }
  }, [backgroundVideo]);

  return (
    <div style={{ cursor: theme === 'dark' ? `url('${getArrowCursorUrl('#00FF00')}') 8 4, auto` : 'url(/assets/info/dinkie-icons_cursor-arrow-filled.svg) 8 4, auto' }}>
      <div className="hidden xl:block">
        <Header showClickCursor={true} />
      </div>
      <main
        className="relative isolate h-screen flex flex-col overflow-hidden"
      >
        <Image
          src="/assets/info/bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="fixed inset-0 z-0 h-full w-full object-cover object-center"
        />
        <video
          key={backgroundVideo}
          ref={videoRef}
          className="fixed inset-0 z-[1] h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/info/bg.png"
          aria-hidden="true"
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.playbackRate = 0.7;
            }
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <InfoCommandMenu />
        <div className="pointer-events-none fixed bottom-0 left-[145px] z-30 hidden w-[min(390px,72vw)] xl:block">
          <Image
            src={meImage}
            alt="Sangwha Cha"
            width={940}
            height={912}
            priority
            className="h-auto w-full"
          />
        </div>
      </main>
    </div>
  );
}
