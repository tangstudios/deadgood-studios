import { motion } from "framer-motion";
import { menuSlide } from "../animation";
import CustomLink from "../Link/Link";
import styles from "./navbar.module.scss";

export default function Navbar() {
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
            return <CustomLink key={index} data={{ ...item, index }} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}
