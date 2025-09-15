import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-[28%] max-h-screen sticky top-0 overflow-y-auto scrollbar-hide p-8">
      <div className="flex flex-col gap-2">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={80}
          height={80}
          className="z-10"
          priority
        />
        <nav className="pt-10 space-y-2">
          <Link className="block text-5xl uppercase" href="/work">
            Work
          </Link>
          <Link className="block text-5xl uppercase" href="/about">
            About
          </Link>
          <Link className="block text-5xl uppercase" href="/dinkum">
            Dinkum
          </Link>
        </nav>
        <p className="text-xl font-thin pt-6">
          Dead Good serves as the vital connection between our clients and their
          target audience, bridging the gap through effective communication.
        </p>
      </div>
    </aside>
  );
}
