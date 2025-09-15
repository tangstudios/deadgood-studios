"use client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface WorkProps {
  projects: (SanityDocument & { imageUrl: string })[];
}

const WorkCards: React.FC<WorkProps> = ({ projects }) => {
  if (!projects) return null;

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <Link href={`/work/${project.slug.current}`}>
            <div className="relative overflow-hidden h-[100vh]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
              <div className="text-white">
                <h3 className="capitalise mb-5">{project.title}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
