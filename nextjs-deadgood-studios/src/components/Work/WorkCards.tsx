"use client";
import { motion } from "framer-motion";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface WorkProps {
  projects: (SanityDocument & { imageUrl: string })[];
}

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

const Work: React.FC<WorkProps> = ({ projects }) => {
  if (!projects) return null;

  return (
    <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
      {projects.map((project, index) => (
        <motion.div
          className="break-inside-avoid py-4"
          key={project._id}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          custom={index}
        >
          <Link href={`/work/${project.slug.current}`}>
            <div className="relative group overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                priority
                width={1000}
                height={1000}
                style={{ objectFit: "cover" }}
                className="transition-transform duration-1000 group-hover:scale-105 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-300" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h2 className="uppercase">{project.title}</h2>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Work;
