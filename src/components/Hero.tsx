'use client';

import { useEffect, useState } from 'react';

function SmileIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 34 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="inline-block mx-1" style={{ verticalAlign: '-0.15em' }}>
      <path d="M6.66667 30H26.6667V33.3333H6.66667V30ZM6.66667 0H26.6667V3.33333H6.66667V0ZM26.6667 3.33333H30V6.66667H26.6667V3.33333ZM3.33333 3.33333H6.66667V6.66667H3.33333V3.33333ZM3.33333 26.6667H6.66667V30H3.33333V26.6667ZM26.6667 26.6667H30V30H26.6667V26.6667ZM0 6.66667H3.33333V26.6667H0V6.66667ZM30 6.66667H33.3333V26.6667H30V6.66667ZM8.33333 18.3333H11.6667V21.6667H8.33333V18.3333ZM11.6667 21.6667H21.6667V25H11.6667V21.6667ZM21.6667 18.3333H25V21.6667H21.6667V18.3333ZM10 10H13.3333V13.3333H10V10ZM20 10H23.3333V13.3333H20V10Z" />
    </svg>
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
    <section className="w-full flex flex-col items-center justify-center min-h-[70vh] px-8">
      <div className="translate-y-[50px]" style={{ textAlign: 'justify', textAlignLast: 'justify', textJustify: 'inter-word' }}>
      {/* Location + live time */}
      <p
        className="text-primary dark:text-accent tracking-wide mb-8"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '18px', textAlign: 'center', textAlignLast: 'center' }}
      >
        I&apos;m Here — Vancouver, BC · <VancouverTime /> PT
      </p>

      {/* Main copy — VT323, 48px fluid, 100% line-height, 8% letter-spacing */}
      <h1
        className="text-primary dark:text-accent"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: '36px',
          width: '700px',
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
