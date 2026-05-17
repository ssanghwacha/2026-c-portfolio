'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const RULES = [
  {
    title: 'Start in conversation',
    body: 'Actions begin in discussion, not in admin panels.',
    image: '/assets/projects/billow/chat.png',
    alt: 'Billow chat screen showing a conversation-based action entry point',
  },
  {
    title: 'Work without handover',
    body: 'Anyone should act without prior knowledge.',
    image: '/assets/projects/billow/subscription.png',
    alt: 'Billow subscription screen showing shared subscription ownership and usage',
  },
  {
    title: 'See status instantly',
    body: 'No searching across tools.',
    image: '/assets/projects/billow/calendar.png',
    alt: 'Billow calendar screen showing renewal timing at a glance',
  },
];

export default function ShiftRulesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRule = RULES[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % RULES.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="grid w-full min-w-0 items-start gap-8 md:grid-cols-[1.25fr_0.9fr]">
      <div className="relative aspect-square w-full min-w-0 overflow-hidden rounded-[8px] bg-[#0A0A0A]">
        <Image
          key={activeRule.image}
          src={activeRule.image}
          alt={activeRule.alt}
          fill
          sizes="(max-width: 768px) 100vw, 56vw"
          className="object-cover"
        />
      </div>

      <div className="w-full min-w-0">
        <div className="flex w-full min-w-0 flex-col gap-3">
          {RULES.map(({ title, body }, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-[12px] px-5 py-4 text-left transition-colors duration-300 ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'bg-[#F5F5F5] text-[#3F3F3F] hover:bg-[#ECECEC] dark:bg-[#2A2A2A] dark:text-[#E6E6E6] dark:hover:bg-[#333]'
                }`}
              >
                <p className="font-satoshi text-[18px] font-medium leading-[1.3]">
                  {title}
                </p>
                <p className={`mt-2 font-satoshi text-[14px] font-medium leading-[1.4] ${
                  isActive ? 'text-white/75' : 'text-[#6F6F6F] dark:text-[#999]'
                }`}>
                  {body}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
