"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Member = {
  _id: string;
  teamMemberName: string;
  yearOfBirth?: number;
  origin?: string;
  bio?: string;
  photo?: { asset?: { url?: string } };
};

export default function TeamCarousel({ members }: { members: Member[] }) {
  const [index, setIndex] = useState(0);
  const count = members.length;

  useEffect(() => {
    setIndex(0);
  }, [members]);

  const go = useCallback(
    (delta: number) => {
      if (!count) return;
      setIndex((i) => (i + delta + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!count) return null;

  const member = members[index];

  return (
    <>
      <section
        role="region"
        aria-label="Team members carousel"
        className="relative w-full flex justify-center pb-24"
      >
        <div className="relative flex items-center justify-center w-full max-w-3xl md:w-[70%] lg:w-[60%]">
          <div className="flex flex-col items-center text-center gap-4 w-full">
            <div className="flex flex-col items-center md:bg-[#d2d3d5] p-8 md:p-12 gap-4 min-h-[400px] justify-center">
              <h2 className="text-3xl md:text-5xl uppercase md:text-black">
                {member.teamMemberName}
              </h2>

              <div className="flex flex-row justify-center gap-1">
                {member.yearOfBirth && (
                  <h1 className="text-sm md:text-neutral-700">
                    Born {member.yearOfBirth}
                  </h1>
                )}
                {member.origin && (
                  <h1 className="text-sm md:text-neutral-700">
                    {" "}
                    | {member.origin}
                  </h1>
                )}
              </div>

              {member.bio && (
                <h3 className="text-sm md:text-black max-w-prose">
                  {member.bio}
                </h3>
              )}
            </div>

            {member.photo?.asset?.url && (
              <div className="relative w-40 h-40 mt-6">
                <Image
                  src={member.photo.asset.url}
                  alt={member.teamMemberName}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            )}
          </div>

          {/* Arrows (closer to box) */}
          <button
            type="button"
            aria-label="Previous member"
            onClick={() => go(-1)}
            className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 py-2 text-5xl text-white hover:text-neutral-400 transition-colors duration-300"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next member"
            onClick={() => go(1)}
            className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 py-2 text-5xl text-white hover:text-neutral-400 transition-colors duration-300"
          >
            ›
          </button>
        </div>
      </section>

      <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+20px)] w-full flex justify-center">
        <div className="w-full max-w-3xl md:w-[70%] lg:w-[60%] flex justify-center gap-2 z-50">
          {members.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active}
                className={`h-3 w-3 rounded-full transition-all duration-300 outline-none
                  ${active ? "bg-neutral-50 opacity-100" : "bg-neutral-400 opacity-70 hover:opacity-90"}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
