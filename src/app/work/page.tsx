'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import WorkGrid from '@/components/WorkGrid';
import Footer from '@/components/Footer';

type Category = 'all' | 'product' | 'branding';

const filters: { key: Category; label: string }[] = [
  { key: 'all', label: 'Everything' },
  { key: 'product', label: 'Product | UXUI' },
  { key: 'branding', label: 'Branding' },
];

function WorkFilter({ active, setActive }: { active: Category; setActive: (c: Category) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="hidden sm:fixed top-[24px] right-9 z-50 sm:block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="rounded-[8px] bg-white dark:bg-[#1E1E1E] p-3 sm:p-4 flex flex-row items-center overflow-hidden transition-all duration-300 ease-out"
        style={{ gap: hovered ? '24px' : '0px' }}
      >
        {filters.map(({ key, label }) => {
          const isActive = active === key;
          const visible = hovered || isActive;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 text-sm sm:text-[18px] font-medium leading-none py-[4px] whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'text-primary dark:text-[#E6E6E6]'
                  : 'text-[#ADADAD] dark:text-[#555] hover:text-primary dark:hover:text-[#E6E6E6]'
              }`}
              style={{
                fontFamily: "'Satoshi', sans-serif",
                textTransform: 'uppercase',
                maxWidth: visible ? '200px' : '0px',
                opacity: visible ? 1 : 0,
                overflow: 'hidden',
                padding: visible ? undefined : '0',
              }}
            >
              <span className={`h-[8px] w-[8px] rounded-full bg-current shrink-0 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [active, setActive] = useState<Category>('all');

  return (
    <>
      <Header hideScrollBtn scrollWithPageOnMobile />
      <WorkFilter active={active} setActive={setActive} />
      <main className="pt-12 sm:pt-14 lg:pt-[200px] pb-20 sm:pb-[150px]">
        <WorkGrid active={active} />
      </main>
      <Footer />
    </>
  );
}
