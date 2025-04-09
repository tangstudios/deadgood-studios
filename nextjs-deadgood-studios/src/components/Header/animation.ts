export const menuSlide = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: -80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0 * i },
  }),
  exit: (i: number) => ({
    x: -80,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0 * i },
  }),
};
