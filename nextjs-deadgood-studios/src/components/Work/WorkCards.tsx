"use client";
import Image from "next/image";
import Link from "next/link";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  featureMedia?: { _type: "image" | "file"; assetUrl: string } | null;
};

interface WorkProps {
  projects: Project[];
}

const WorkCards: React.FC<WorkProps> = ({ projects }) => {
  if (!projects) return null;

  return (
    <div className="grid grid-cols-1 [@media(min-width:1200px)]:grid-cols-2">
      {projects.map((project) => (
        <div key={project._id} className="relative overflow-hidden h-[50vh]">
          <Link href={`/work/${project.slug.current}`}>
            {project.featureMedia?._type === "image" ? (
              <Image
                src={project.featureMedia.assetUrl}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
            ) : project.featureMedia?._type === "file" ? (
              <video
                src={project.featureMedia.assetUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : null}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="capitalize text-lg font-semibold">
                {project.title}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
