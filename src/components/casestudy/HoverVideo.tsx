'use client';

import { useEffect, useRef, useState } from 'react';

export default function HoverVideo({
  src,
  fallback,
  alt = '',
  className = '',
}: {
  src: string;
  fallback: string;
  alt?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const timer = setTimeout(() => {
      if (video.readyState < 2) setFailed(true);
    }, 3000);

    const onCanPlay = () => {
      clearTimeout(timer);
      video.play().catch(() => setFailed(true));
    };
    const onError = () => {
      clearTimeout(timer);
      setFailed(true);
    };

    video.addEventListener('canplay', onCanPlay, { once: true });
    video.addEventListener('error', onError);

    return () => {
      clearTimeout(timer);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('error', onError);
    };
  }, []);

  if (failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={fallback} alt={alt} className={className} />
    );
  }

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      autoPlay
      preload="auto"
      poster={fallback}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
