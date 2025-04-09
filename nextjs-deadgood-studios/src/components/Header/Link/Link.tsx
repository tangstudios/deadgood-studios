import { motion } from "framer-motion";
import Link from "next/link";
import { slide } from "../animation";

interface CustomLinkProps {
  data: {
    title: string;
    href: string;
    index?: number;
  };
}

const CustomLink: React.FC<CustomLinkProps> = ({ data }) => {
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <Link href={data.href}>
        <h1 className="hover:text-[#bfbfbf] outline-none">{data.title}</h1>
      </Link>
    </motion.div>
  );
};

export default CustomLink;
