"use client";
import { client } from "@/sanity/client";
import { useTagStore } from "@/store/useTagStore";
// import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Sidebar() {
  const { tags, activeTag, setTags, setActiveTag } = useTagStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    async function fetchTags() {
      const data = await client.fetch(
        `*[_type == "tags"] | order(name asc){_id, name}`
      );
      setTags(data);
    }
    fetchTags();
  }, [setTags]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveTag(null);
    }
  }, [pathname, setActiveTag]);

  const handleTagClick = (tagId: string) => {
    setActiveTag(tagId === activeTag ? null : tagId);
    router.push("/");
  };

  return (
    <aside
      className="isolate z-0 top-0 h-screen p-8
        before:absolute before:inset-0 before:bg-black/40 before:content-['']
        before:-z-10
      "
    >
      {/* <Image
        src="/sidebar-gradient.png"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover pointer-events-none select-none -z-20 object-[70%]"
      /> */}

      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-12">
            <nav className="flex flex-col whitespace-pre-line leading-tight">
              <div className="flex flex-col gap">
                <Link href="/">
                  <h2
                    className="text-[clamp(2rem,2.3vw,6rem)] capitalize transition-colors duration-500 hover:text-neutral-600 font-bold"
                    onClick={() => setActiveTag(null)}
                  >
                    Projects
                  </h2>
                </Link>

                {/* Tag buttons */}
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {tags.map((tag) => (
                    <button
                      key={tag._id}
                      onClick={() => handleTagClick(tag._id)}
                      className={`text-sm uppercase px-2 text-left transition-colors duration-300 border-[1px] rounded-full justify-center flex flex-col ${
                        activeTag === tag._id
                          ? "bg-white text-neutral-800"
                          : "text-neutral-500 hover:bg-white hover:text-neutral-800"
                      }`}
                    >
                      <h1 className="text-[clamp(1rem,1.5vw,1.1rem)] capitalize m-2">
                        {tag.name}
                      </h1>
                    </button>
                  ))}
                </div>

                <Link href="/about">
                  <h2 className="text-[clamp(2rem,2.3vw,6rem)] capitalize transition-colors duration-500 hover:text-neutral-600 font-bold">
                    About Us
                  </h2>
                </Link>
                <Link href="/dinkum">
                  <h2 className="text-[clamp(2rem,2.3vw,6rem)] capitalize transition-colors duration-500 hover:text-neutral-600 font-bold">
                    Dinkum
                  </h2>
                </Link>
              </div>
            </nav>

            {/* <h1 className="whitespace-pre-line leading-tight text-[clamp(1rem,1.5vw,1.1rem)] font-thin pr-8 gap-2 flex flex-col">
              Dead Good serves as the vital connection between our clients and
              their target audience, bridging the gap through effective
              communication.
            </h1> */}
          </div>
        </div>

        <footer className="mt-6">
          <div className="pt-6 flex flex-col gap-0 whitespace-pre-line leading-tight">
            <Link
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="block text-[clamp(1.5rem,1.6vw,6rem)] capitalize transition-colors duration-500 hover:text-neutral-600">
                Contact
              </h2>
            </Link>
            <Link
              href="https://www.instagram.com/deadgood.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="block text-[clamp(1.5rem,1.6vw,6rem)] capitalize transition-colors duration-500 hover:text-neutral-600">
                Instagram
              </h2>
            </Link>
            <Link
              href="https://vimeo.com/deadgood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="block text-[clamp(1.5rem,1.6vw,6rem)] capitalize transition-colors duration-500 hover:text-neutral-600">
                Vimeo
              </h2>
            </Link>
          </div>
        </footer>
      </div>
    </aside>
  );
}
