import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  target: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ target, duration = 3000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const startTime = useRef<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView || hasAnimated) return;

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const progressRatio = Math.min(progress / duration, 1);
      const current = Math.floor(progressRatio * target);
      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
        setHasAnimated(true);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target, duration, hasAnimated]);

  return (
    <span className='font-poppins font-semibold text-6xl' ref={ref}>
      {count.toLocaleString()}
    </span>
  );
};

export default CountUp;
