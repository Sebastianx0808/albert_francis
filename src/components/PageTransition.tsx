import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className = '' }) => {
  // Memoized animation settings to prevent recalculations
  const pageVariants = React.useMemo(() => ({
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  }), []);

  const pageTransition = React.useMemo(() => ({
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  }), []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={`min-h-screen pt-20 ${className}`}
      // Performance optimizations
      layoutId="page-transition"
      layout="position"
    >
      {children}
    </motion.div>
  );
};

// Prevent unnecessary re-renders
export default memo(PageTransition);