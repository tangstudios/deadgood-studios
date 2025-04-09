import Work from "@/components/Work/WorkCards";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { type SanityDocument } from "next-sanity";

const builder = imageUrlBuilder(client);

const urlFor = (source: string) => {
  return builder.image(source);
};

const PROJECTS_QUERY = `*[
  _type == "projects"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, image, tags[]->{_id, _type, name}, slug}`;

const options = { next: { revalidate: 30 } };

export default async function WorkPage() {
  const projects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    options
  );

  const projectsWithImageUrls = projects.map((project: SanityDocument) => ({
    ...project,
    imageUrl: urlFor(project.image).url(),
  }));

  return (
    <div className="p-8 pt-32">
      <h1>WORK</h1>
      <Work projects={projectsWithImageUrls} />
    </div>
  );
}
