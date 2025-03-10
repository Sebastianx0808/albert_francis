import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, User } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repoLink?: string;
  date?: string;
  author?: string;
  featured?: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  link,
  repoLink,
  date,
  author,
  featured = false,
  index
}) => {
  // Card hover animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 } 
    },
    hover: { 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
    }
  };

  // Image hover animation variants
  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className={`card group h-full flex flex-col rounded-lg overflow-hidden border border-gray-200 dark:border-dark-300 ${
        featured ? 'ring-2 ring-primary-500 shadow-md' : 'shadow-sm'
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      {featured && (
        <div className="absolute -top-3 -right-3 z-10">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full shadow-sm">
            Featured
          </span>
        </div>
      )}

      <div className="relative overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-52 object-cover"
          variants={imageVariants}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-2 right-2 flex gap-2">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm rounded-full text-primary-600 dark:text-primary-400 hover:bg-white dark:hover:bg-dark-200 transition-colors shadow-sm"
              aria-label={`View ${title} project`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          
          {repoLink && (
            <a 
              href={repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm rounded-full text-primary-600 dark:text-primary-400 hover:bg-white dark:hover:bg-dark-200 transition-colors shadow-sm"
              aria-label={`View ${title} repository`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        
        {(date || author) && (
          <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
              </div>
            )}
            
            {author && (
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{author}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-300 text-gray-800 dark:text-gray-200 rounded transition-colors hover:bg-gray-200 dark:hover:bg-dark-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;