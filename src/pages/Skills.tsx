import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';
import { Book, Film, Music, Code, Users, Globe, Award, Briefcase } from 'lucide-react';

// Categorized skills based on Albert Francis's profile
const skillCategories = [
  {
    id: 'teaching',
    name: 'Teaching & Mentoring',
    icon: <Book size={24} />,
    color: 'primary',
    skills: [
      { name: 'Literature', proficiency: 92 },
      { name: 'Communication', proficiency: 88 },
      { name: 'Media Studies', proficiency: 95 },
      { name: 'Film Studies', proficiency: 90 },
      { name: 'Human Rights', proficiency: 85 }
    ]
  },
  {
    id: 'creative',
    name: 'Creative & Artistic',
    icon: <Film size={24} />,
    color: 'secondary',
    skills: [
      { name: 'Film Direction', proficiency: 90 },
      { name: 'Narrative Analysis', proficiency: 88 },
      { name: 'Screenplay Writing', proficiency: 85 },
      { name: 'Production Design', proficiency: 82 }
    ]
  },
  {
    id: 'music',
    name: 'Musical Abilities',
    icon: <Music size={24} />,
    color: 'accent',
    skills: [
      { name: 'Guitar (Acoustic/Electric)', proficiency: 95 },
      { name: 'Violin', proficiency: 80 },
      { name: 'Piano', proficiency: 78 },
      { name: 'Vocal (Multilingual)', proficiency: 85 }
    ]
  },
  {
    id: 'technical',
    name: 'Technical Skills',
    icon: <Code size={24} />,
    color: 'primary',
    skills: [
      { name: 'Microsoft Office Suite', proficiency: 90 },
      { name: 'Google Workspace', proficiency: 92 },
      { name: 'Content Development', proficiency: 88 },
      { name: 'LMS Management', proficiency: 85 }
    ]
  },
  {
    id: 'leadership',
    name: 'Leadership & Admin',
    icon: <Briefcase size={24} />,
    color: 'secondary',
    skills: [
      { name: 'IQAC Management', proficiency: 88 },
      { name: 'Event Direction', proficiency: 92 },
      { name: 'Team Oversight', proficiency: 90 },
      { name: 'Budget Management', proficiency: 85 }
    ]
  },
  {
    id: 'interpersonal',
    name: 'Interpersonal',
    icon: <Users size={24} />,
    color: 'accent',
    skills: [
      { name: 'Public Speaking', proficiency: 90 },
      { name: 'Collaboration', proficiency: 88 },
      { name: 'Mentorship', proficiency: 92 },
      { name: 'Interviewing', proficiency: 85 }
    ]
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: <Globe size={24} />,
    color: 'primary',
    skills: [
      { name: 'English', proficiency: 95 },
      { name: 'Malayalam', proficiency: 98 },
      { name: 'Tamil', proficiency: 90 },
      { name: 'Hindi', proficiency: 88 }
    ]
  },
  {
    id: 'sports',
    name: 'Sports & Physical',
    icon: <Award size={24} />,
    color: 'secondary',
    skills: [
      { name: 'Karate (Black Belt)', proficiency: 95 },
      { name: 'Cricket', proficiency: 88 },
      { name: 'Badminton', proficiency: 85 },
      { name: 'Sports Leadership', proficiency: 90 }
    ]
  }
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <PageTransition>
      <div className="container-custom py-16">
        <SectionHeading
          title="Multidisciplinary Expertise"
          subtitle="A showcase of academic, creative, and professional capabilities cultivated through years of dedicated practice and continuous learning."
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white dark:bg-primary-500 dark:text-white'
                  : 'bg-light-600 text-dark-700 hover:bg-light-300 dark:bg-dark-600 dark:text-light-100 dark:hover:bg-dark-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="hidden sm:inline">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${
              activeCategory === category.id ? 'block' : 'hidden'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {category.skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
                color={category.color}
                icon={category.icon}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        ))}
        
        <motion.div 
          className="mt-16 p-6 bg-light-100 dark:bg-dark-800 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">Key Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-light-50 dark:bg-dark-700 rounded-md">
              <h4 className="font-semibold mb-2">Adaptability</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Excels at juggling multiple roles in academia, arts, and administration.
              </p>
            </div>
            <div className="p-4 bg-light-50 dark:bg-dark-700 rounded-md">
              <h4 className="font-semibold mb-2">Team Leadership</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                A natural mentor who manages teams and coordinates events efficiently.
              </p>
            </div>
            <div className="p-4 bg-light-50 dark:bg-dark-700 rounded-md">
              <h4 className="font-semibold mb-2">Creative Vision</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always pushing the envelope in teaching methods, filmmaking, and cultural innovation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;