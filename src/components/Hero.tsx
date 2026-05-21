'use client';

import { useEffect, useRef, useState } from 'react';

function SmileIcon() {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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

  return (
    <span
      ref={wrapRef}
      className="inline-block mx-1"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    >
      <svg width="28" height="28" viewBox="0 0 34 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="inline-block" style={{ verticalAlign: '-0.15em' }}>
        <path d="M6.66667 30H26.6667V33.3333H6.66667V30ZM6.66667 0H26.6667V3.33333H6.66667V0ZM26.6667 3.33333H30V6.66667H26.6667V3.33333ZM3.33333 3.33333H6.66667V6.66667H3.33333V3.33333ZM3.33333 26.6667H6.66667V30H3.33333V26.6667ZM26.6667 26.6667H30V30H26.6667V26.6667ZM0 6.66667H3.33333V26.6667H0V6.66667ZM30 6.66667H33.3333V26.6667H30V6.66667ZM8.33333 18.3333H11.6667V21.6667H8.33333V18.3333ZM11.6667 21.6667H21.6667V25H11.6667V21.6667ZM21.6667 18.3333H25V21.6667H21.6667V18.3333ZM10 10H13.3333V13.3333H10V10ZM20 10H23.3333V13.3333H20V10Z" />
      </svg>
    </span>
  );
}

function VancouverTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
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
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <>{time}</>;
}

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[52vh] sm:min-h-[58vh] lg:min-h-[70vh] px-4 sm:px-8">
      <div className="translate-y-[10vh] sm:translate-y-[10vh] md:translate-y-[10vh] lg:translate-y-[10vh]" style={{ textAlign: 'justify', textAlignLast: 'justify', textJustify: 'inter-word' }}>
      {/* Location + live time */}
      <p
        className="text-primary dark:text-accent tracking-wide mb-8 text-sm sm:text-[18px]"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, textAlign: 'center', textAlignLast: 'center' }}
      >
        I&apos;m Here — <VancouverTime /> <span className="hidden sm:inline">Vancouver, BC</span><span className="sm:hidden">YVR</span>
      </p>

      {/* Main copy — VT323, 48px fluid, 100% line-height, 8% letter-spacing */}
      <h1
        className="text-primary dark:text-accent max-w-[700px]"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(24px, 5vw, 36px)',
          lineHeight: '110%',
          letterSpacing: '0.04em',
        }}
      >
        <span className="block">Sangwha Cha <SmileIcon /> is a designer</span>
        <span className="block">in Vancouver, shaping brands and</span>
        <span className="block">digital products with a refined eye for</span>
        <span className="block">systems and user experience.</span>
      </h1>
      </div>
    </section>
  );
}
