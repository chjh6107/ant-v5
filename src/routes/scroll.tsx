import { useRef } from "react";
import ScrollSmoothAdv from "src/components/scroll-smooth-adv";

const ScrollPage = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const onClickChildren = () => {
    alert("childrenEvent");
  };

  return (
    <ScrollSmoothAdv duration={1000}>
      <div className="bg-red-500 w-full h-[50vh] grid place-items-center " />
      {/* <div className="bg-red-500 w-full h-[50vh] grid place-items-center ">
        <button
          ref={ref}
          onClick={() => onClickChildren()}
          onBlur={() => alert("blur!")}
          onMouseLeave={() => alert("leave")}
          className="pointer-events-none cursor-pointer bg-white w-[200px] h-[200px]"
        >
          <div>I'm Children</div>
          hihihihihihi
        </button>
        <button
          className=""
          onClick={() => {
            alert("");
          }}
        >
          hey
        </button>
      </div> */}
      <div className="bg-violet-500 w-full h-[50vh]" />
      <div className="bg-sky-500 w-full h-[50vh]" />
      <div className="bg-emerald-500 w-full h-[50vh]" />
      <div className="bg-amber-500 w-full h-[50vh]" />
      <div className="bg-yellow-500 w-full h-[50vh]" />
      <div className="bg-lime-500 w-full h-[50vh]" />
      <div className="bg-indigo-500 w-full h-[50vh]" />
      <div className="bg-green-500 w-full h-[50vh]" />
      <div className="bg-slate-500 w-full h-[50vh]" />
      <div className="bg-cyan-500 w-full h-[50vh]" />
      <div className="bg-blue-500 w-full h-[50vh]" />
      <div className="bg-orange-500 w-full h-[50vh]" />
      <div className="bg-teal-500 w-full h-[50vh]" />
    </ScrollSmoothAdv>
  );
};
export default ScrollPage;
