"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}: TypewriterTextProps) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const totalChars = text.length;

  // Start after delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  // Typing interval
  useEffect(() => {
    if (!started || done) return;

    intervalRef.current = setInterval(() => {
      setDisplayedCount((prev) => {
        const next = prev + 1;
        if (next >= totalChars) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return totalChars;
        }
        return next;
      });
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started, done, speed, totalChars]);

  // Fire onComplete once done
  const handleComplete = useCallback(() => {
    if (!done) {
      setDone(true);
      onCompleteRef.current?.();
    }
  }, [done]);

  useEffect(() => {
    if (displayedCount >= totalChars && started) {
      handleComplete();
    }
  }, [displayedCount, totalChars, started, handleComplete]);

  return (
    <span
      className={`font-mono inline-block ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">
        {text.slice(0, displayedCount)}
      </span>
      {/* Blinking cursor — disappears after typing */}
      {!done && started && (
        <span
          className="inline-block w-[2px] h-[1.1em] bg-[var(--text-primary)] align-text-bottom ml-[1px]"
          style={{
            animation: "blink 0.7s step-end infinite",
          }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
