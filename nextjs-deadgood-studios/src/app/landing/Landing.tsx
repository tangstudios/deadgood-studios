import Image from "next/image";

export default function Landing() {
  return (
    <div className="h-[100vh]">
      <Image
        src="/sample-landing-image.jpg"
        alt="Landing"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
