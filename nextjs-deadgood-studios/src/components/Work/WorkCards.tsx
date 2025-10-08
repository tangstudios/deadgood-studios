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

const mediaHover =
  "absolute inset-0 w-full h-full object-cover transform-gpu transition duration-500 ease-in-out " +
  "group-hover:scale-105 group-hover:blur-[4px] will-change-transform [will-change:filter]";

const WorkCards: React.FC<WorkProps> = ({ projects }) => {
  if (!projects) return null;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 bg-black">
      {projects.map((project) => (
        <div
          key={project._id}
          className="group relative h-[50vh] overflow-hidden bg-black"
        >
          <Link href={`/work/${project.slug.current}`} className="block h-full">
            {project.featureMedia?._type === "image" ? (
              <Image
                src={project.featureMedia.assetUrl}
                alt={project.title}
                fill
                className={mediaHover + " pointer-events-none select-none"}
              />
            ) : project.featureMedia?._type === "file" ? (
              <VideoCard
                src={project.featureMedia.assetUrl}
                title={project.title}
              />
            ) : null}

            <div className="absolute bottom-2 left-2 text-white z-10">
              <h3 className="normal-case text-md font-regular opacity-80">
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

function VideoCard({ src, title }: { src: string; title: string }) {
  return (
    <video
      src={src}
      className={mediaHover}
      autoPlay
      loop
      muted
      playsInline
      aria-label={title}
    />
  );
}
