"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./button.module.scss";

export default function Button() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Navbar onClick={() => setIsActive(!isActive)} />}
      </AnimatePresence>
    </div>
  );
}
