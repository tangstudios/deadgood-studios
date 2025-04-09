import { motion } from "framer-motion";
import { menuSlide } from "../animation";
import CustomLink from "../Link/Link";
import styles from "./navbar.module.scss";

interface NavbarProps {
  onClick: () => void;
}

const NavBar: React.FC<NavbarProps> = ({ onClick }) => {
  const navItems = [
    { title: "Work", href: "/work" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
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
      </div>
    </motion.div>
  );
};

export default NavBar;
