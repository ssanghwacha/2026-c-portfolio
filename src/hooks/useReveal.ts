'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const targets = ref.current!.querySelectorAll<HTMLElement>('[data-reveal]');
      if (!targets.length) return;

      gsap.set(targets, { y: 32, opacity: 0 });

      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
