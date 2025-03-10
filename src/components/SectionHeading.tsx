import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}) => {
  // Memoize animation variants to prevent recalculation on re-renders
  const textVariants = React.useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }), []);
  
  const lineVariants = React.useMemo(() => ({
    hidden: { width: 0 },
    visible: { width: centered ? 60 : 80 }
  }), [centered]);
  
  // Memoize transition configs
  const textTransition = React.useMemo(() => ({ duration: 0.5 }), []);
  const subtitleTransition = React.useMemo(() => ({ duration: 0.5, delay: 0.2 }), []);
  const lineTransition = React.useMemo(() => ({ duration: 0.5, delay: 0.3 }), []);
  
  // Memoize viewport config
  const viewportConfig = React.useMemo(() => ({ once: true, amount: 0.3 }), []);

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <motion.h2 
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={textVariants}
        transition={textTransition}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={textVariants}
          transition={subtitleTransition}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`h-1 bg-primary-600 dark:bg-primary-500 mt-4 ${centered ? 'mx-auto' : ''}`}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={lineVariants}
        transition={lineTransition}
        style={{ width: 0 }}
      />
    </div>
  );
};

export default memo(SectionHeading);