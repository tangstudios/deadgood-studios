"use client";

import Landing from "./landing/Landing";

export default function Index() {
  return (
    <div className="">
      <div className="fixed top-1/2 right-12 -translate-y-1/2 z-10 flex flex-col gap-8"></div>
      <div>
        <Landing />
      </div>
      {/* <div className="h-[100vh] justify-center items-center flex bg-[#ededed] p-10">
        <h1 className="text-7xl text-[#595959]">
          Deadgood Studio mission statement
        </h1>
      </div>
      <div className="h-[100vh] relative">
        <Image
          src="/sample-picture-1.jpg"
          alt="Sample"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="h-[100vh] justify-center items-center flex">
        <h1 className="text-7xl">A meaningful quote goes here</h1>
      </div> */}
    </div>
  );
}
