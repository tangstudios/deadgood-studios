import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className=" sticky top-0 h-screen">
      <div className="flex h-full flex-col pl-8 pt-8 pb-8">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={100}
            height={100}
            priority
            className="cursor-pointer"
          />
        </Link>
        {/* TOP: scrollable area only */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="pt-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              <Link href="/work">
                <h2 className="block text-6xl uppercase transition-colors duration-500 hover:text-neutral-600">
                  Work
                </h2>
              </Link>
              <Link href="/about">
                <h2 className="block text-6xl uppercase transition-colors duration-500 hover:text-neutral-600">
                  About
                </h2>
              </Link>
              <Link href="/dinkum">
                <h2 className="block text-6xl uppercase transition-colors duration-500 hover:text-neutral-600 ">
                  Dinkum
                </h2>
              </Link>
            </nav>
            <h1 className="text-xl font-thin">
              Dead Good serves as the vital connection between our clients and
              their target audience, bridging the gap through effective
              communication.
            </h1>
          </div>
        </div>

        {/* FOOTER: pinned to bottom */}
        <footer className="mt-6">
          <div className="pr-8">
            <div className="border-t-2 border-neutral-400" />
          </div>
          <div className="pt-6 flex flex-col gap-3">
            <Link
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="block text-4xl uppercase transition-colors duration-500 hover:text-neutral-600">
                Contact
              </h2>
            </Link>
            <Link
              href="https://www.instagram.com/deadgood.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="block text-4xl uppercase transition-colors duration-500 hover:text-neutral-600">
                Instagram
              </h2>
            </Link>
            <Link
              href="https://vimeo.com/deadgood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="block text-4xl uppercase transition-colors duration-500 hover:text-neutral-600">
                Vimeo
              </h2>
            </Link>
          </div>
        </footer>
      </div>
    </aside>
  );
}
