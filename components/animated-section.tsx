"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function AnimatedSection({
  id,
  className,
  children,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out scroll-mt-20",
        isVisible
          ? "opacity-100 translate-y-0 blur-none"
          : "opacity-0 translate-y-10 blur-sm",
        className,
      )}
    >
      {children}
    </section>
  );
}
