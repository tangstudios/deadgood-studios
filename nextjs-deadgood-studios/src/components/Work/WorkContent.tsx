import WorkCards from "@/components/Work/WorkCards";
import { client } from "@/sanity/client";

type ProjectWithFeature = {
  _id: string;
  title: string;
  slug: { current: string };
  tags?: { _id: string; _type: string; name: string }[];
  featureMedia?: {
    _type: "image" | "file";
    assetUrl: string;
  } | null;
};

const PROJECTS_QUERY = `*[
  _type == "projects" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  tags[]->{_id, _type, name},
  featureMedia[0]{
    _type,
    "assetUrl": asset->url
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function WorkPage() {
  const projects = await client.fetch<ProjectWithFeature[]>(
    PROJECTS_QUERY,
    {},
    options
  );
  return <WorkCards projects={projects} />;
}
