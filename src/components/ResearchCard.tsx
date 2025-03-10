import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, FileText, ExternalLink } from 'lucide-react';

interface ResearchCardProps {
  title: string;
  abstract: string;
  authors: string;
  date: string;
  journal?: string;
  link?: string;
  index: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  abstract,
  authors,
  date,
  journal,
  link,
  index
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Card animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  // Icon animation variants
  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: isExpanded ? -180 : 180,
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  // Abstract content animation variants
  const contentVariants = {
    closed: { 
      height: 0, 
      opacity: 0,
      transition: { 
        height: { duration: 0.3 }, 
        opacity: { duration: 0.2 } 
      }
    },
    open: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        height: { duration: 0.4 }, 
        opacity: { delay: 0.1, duration: 0.3 } 
      }
    }
  };

  return (
    <motion.div 
      className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm"
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <motion.div 
              className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl"
              animate={{ 
                rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {authors}
              </p>
              <div className="flex flex-wrap items-center mt-2 text-sm text-gray-500 dark:text-gray-500">
                <span>{date}</span>
                {journal && (
                  <>
                    <span className="mx-2 text-gray-400 dark:text-gray-600">•</span>
                    <span>{journal}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
            aria-label={isExpanded ? "Collapse" : "Expand"}
            variants={iconVariants}
            whileHover="hover"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={contentVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Abstract
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {abstract}
                </p>
                
                {link && (
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    View Publication 
                    <motion.span
                      animate={{ x: isHovered ? [0, 3, 0] : 0 }}
                      transition={{ repeat: isHovered ? Infinity : 0, repeatDelay: 0.7 }}
                    >
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </motion.span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ResearchCard;