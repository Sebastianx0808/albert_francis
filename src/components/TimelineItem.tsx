import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  subtitle, 
  description,
  index
}) => {
  return (
    <motion.div 
      className="relative pl-8 pb-12 border-l border-gray-300 dark:border-gray-700 last:border-0 last:pb-0"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500" />
      
      <div className="mb-1 text-sm font-medium text-primary-600 dark:text-primary-400">
        {date}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      
      <div className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">
        {subtitle}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

export default TimelineItem;