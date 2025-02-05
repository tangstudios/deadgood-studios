import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { type Tags } from "../../../../studio-deadgood-studios/sanity.types";

const builder = imageUrlBuilder(client);

const urlFor = (source: string) => {
  return builder.image(source);
};

const PROJECTS_QUERY = `*[
  _type == "projects"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, image, tags[]->{_id, _type, name}, slug}`;

const options = { next: { revalidate: 30 } };

export default async function HomePage() {
  const projects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    options
  );

  return (
    <div className="px-1">
      <h1 className="text-8xl font-bold sticky top-0">Projects</h1>
      <div className="columns-1 gap-1 sm:columns-2 lg:columns-3">
        {projects.map((project) => (
          <div className="break-inside-avoid" key={project._id}>
            <Link href={`/${project.slug.current}`}>
              <Image
                src={urlFor(project.image).url()}
                alt="img"
                priority
                width={1000}
                height={1000}
                style={{ objectFit: "cover" }}
              />
            </Link>
            <div className="flex py-1 justify-between items-center">
              <Link href={`/${project.slug.current}`}>
                <h2 className="text-xl font-semibold hover:text-gray-300">
                  {project.title}
                </h2>
              </Link>
              <div className="flex-grow mx-1 border-t border-black" />
              {project.tags.map((tag: Tags) => (
                <button
                  key={tag._id}
                  className="border-black border px-3 rounded-full hover:bg-black hover:text-white font-mono"
                >
                  <p className="text-sm">{tag.name}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
