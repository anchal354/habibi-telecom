"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function HoverCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}