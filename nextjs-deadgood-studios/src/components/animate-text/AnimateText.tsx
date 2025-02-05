"use client";
import { motion, useInView } from "framer-motion";
import { JSX, useRef } from "react";

interface AnimateTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  rotateOnHover?: boolean;
}

const defaultAnimations = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.01 * index, duration: 0.3 },
  }),
};

const AnimateText: React.FC<AnimateTextProps> = ({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  rotateOnHover = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: once });
  const textArray = Array.isArray(text) ? text : [text];

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span ref={ref} aria-hidden>
        {textArray.map((line: string, index) => (
          <span key={index} className="block">
            {line.split(" ").map((word, index) => (
              <span key={index} className="inline-block">
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={defaultAnimations}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={index}
                    whileHover={
                      rotateOnHover
                        ? { scale: 1.3, color: "grey", rotate: 10 }
                        : ""
                    }
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimateText;
