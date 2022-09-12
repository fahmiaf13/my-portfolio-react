const imgVariants = {
  hidden: {
    y: 500,
  },
  visible: {
    y: 0,
    transition: { type: "spring", duration: 1, delay: 2 },
  },
  exit: {
    y: 500,
    transition: { type: "spring", duration: 1, delay: 1 },
  },
};
const downVariants = {
  hidden: {
    y: 500,
  },
  visible: {
    y: 0,
    transition: { type: "spring", duration: 1, delay: 3 },
  },
  exit: {
    y: 500,
    transition: { type: "spring", duration: 1, delay: 0.5 },
  },
};
const upVariants = {
  hidden: {
    y: -600,
  },
  visible: {
    y: 0,
    transition: { type: "spring", duration: 1, delay: 3 },
  },
  exit: {
    y: -600,
    transition: { type: "spring", duration: 1, delay: 0.5 },
  },
};
const containerVariants = {
  hidden: {
    width: "0",
  },
  visible: {
    width: "100vw",
    transition: { type: "tween", duration: 1 },
  },
  exit: { width: "0", transition: { type: "tween", duration: 1, delay: 2 } },
};

export { containerVariants, upVariants, downVariants, imgVariants };
