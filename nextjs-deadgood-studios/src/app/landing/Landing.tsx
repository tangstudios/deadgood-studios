"use client";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex hp">
      <div className="w-[28%] max-h-screen sticky top-0 overflow-y-auto p-5  scrollbar-hide">
        <div className="flex flex-col gap-2">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={500}
            height={500}
            style={{
              objectFit: "contain",
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            className="z-10 bg-red"
          />
          <h2 className="text-5xl pt-8">WORK</h2>
          <h2 className="text-5xl">ABOUT</h2>
          <h2 className="text-5xl">DINKUM</h2>
          <h1 className="text-sm font-thin ">
            Dead Good serves as the vital connection between our clients and
            their target audience, bridging the gap through effective
            communication.
          </h1>
        </div>
      </div>
      <div className="flex-1  bg-blue-800 p-5 scrollbar-hide">
        <div></div>
      </div>
    </div>
  );
}
