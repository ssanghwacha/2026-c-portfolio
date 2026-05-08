'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NumberCountUp({
  to,
  from = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 0.9,
  className = '',
}: {
  to: number;
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const target = ref.current;
    const counter = { value: from };

    target.textContent = `${prefix}${from.toFixed(decimals)}${suffix}`;

    const tween = gsap.to(counter, {
      value: to,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        target.textContent = `${prefix}${counter.value.toFixed(decimals)}${suffix}`;
      },
      scrollTrigger: {
        trigger: target,
        start: 'top 85%',
        once: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [to, from, decimals, prefix, suffix, duration]);

  return <span ref={ref} className={className}>{prefix}{from.toFixed(decimals)}{suffix}</span>;
}
