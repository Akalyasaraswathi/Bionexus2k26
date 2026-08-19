"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type TransitionVariant = "left" | "right" | "up" | "shutter";

type Props = {
  children: ReactNode;
  variant?: TransitionVariant;
  id?: string;
  className?: string;
};

export default function ScrollTransition({
  children,
  variant = "left",
  id,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.16,
        rootMargin: "-5% 0px -8% 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`page-transition page-transition-${variant} ${
        visible ? "page-transition-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
