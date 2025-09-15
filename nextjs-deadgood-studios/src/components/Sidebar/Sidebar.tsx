import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="max-h-screen sticky top-0 overflow-y-auto scrollbar-hide p-8">
      <div className="flex flex-col gap-12">
        <Image src="/logo.jpg" alt="logo" width={100} height={100} priority />
        <nav className="flex flex-col gap-4">
          <Link href="/work">
            <h2 className="block text-4xl uppercase">Work</h2>
          </Link>
          <Link href="/about">
            <h2 className="block text-4xl uppercase">About</h2>
          </Link>
          <Link href="/dinkum">
            <h2 className="block text-4xl uppercase">Dinkum</h2>
          </Link>
        </nav>
        <h1 className="text-xl font-thin">
          Dead Good serves as the vital connection between our clients and their
          target audience, bridging the gap through effective communication.
        </h1>
      </div>
    </aside>
  );
}
