"use client";

interface RedTapeProps {
  text?: string;
  className?: string;
}

export default function RedTape({ text, className = "" }: RedTapeProps) {
  return (
    <div
      className={`red-tape relative w-full my-8 ${className}`}
      role="separator"
      aria-label={text ?? "Section divider"}
    >
      {text && (
        <span className="block text-center select-none">{text}</span>
      )}
      {!text && (
        /* Empty tape — still renders as a visual separator */
        <span className="block h-2" aria-hidden="true" />
      )}
    </div>
  );
}
