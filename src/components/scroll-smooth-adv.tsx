import { ReactNode, useEffect, useRef } from "react";
import useUpdateTitle from "src/hooks/useUpdateTitle";

interface Props {
  children: ReactNode;
  duration: number;
}
const ScrollSmoothAdv = ({ children, duration }: Props) => {
  useUpdateTitle("scrollSmooth Lab");
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = (e: WheelEvent) => {
    e.preventDefault();
  };

  const smoothScroll = () => {
    if (ref.current) {
      const pos = ref.current;
      const targetPosition = pos?.getBoundingClientRect().top;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (
        timeElapsed: number,
        startPosition: number,
        distance: number,
        duration: number
      ) => {
        timeElapsed /= duration / 2;
        if (timeElapsed < 1)
          return (distance / 2) * timeElapsed * timeElapsed + startPosition;
        timeElapsed--;
        return (
          (-distance / 2) * (timeElapsed * (timeElapsed - 2) - 1) +
          startPosition
        );
      };

      requestAnimationFrame(animation);
    }
  };

  useEffect(() => {
    const target = document.body;
    target.addEventListener("scroll", smoothScroll);
  }, []);

  return <div ref={ref}>{children}</div>;
};
export default ScrollSmoothAdv;
