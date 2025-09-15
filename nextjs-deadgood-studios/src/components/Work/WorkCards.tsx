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
    <div className="grid grid-cols-1 xl:grid-cols-2">
      {projects.map((project) => (
        <div key={project._id} className="relative h-[50vh]">
          <Link href={`/work/${project.slug.current}`}>
            {project.featureMedia?._type === "image" ? (
              <Image
                src={project.featureMedia.assetUrl}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
            ) : project.featureMedia?._type === "file" ? (
              <VideoCard
                src={project.featureMedia.assetUrl}
                title={project.title}
              />
            ) : null}
            <div className="absolute bottom-2 left-2 text-white">
              <h3 className="normal-case text-md font-regular">
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
  // const [muted, setMuted] = useState(true);

  return (
    <video
      src={src}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      // muted={muted}
      playsInline
      // onMouseEnter={() => setMuted(false)}
      // onMouseLeave={() => setMuted(true)}
      aria-label={title}
    />
  );
}
