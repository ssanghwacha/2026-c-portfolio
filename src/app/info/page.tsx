'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const workLinks = [
  { label: 'WORK', href: '/' },
  { label: 'ALTRA', href: '#' },
  { label: 'BILLOW', href: '#' },
  { label: 'BGZT', href: '#' },
  { label: 'PROJECT 5', href: '#' },
  { label: 'PROJECT 6', href: '#' },
  { label: 'PROJECT 7', href: '#' },
];

function ArrowRight() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M-0.000229342 16.0331V18.8327L34.6113 18.8326V16.0331H-0.000229342ZM29.0124 18.8326V21.632H31.8119V18.8326H29.0124ZM26.2129 21.632V24.4315H29.0124V21.632H26.2129ZM23.4135 24.4315V27.231H26.2129V24.4315H23.4135ZM29.0124 16.0331V13.2336H31.8119V16.0331H29.0124Z" />
      <path d="M26.2132 21.6321V10.4342H29.0127V21.6321H26.2132ZM23.4138 24.4316V7.63477H26.2132V24.4316H23.4138Z" />
    </svg>
  );
}

export default function InfoPage() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? workLinks : workLinks.slice(0, 4);
  const hidden = workLinks.length - 4;

  return (
    <>
      <Header inverted />
      <main className="min-h-screen flex flex-col">
        <div className="flex-1">
          <div className="fixed top-[182px] left-9 flex flex-col gap-2">

            {/* 워크 링크 패널 */}
            <div className="rounded-[8px] bg-primary dark:bg-[#E6E6E6] p-4 flex flex-col gap-2 w-[560px]">
              {visible.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-white dark:text-[#1E1E1E] hover:opacity-70 transition-opacity py-0.5"
                  style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '32px' }}
                >
                  {label}
                  <ArrowRight />
                </Link>
              ))}
              {!showAll && hidden > 0 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="mt-2 self-start rounded-full bg-[#1E1E1E] dark:bg-white px-4 py-1.5 text-white dark:text-[#1E1E1E] text-sm font-medium"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  Show more ({hidden})
                </button>
              )}
            </div>

            {/* 바이오 패널 */}
            <div className="rounded-[8px] bg-primary dark:bg-[#E6E6E6] p-4 flex flex-col gap-4 w-[560px]">
              <p
                className="text-white dark:text-[#1E1E1E] text-2xl"
                style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, lineHeight: '120%' }}
              >
                Sangwha Cha is a designer in Vancouver, shaping brands and digital products with a refined eye for systems and user experience.
              </p>
              <Link
                href="#"
                className="self-start rounded-full bg-[#1E1E1E] dark:bg-white px-4 py-1.5 text-white dark:text-[#1E1E1E] text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                More Info
              </Link>
            </div>


          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1E1E1E]">
          <Footer />
        </div>
      </main>
    </>
  );
}
