'use client';

import { useEffect, useRef, useState } from 'react';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function LogoSmile({ className }: { className: string }) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const mouseOffsetRef = useRef(0);
  const scrollOffsetRef = useRef(0);
  const [offsetX, setOffsetX] = useState(0);

  const getTravelBounds = () => {
    const el = wrapRef.current;
    const parent = el?.parentElement;
    if (!el || !parent) return { min: -58, max: 58 };

    const [ella, , cha] = Array.from(parent.children) as HTMLElement[];
    if (!ella || !cha) return { min: -58, max: 58 };

    return {
      min: ella.offsetLeft + ella.offsetWidth + 4 - el.offsetLeft,
      max: cha.offsetLeft - 4 - (el.offsetLeft + el.offsetWidth),
    };
  };

  useEffect(() => {
    const maxX = 58;
    const verticalRange = 72;

    const onMove = (event: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;

      const logoRect = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect();
      const cx = logoRect.left + logoRect.width / 2;
      const cy = logoRect.top + logoRect.height / 2;
      const dx = event.clientX - cx;
      const dy = Math.abs(event.clientY - cy);

      if (dy > verticalRange) {
        mouseOffsetRef.current = 0;
        return;
      }

      const normalizedX = clamp(dx / (logoRect.width / 2), -1, 1);
      const bounds = getTravelBounds();
      mouseOffsetRef.current = clamp(normalizedX * maxX, bounds.min, bounds.max);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let resetId = 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (Math.abs(delta) < 2) return;

      const strength = Math.min(64, Math.max(14, Math.abs(delta) * 1.2));
      window.clearTimeout(resetId);
      const bounds = getTravelBounds();
      scrollOffsetRef.current = clamp(delta > 0 ? strength : -strength, bounds.min, bounds.max);
      resetId = window.setTimeout(() => {
        scrollOffsetRef.current = 0;
      }, 520);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearTimeout(resetId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      const bounds = getTravelBounds();
      const targetX = clamp(mouseOffsetRef.current + scrollOffsetRef.current, bounds.min, bounds.max);

      setOffsetX((currentX) => {
        const nextX = currentX + (targetX - currentX) * 0.18;
        return Math.abs(targetX - nextX) < 0.15 ? targetX : nextX;
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span
      ref={wrapRef}
      aria-hidden="true"
      className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center ${className}`}
      style={{
        transform: `translateX(${offsetX}px)`,
        willChange: 'transform',
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4H20V6H22V18H20V20H18V22H6V20H4V18H2V6H4V4H6V2H18V4ZM9 17H15V15H9V17ZM7 15H9V13H7V15ZM15 15H17V13H15V15ZM8 10H10V7H8V10ZM14 10H16V7H14V10Z" fill="currentColor" />
      </svg>
    </span>
  );
}
