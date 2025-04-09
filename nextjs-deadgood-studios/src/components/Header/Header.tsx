import Image from "next/image";
import Button from "./Button/Button";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-4 w-full relative">
      <div className="flex-1 flex justify-start z-40">
        <Button />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
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
          className="z-10"
        />
      </div>

      <div className="flex-1" />
    </div>
  );
}
