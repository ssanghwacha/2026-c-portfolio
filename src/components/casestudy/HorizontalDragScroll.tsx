'use client';

import { useRef, useState, type ReactNode } from 'react';

type HorizontalDragScrollProps = {
  children: ReactNode;
  className?: string;
};

export default function HorizontalDragScroll({ children, className = '' }: HorizontalDragScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const endDrag = () => {
    dragRef.current.active = false;
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollRef}
      className={`${className} ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      onPointerDown={(event) => {
        if (event.pointerType !== 'mouse' || !scrollRef.current) return;
        dragRef.current = {
          active: true,
          startX: event.clientX,
          startScrollLeft: scrollRef.current.scrollLeft,
        };
        event.currentTarget.setPointerCapture(event.pointerId);
        setIsDragging(true);
      }}
      onPointerMove={(event) => {
        if (!dragRef.current.active || !scrollRef.current) return;
        scrollRef.current.scrollLeft = dragRef.current.startScrollLeft - (event.clientX - dragRef.current.startX);
      }}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDragStart={(event) => event.preventDefault()}
    >
      {children}
    </div>
  );
}
