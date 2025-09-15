import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <aside className="max-h-screen sticky top-0 p-4">
      <div className="flex flex-row justify-between items-center gap-12">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={50}
            height={50}
            priority
            className="cursor-pointer"
          />
        </Link>
        <h1 className="text-xl">Menu</h1>
      </div>
    </aside>
  );
}
