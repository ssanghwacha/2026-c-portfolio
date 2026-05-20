'use client';

import { useEffect, useState } from 'react';

export default function CaseFixedRail({ children }: { children: React.ReactNode }) {
  const [railTop, setRailTop] = useState(36);
  const [isAbsolute, setIsAbsolute] = useState(false);

  useEffect(() => {
    const marker = document.getElementById('case-content-end');
    const rail = document.getElementById('case-fixed-rail');
    if (!marker || !rail) return;

    let raf = 0;
    const update = () => {
      const currentScrollY = window.scrollY;
      const markerTop = marker.getBoundingClientRect().top;
      const railHeight = rail.getBoundingClientRect().height;
      const triggerPoint = railHeight;

      if (markerTop <= triggerPoint) {
        setIsAbsolute(true);
        const markerScrollY = marker.getBoundingClientRect().top + currentScrollY;
        setRailTop(markerScrollY - railHeight - 48);
      } else {
        setIsAbsolute(false);
        setRailTop(36);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      id="case-fixed-rail"
      className={`${isAbsolute ? 'absolute' : 'fixed'} left-9 z-[60] flex w-[360px] flex-col gap-[12px]`}
      style={{ top: `${railTop}px` }}
    >
      {children}
    </div>
  );
}
