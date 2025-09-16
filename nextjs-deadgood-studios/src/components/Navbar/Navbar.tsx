import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <aside className="max-h-screen sticky top-0 p-8">
      <div className="flex flex-row justify-between items-center">
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
        <h1 className="text-lg">Menu</h1>
      </div>
    </aside>
  );
}
