'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type NowStatus = {
  before: string;
  emphasis: string;
  icons?: { src: string; alt: string }[];
};

const NOW_STATUSES: NowStatus[] = [
  {
    before: 'designing with',
    emphasis: 'Figma and Adobe',
    icons: [
      { src: '/assets/icons/now/figma.svg', alt: 'Figma' },
      { src: '/assets/icons/now/adobe.svg', alt: 'Adobe' },
    ],
  },
  {
    before: 'building with',
    emphasis: 'Codex and Claude Code',
    icons: [
      { src: '/assets/icons/now/codex.svg', alt: 'Codex' },
      { src: '/assets/icons/now/claude.svg', alt: 'Claude Code' },
    ],
  },
  {
    before: 'testing with',
    emphasis: 'real people',
    icons: [
      { src: '/assets/icons/now/react-v2.svg', alt: 'React' },
      { src: '/assets/icons/now/google-analytics.svg', alt: 'Google Analytics' },
    ],
  },
  {
    before: 'collaborating with',
    emphasis: 'a team',
    icons: [{ src: '/assets/icons/now/slack.svg', alt: 'Slack' }],
  },
  {
    before: 'running on A&W between deadlines',
    emphasis: '',
    icons: [{ src: '/assets/icons/now/aw.svg', alt: 'A&W' }],
  },
  {
    before: 'learning from real customer flows',
    emphasis: '',
    icons: [{ src: '/assets/icons/now/cooc.svg', alt: 'Cooc' }],
  },
];

function StatusContent({ status }: { status: NowStatus }) {
  return (
    <>
      <span>{status.before}</span>
      <span className="font-medium">{status.emphasis}</span>
      {status.icons?.map(({ src, alt }, index) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          width={28}
          height={28}
          className={`size-[clamp(18px,6vw,24px)] rounded-[4px] object-contain sm:size-6 lg:size-7 ${index === 0 ? 'ml-2.5' : ''}`}
        />
      ))}
    </>
  );
}

