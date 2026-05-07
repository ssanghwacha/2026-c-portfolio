'use client';

import { useEffect, useState } from 'react';

export default function AnchorNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 160);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-[24px] z-40 flex items-center gap-6 rounded-[8px] px-4 py-[14px] bg-white dark:bg-[#2A2A2A] transition-[opacity,transform] duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      style={{ left: 'calc(36px + 281px + 8px)', right: '36px' }}
    >
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`font-satoshi text-sm whitespace-nowrap transition-colors duration-150 ${
            active === id
              ? 'text-[#1E1E1E] dark:text-[#E6E6E6] font-medium'
              : 'text-[#ADADAD] dark:text-[#555] hover:text-[#1E1E1E] dark:hover:text-[#E6E6E6]'
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
