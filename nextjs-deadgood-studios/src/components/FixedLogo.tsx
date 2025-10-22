"use client";

import Image from "next/image";
import Link from "next/link";

export default function FixedLogo() {
  return (
    <Link
      href="/"
      className="hidden lg:block fixed p-8 right-0 z-50 hover:opacity-80 transition-opacity duration-300"
    >
      <Image
        src="/logo.jpg"
        alt="Dead Good Studios Logo"
        width={0} // let CSS control actual size
        height={0}
        sizes="(max-width: 768px) 50px, (max-width: 1024px) 80px, 100px"
        className="cursor-pointer w-[clamp(50px,10vw,100px)] h-auto"
        priority
      />
    </Link>
  );
}
