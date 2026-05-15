'use client';

import { createElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ElementType, HTMLAttributes } from 'react';
import { gsap } from 'gsap';

type VariableSpeed = {
  min: number;
  max: number;
};

type TextTypeProps = HTMLAttributes<HTMLElement> & {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  variableSpeed?: VariableSpeed;
  onSentenceComplete?: (text: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
};

export default function TextType({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    return Math.random() * (variableSpeed.max - variableSpeed.min) + variableSpeed.min;
  }, [variableSpeed, typingSpeed]);

  const currentText = textArray[currentTextIndex] ?? '';
  const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;
  const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < processedText.length || isDeleting);
  const currentTextColor = textColors.length ? textColors[currentTextIndex % textColors.length] : undefined;

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    gsap.set(cursorRef.current, { opacity: 1 });
    const tween = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    return () => {
      tween.kill();
    };
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: number | undefined;

    if (isDeleting) {
      if (displayedText === '') {
        if (currentTextIndex === textArray.length - 1 && !loop) return;

        onSentenceComplete?.(currentText, currentTextIndex);
        timeout = window.setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((previous) => (previous + 1) % textArray.length);
          setCurrentCharIndex(0);
        }, pauseDuration);
      } else {
        timeout = window.setTimeout(() => {
          setDisplayedText((previous) => previous.slice(0, -1));
        }, deletingSpeed);
      }
    } else if (currentCharIndex < processedText.length) {
      timeout = window.setTimeout(
        () => {
          setDisplayedText((previous) => previous + processedText[currentCharIndex]);
          setCurrentCharIndex((previous) => previous + 1);
        },
        currentCharIndex === 0 && displayedText === '' ? initialDelay : variableSpeed ? getRandomSpeed() : typingSpeed
      );
    } else if (textArray.length > 1 || loop) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    }

    return () => {
      if (timeout !== undefined) {
        window.clearTimeout(timeout);
      }
    };
  }, [
    currentCharIndex,
    currentText,
    currentTextIndex,
    deletingSpeed,
    displayedText,
    getRandomSpeed,
    initialDelay,
    isDeleting,
    isVisible,
    loop,
    onSentenceComplete,
    pauseDuration,
    processedText,
    textArray.length,
    typingSpeed,
    variableSpeed,
  ]);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap ${className}`,
      ...props,
    },
    createElement(
      'span',
      {
        style: { color: currentTextColor ?? 'inherit' },
      },
      displayedText
    ),
    showCursor &&
      createElement(
        'span',
        {
          ref: cursorRef,
          className: `ml-1 inline-block ${shouldHideCursor ? 'hidden' : ''} ${cursorClassName}`,
        },
        cursorCharacter
      )
  );
}
