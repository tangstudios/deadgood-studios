"use client";

import WorkCards from "@/components/Work/WorkCards";
import { client } from "@/sanity/client";
import { useTagStore } from "@/store/useTagStore";
import { useEffect, useState } from "react";

type ProjectWithFeature = {
  _id: string;
  title: string;
  slug: { current: string };
  tags?: { _id: string; name: string }[];
  featureMedia?: {
    _type: "image" | "file";
    assetUrl: string;
  } | null;
};

export default function WorkPage() {
  const { activeTag } = useTagStore();
  const [projects, setProjects] = useState<ProjectWithFeature[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await client.fetch<ProjectWithFeature[]>(`*[
        _type == "projects" && defined(slug.current)
      ]|order(publishedAt desc){
        _id, title, slug,
        tags[]->{_id, name},
        featureMedia[0]{_type, "assetUrl": asset->url}
      }`);
      setProjects(data);
    }
    fetchProjects();
  }, []);

  const filteredProjects =
    activeTag === null
      ? projects
      : projects.filter((p) => p.tags?.some((t) => t._id === activeTag));

  return <WorkCards projects={filteredProjects} />;
}
