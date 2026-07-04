"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export function InteractiveCard({ children, className }: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 22, mass: 0.6 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
