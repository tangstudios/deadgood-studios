"use client";
import { motion } from "framer-motion";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import type { Tags } from "../../../../studio-deadgood-studios/sanity.types";

interface HomepageFeatureProjectsProps {
  projects: (SanityDocument & { imageUrl: string })[];
}

const HomepageFeatureProjects: React.FC<HomepageFeatureProjectsProps> = ({
  projects,
}) => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 35 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.04 * index, duration: 0.5 },
    }),
  };

  const drawAnimationVariants = {
    initial: { scaleX: 0, originX: 0 },
    animate: { scaleX: 1, transition: { duration: 0.2, east: "eastInOut" } },
  };

  if (!projects) return null;

  return (
    <div className="columns-1 gap-1 sm:columns-2 lg:columns-3">
      {projects.map((project, index) => (
        <motion.div
          className="break-inside-avoid"
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
          <motion.div
            whileHover={{ scale: 1.03 }}
            animate={{ transition: { duration: 0.5 } }}
          >
            <Link href={`/${project.slug.current}`}>
              <Image
                src={project.imageUrl}
                alt="img"
                priority
                width={1000}
                height={1000}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </motion.div>
          <div className="flex py-1 justify-between items-center">
            <Link href={`/${project.slug.current}`}>
              <h2 className="text-xl font-semibold hover:text-gray-300">
                {project.title}
              </h2>
            </Link>
            <motion.div
              className="flex-grow mx-1 border-t border-black"
              variants={drawAnimationVariants}
              initial="initial"
              animate="animate"
              whileInView="animate"
              viewport={{ once: true }}
            />
            {project.tags.map((tag: Tags, index: number) => (
              <motion.div
                key={tag._id}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                custom={index * 2}
              >
                <button className="border-black border px-3 rounded-full hover:bg-black hover:text-white font-mono">
                  <p className="text-sm">{tag.name}</p>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomepageFeatureProjects;
