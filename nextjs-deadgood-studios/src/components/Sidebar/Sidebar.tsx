import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className=" sticky top-0 h-screen p-8">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-8">
            <nav className="flex flex-col whitespace-pre-line leading-tight">
              <Link href="/">
                <h2 className="text-[clamp(2rem,3vw,6rem)] uppercase transition-colors duration-500 hover:text-neutral-600">
                  Work
                </h2>
              </Link>
              <Link href="/about">
                <h2 className="text-[clamp(2rem,3vw,5rem)] uppercase transition-colors duration-500 hover:text-neutral-600">
                  About
                </h2>
              </Link>
              <Link href="/dinkum">
                <h2 className="text-[clamp(2rem,3vw,6rem)] uppercase transition-colors duration-500 hover:text-neutral-600 ">
                  Dinkum
                </h2>
              </Link>
            </nav>
            <h1 className="whitespace-pre-line leading-tight text-[clamp(1rem,1.5vw,1.1rem)] font-thin pr-8">
              Dead Good serves as the vital connection
              <br />
              <br /> between our clients and their target audience,
              <br />
              <br />
              bridging the gap through effective communication.
            </h1>
          </div>
        </div>

        {/* FOOTER: pinned to bottom */}
        <footer className="mt-6">
          <div className="pr-8">
            <div className="border-t-2 border-neutral-400" />
          </div>
          <div className="pt-6 flex flex-col gap-3 whitespace-pre-line leading-tight">
            <Link
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="block text-[clamp(1.5rem,1.8vw,6rem)] uppercase transition-colors duration-500 hover:text-neutral-600">
                Contact
              </h2>
            </Link>
            <Link
              href="https://www.instagram.com/deadgood.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="block text-[clamp(1.5rem,1.8vw,6rem)] uppercase transition-colors duration-500 hover:text-neutral-600">
                Instagram
              </h2>
            </Link>
            <Link
              href="https://vimeo.com/deadgood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="block text-[clamp(1.5rem,1.8vw,6rem)] uppercase transition-colors duration-500 hover:text-neutral-600">
                Vimeo
              </h2>
            </Link>
          </div>
        </footer>
      </div>
    </aside>
  );
}
