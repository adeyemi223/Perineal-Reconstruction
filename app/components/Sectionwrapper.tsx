"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom";
};

export default function SectionWrapper({
  children,
  direction = "up",
}: SectionWrapperProps) {
  // Offset for hidden position
  const hiddenX = direction === "left" ? -100 : direction === "right" ? 100 : 0;
  const hiddenY = direction === "up" ? 100 : direction === "down" ? -100 : 0;

  return (
    <motion.section
      initial={{
        opacity: 0,
        x: direction !== "zoom" ? hiddenX : 0,
        y: direction !== "zoom" ? hiddenY : 0,
        scale: direction === "zoom" ? 0.8 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
