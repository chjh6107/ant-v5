import { FC, ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
}

/** 스크롤 smooth */
const ScrollSmooth = ({ children }: Props) => {
  // const scrollRef = useRef<HTMLDivElement>(null);

  // const onScroll = (e: WheelEvent) => {
  //   e.preventDefault(); //scroll 막기
  //   const target = document.scrollingElement;

  //   if (target) {
  //     let yPos = target.scrollTop; //마우스 이동량
  //     const speed = 1.5; //마우스 속도

  //     let start = 0;
  //     var easing = (t: number) => {
  //       return t * (2 - t);
  //     };

  //     window.requestAnimationFrame(function step(timestamp) {
  //       if (!start) start = timestamp;
  //       let time = timestamp - start;

  //       const duration = 400; /// 부드럽게 이동하는 정도
  //       let percent = Math.min(time / duration, 1);
  //       percent = easing(percent);

  //       percent > 0 && window.scrollTo(0, e.deltaY * speed * percent + yPos);

  //       if (time < duration) {
  //         window.requestAnimationFrame(step);
  //       }
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const target = document.body;
  //   target?.addEventListener("wheel", onScroll, { passive: false });
  //   return () =>
  //     target?.addEventListener("wheel", onScroll, { passive: false });
  // }, []);

  // return <div ref={scrollRef}>{children}</div>;
  return <div>{children}</div>;
};

export default ScrollSmooth;
