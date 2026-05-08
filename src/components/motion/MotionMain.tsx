'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function MotionMain({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const panels = el.querySelectorAll('[data-page-panel]');
      const targets = panels.length ? Array.from(panels) : [el];

      gsap.fromTo(
        targets,
        { y: 48 },
        { y: 0, duration: 0.75, ease: 'power2.out', clearProps: 'transform' }
      );
    }, el);

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!link || !ref.current) return;

      const url = new URL(link.href, window.location.href);
      const isInternal = url.origin === window.location.origin;
      const isSamePage = url.pathname === window.location.pathname && url.hash;
      const opensNewContext = link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

      if (!isInternal || isSamePage || opensNewContext) return;

      event.preventDefault();
      const panels = ref.current.querySelectorAll('[data-page-panel]');
      const targets = panels.length ? Array.from(panels) : [ref.current];

      gsap.to(targets, {
        y: -24,
        duration: 0.35,
        ease: 'power2.inOut',
        onComplete: () => {
          window.location.href = link.href;
        },
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={ref} className={className}>
      {children}
    </main>
  );
}
