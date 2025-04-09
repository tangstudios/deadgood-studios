"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Landing from "./landing/Landing";

export default function Index() {
  const sectionRef0 = useRef(null);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  const inView0 = useInView(sectionRef0, { amount: 0.5 });
  const inView1 = useInView(sectionRef1, { amount: 0.5 });
  const inView2 = useInView(sectionRef2, { amount: 0.5 });

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const inViews = [inView0, inView1, inView2];
    const index = inViews.findIndex(Boolean);
    if (index !== -1 && index !== currentPage) {
      setCurrentPage(index);
    }
  }, [inView0, inView1, inView2, currentPage]);

  return (
    <div className="">
      <div className="fixed top-1/2 right-12 -translate-y-1/2 z-10 flex flex-col gap-8">
        {[0, 1, 2].map((i) => {
          const isActive = currentPage === i;
          const isOnLightSection = currentPage === 1;

          return (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                isActive
                  ? isOnLightSection
                    ? "bg-black ring-2 ring-black ring-offset-4 ring-offset-[#ededed]"
                    : "bg-white ring-2 ring-white ring-offset-4 ring-offset-black"
                  : isOnLightSection
                    ? "bg-[#a3a3a3]"
                    : "bg-white"
              }`}
            />
          );
        })}
      </div>
      <div ref={sectionRef0}>
        <Landing />
      </div>
      <div
        ref={sectionRef1}
        className="h-[100vh] justify-center items-center flex bg-[#ededed] p-10"
      >
        <h1 className="text-7xl text-[#595959]">
          Deadgood Studio mission statement
        </h1>
      </div>
      <div
        ref={sectionRef2}
        className="h-[100vh] justify-center items-center flex"
      >
        <h1 className="text-7xl">A meaningful quote goes here</h1>
      </div>
    </div>
  );
}
