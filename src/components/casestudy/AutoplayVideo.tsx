'use client';

import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react';

type AutoplayVideoProps = ComponentPropsWithoutRef<'video'> & {
  playbackRate?: number;
};

export default function AutoplayVideo({ playbackRate = 1, ...props }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  return <video ref={videoRef} {...props} />;
}
