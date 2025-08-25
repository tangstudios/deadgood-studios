import { motion } from "framer-motion";
import Link from "next/link";
import { slide } from "../animation";

interface CustomLinkProps {
  data: {
    title: string;
    href: string;
    index?: number;
  };
  onClick: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({ data, onClick }) => {
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <Link href={data.href} onClick={onClick}>
        <h2 className="hover:text-[#bfbfbf] outline-none">{data.title}</h2>
      </Link>
    </motion.div>
  );
};

export default CustomLink;
