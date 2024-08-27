"use client";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { RevealProps } from "./Reveal.types";
import { useEffect } from "react";

export const fadeIn = (position: string, delay?: number) => ({
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.4,
      delay: delay || 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  hidden: {
    x: position === "right" ? 80 : position === "left" ? -80 : 0,
    y: position === "bottom" ? 80 : position === "top" ? -80 : 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.5,
      ease: [0.25, 0.25, 0.25, 0.25],
    },
  },
});

const Reveal = (props: RevealProps) => {
  const { children, position, className, delay } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={className}
        variants={fadeIn(position, delay)}
        initial="hidden"
        animate={controls}
        exit="hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
