import AnimateText from "@/components/animate-text/AnimateText";
import HomepageFeatureProjects from "@/components/homepage-feature-project/HomepageFeatureProjects";
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

export default async function HomePage() {
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
    <div>
      <h1 className="text-[20vmin] font-bold font-serif pb-3">
        <AnimateText text="Projects" />
      </h1>
      <HomepageFeatureProjects projects={projectsWithImageUrls} />
    </div>
  );
}
