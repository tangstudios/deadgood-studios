"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./Button/Button";

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between w-full absolute p-2">
      <div className="flex-1 flex justify-start z-40">
        <Button />
      </div>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => router.push("/")}
      >
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
      </div>

      <div className="flex-1" />
    </div>
  );
}
