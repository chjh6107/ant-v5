import { ReactNode, useEffect, useRef } from "react";
import useUpdateTitle from "src/hooks/useUpdateTitle";

const ScrollSmoothAdv = ({ children }: { children: ReactNode }) => {
  useUpdateTitle("scrollSmooth Lab");

  const ref = useRef<HTMLDivElement>(null);

  const onScroll = (e: WheelEvent) => {
    e.preventDefault();
  };

  return <div ref={ref}>{children}</div>;
};
export default ScrollSmoothAdv;
