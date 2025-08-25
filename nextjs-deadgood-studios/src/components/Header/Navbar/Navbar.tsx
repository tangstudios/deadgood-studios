import { motion } from "framer-motion";
import Image from "next/image";
import { menuSlide } from "../animation";
import CustomLink from "../Link/Link";
import styles from "./navbar.module.scss";

interface NavbarProps {
  onClick?: () => void;
}

const NavBar: React.FC<NavbarProps> = ({ onClick }) => {
  const navItems = [
    { title: "Work", href: "/work" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Dinkum", href: "/dinkum" },
  ];

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          {navItems.map((item, index) => {
            return (
              <CustomLink
                key={index}
                data={{ ...item, index }}
                onClick={onClick}
              />
            );
          })}
        </div>
        <div className={styles.navbarFooter}>
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/vimeo-white-icon.svg"
              alt="Vimeo"
              height={24}
              width={24}
            />
          </a>
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/instagram-white-icon.svg"
              alt="Instagram"
              height={24}
              width={24}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
