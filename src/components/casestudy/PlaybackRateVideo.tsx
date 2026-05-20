'use client';

import { useEffect, useRef, type VideoHTMLAttributes } from 'react';

type PlaybackRateVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  playbackRate?: number;
};

export default function PlaybackRateVideo({
  playbackRate = 1,
  ...props
}: PlaybackRateVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <video
      {...props}
      ref={videoRef}
      onLoadedMetadata={(event) => {
        event.currentTarget.playbackRate = playbackRate;
        props.onLoadedMetadata?.(event);
      }}
    />
  );
}
