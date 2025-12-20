import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  delay?: number;
  /** transition duration in ms (default 700) */
  duration?: number;
  /** rootMargin for IntersectionObserver (default '0px 0px -50px 0px') */
  offset?: string;
  /** whether to animate only once (default true) */
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  offset = '0px 0px -50px 0px',
  once = true,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once && observer && entry.target) {
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, offset, once]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fade-left':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'fade-right':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        case 'fade':
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
