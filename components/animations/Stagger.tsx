"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function StaggerContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}