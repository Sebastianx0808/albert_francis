import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  name: string;
  proficiency: number;
  color?: string;
  icon?: React.ReactNode;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  proficiency,
  color = 'primary',
  icon,
  delay = 0,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const colorClasses = {
    primary: {
      bg: 'bg-primary-50 dark:bg-primary-900/30',
      text: 'text-primary-600 dark:text-primary-400',
      progressBg: 'bg-primary-200 dark:bg-primary-800',
      progressFill: 'bg-primary-600 dark:bg-primary-500',
    },
    secondary: {
      bg: 'bg-secondary-50 dark:bg-secondary-900/30',
      text: 'text-secondary-600 dark:text-secondary-400',
      progressBg: 'bg-secondary-200 dark:bg-secondary-800',
      progressFill: 'bg-secondary-600 dark:bg-secondary-500',
    },
    accent: {
      bg: 'bg-amber-50 dark:bg-amber-900/30',
      text: 'text-amber-600 dark:text-amber-400',
      progressBg: 'bg-amber-200 dark:bg-amber-800',
      progressFill: 'bg-amber-600 dark:bg-amber-500',
    },
  }[color] || {
    bg: 'bg-primary-50 dark:bg-primary-900/30',
    text: 'text-primary-600 dark:text-primary-400',
    progressBg: 'bg-primary-200 dark:bg-primary-800',
    progressFill: 'bg-primary-600 dark:bg-primary-500',
  };

  return (
    <motion.div
      ref={ref}
      className={`p-4 rounded-lg shadow-md ${colorClasses.bg}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay, 
            ease: "easeOut" 
          }
        }
      }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" 
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className={`font-medium text-lg ${colorClasses.text}`}>{name}</h3>
        {icon && <div className={colorClasses.text}>{icon}</div>}
      </div>
      
      <div className="mt-2">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
          <span className={`text-sm font-semibold ${colorClasses.text}`}>{proficiency}%</span>
        </div>
        <div className={`w-full h-2 rounded-full ${colorClasses.progressBg}`}>
          <motion.div
            className={`h-2 rounded-full ${colorClasses.progressFill}`}
            initial={{ width: 0 }}
            animate={controls}
            variants={{
              visible: { 
                width: `${proficiency}%`,
                transition: { duration: 1, delay: delay + 0.3 }
              }
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;