function NowStatusLine() {
  const [index, setIndex] = useState(0);
  const status = NOW_STATUSES[index];

  useEffect(() => {
    const interval = window.setInterval(() => setIndex((current) => (current + 1) % NOW_STATUSES.length), 3600);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <p
      aria-live="polite"
      className="mx-auto mt-8 flex min-h-9 w-[calc(100vw-24px)] flex-col items-center justify-center gap-1 text-center text-[clamp(12px,3.8vw,20px)] tracking-[-0.01em] text-primary sm:mt-10 sm:w-full sm:min-h-9 sm:flex-row sm:gap-1.5 sm:text-[16px] lg:w-auto lg:min-h-10 lg:gap-2 lg:text-[20px] dark:text-[#E6E6E6]"
      style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
    >
      <span>
        I&apos;m probably<span className="hidden sm:inline"> —</span>
      </span>
      <motion.span
        layout="size"
        transition={{ layout: { duration: 0.62, ease: [0.16, 1, 0.3, 1] } }}
        className="relative inline-flex min-h-9 max-w-full overflow-hidden rounded-full bg-primary px-2.5 py-1 text-white will-change-[width] sm:px-3 sm:py-1.5 lg:min-h-10 lg:px-3.5 lg:py-2 dark:bg-[#E6E6E6] dark:text-[#1E1E1E]"
      >
        <span aria-hidden="true" className="invisible inline-flex items-center gap-1 whitespace-nowrap lg:gap-1.5">
          <StatusContent status={status} />
        </span>
        <AnimatePresence mode="sync" initial={false}>
          <motion.span
            key={status.before}
            initial={{ opacity: 0, y: '-70%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '35%', filter: 'blur(2px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 left-2.5 right-2.5 inline-flex items-center gap-1 whitespace-nowrap sm:left-3 sm:right-3 lg:left-3.5 lg:right-3.5 lg:gap-1.5"
          >
            <StatusContent status={status} />
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </p>
  );
}

function SmileIcon() {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [bubbleKey, setBubbleKey] = useState(0);

  useEffect(() => {
    const RADIUS = 140;
    const MAX_X = 24;
    const MAX_Y = 12;

    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist > RADIUS || dist === 0) {
        setOffset({ x: 0, y: 0 });
        return;
      }

      const force = 1 - dist / RADIUS;
      const nx = -(dx / dist) * force * MAX_X;
      const ny = -(dy / dist) * force * MAX_Y;
      setOffset({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    let wasAwayFromTop = window.scrollY > 24;

    const onScroll = () => {
      const atTop = window.scrollY <= 24;
      if (atTop && wasAwayFromTop) {
        setBubbleKey((key) => key + 1);
      }
      wasAwayFromTop = !atTop;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <span
      ref={wrapRef}
      className="relative inline-block mx-1"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    >
      <motion.div
        key={bubbleKey}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-[calc(100%-4px)] left-1/2 w-[64px] max-w-none -translate-x-1/2 sm:bottom-[calc(100%-6px)] sm:w-[80px] lg:bottom-[calc(100%-10px)] lg:w-[112px]"
      >
        <Image
          src="/assets/hero/hi-bubble-blue.svg"
          alt=""
          width={112}
          height={80}
          priority
          className="h-auto w-[64px] sm:w-[80px] lg:w-[112px] dark:hidden"
        />
        <Image
          src="/assets/hero/hi-bubble-v3.svg"
          alt=""
          width={112}
          height={80}
          priority
          className="hidden h-auto w-[64px] sm:w-[80px] lg:w-[112px] dark:block dark:invert"
        />
      </motion.div>
      <svg width="56" height="56" viewBox="0 0 34 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="inline-block h-[0.72em] w-[0.72em]" style={{ verticalAlign: '-0.15em' }}>
        <path d="M6.66667 30H26.6667V33.3333H6.66667V30ZM6.66667 0H26.6667V3.33333H6.66667V0ZM26.6667 3.33333H30V6.66667H26.6667V3.33333ZM3.33333 3.33333H6.66667V6.66667H3.33333V3.33333ZM3.33333 26.6667H6.66667V30H3.33333V26.6667ZM26.6667 26.6667H30V30H26.6667V26.6667ZM0 6.66667H3.33333V26.6667H0V6.66667ZM30 6.66667H33.3333V26.6667H30V6.66667ZM8.33333 18.3333H11.6667V21.6667H8.33333V18.3333ZM11.6667 21.6667H21.6667V25H11.6667V21.6667ZM21.6667 18.3333H25V21.6667H21.6667V18.3333ZM10 10H13.3333V13.3333H10V10ZM20 10H23.3333V13.3333H20V10Z" />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[90svh] touch-pan-y items-center overflow-hidden bg-white px-4 py-16 text-[#1E1E1E] sm:min-h-[70svh] sm:px-10 sm:py-24 lg:min-h-[76svh] lg:px-[5.5vw] lg:py-24 dark:bg-[#1E1E1E] dark:text-[#E6E6E6]">
      <div className="relative z-10 mx-auto w-full max-w-[1540px] translate-y-[1svh] text-center sm:translate-y-[4svh] lg:translate-y-[6svh]">
        <h1
          className="mx-auto max-w-[1450px] text-[clamp(30px,5vw,56px)] font-medium text-[#252525] lg:text-[clamp(56px,5.65vw,86px)] lg:font-normal dark:text-[#E6E6E6]"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            lineHeight: '0.98',
            letterSpacing: '-0.055em',
          }}
        >
          <motion.span
            className="block text-balance lg:hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Sangwha <SmileIcon /> is a designer shaping brands, digital products, and systems with a refined eye for user experience.
          </motion.span>
          <span className="hidden lg:block">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Sangwha <SmileIcon /> is a designer shaping
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              brands, digital products, and systems
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              with a refined eye for user experience.
            </motion.span>
          </span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <NowStatusLine />
        </motion.div>
      </div>
    </section>
  );
}
