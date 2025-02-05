"use client";
import { motion, useInView } from "framer-motion";
import { JSX, useRef } from "react";

const footerHeight = 500;

export default function Footer() {
  return (
    <div
      style={{
        height: `${footerHeight}px`,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
      className="bg-black"
    >
      <div
        style={{ height: `calc(100vh + ${footerHeight}px)`, top: "-100vh" }}
        className="relative"
      >
        <div
          style={{
            height: `${footerHeight}px`,
            top: `calc(100vh - ${footerHeight}px)`,
          }}
          className="sticky flex flex-col justify-center text-[10vmin] text-white"
        >
          <AnimatedText text="Hey! Get in touch?" />
          <AnimatedText text="Contact" />
          <a
            className="hover:text-gray-400"
            href="mailto:hi@deadgood.studio"
            target="_blank"
          >
            <AnimatedText text="hi@deadgood.studio" />
          </a>
        </div>
      </div>
    </div>
  );
}

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
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

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = "p",
  className,
  once = true,
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
