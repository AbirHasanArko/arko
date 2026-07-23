'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  className,
  as: Tag = 'div',
  once = true,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] || motion.div;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}