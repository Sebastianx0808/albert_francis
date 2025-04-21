import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Users, Globe, ChevronDown, Calendar, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const professionalExperience = [
    {
      id: 'exp1',
      date: 'July 2024 - Present',
      title: 'AI Language (LLM) Trainer',
      subtitle: 'Outlier (Remote)',
      description: 'Leading training sessions for large language models by integrating academic insights with practical AI applications.',
      skills: ['AI Training', 'LLM Development', 'Academic Research', 'Remote Collaboration']
    },
    {
      id: 'exp2',
      date: 'July 2024 - Present',
      title: 'Guest Faculty, Department of Media Studies',
      subtitle: 'Bangalore Central Campus',
      description: 'Teaching and mentoring students in digital storytelling and media ethics while designing innovative course modules.',
      skills: ['Curriculum Design', 'Digital Storytelling', 'Media Ethics', 'Student Mentoring']
    },
    {
      id: 'exp3',
      date: 'January 2024 - Present',
      title: 'Research Assistant, School of Education',
      subtitle: 'Bangalore Central Campus',
      description: 'Assisting on research projects that explore academic culture, leadership in education, and emerging teaching methodologies.',
      skills: ['Educational Research', 'Academic Culture', 'Research Methodology', 'Data Analysis']
    },
    {
      id: 'exp4',
      date: 'December 2022 - December 2023',
      title: 'Assistant Professor, School of Arts and Humanities',
      subtitle: 'Pune Lavasa Campus',
      description: 'Delivered lectures in film and media studies, managed research initiatives, and contributed to curriculum development.',
      skills: ['Film Studies', 'Media Theory', 'Academic Leadership', 'Curriculum Development']
    },
    {
      id: 'exp5',
      date: 'July 2022 – November 2022',
      title: 'Lecturer, Department of Film and Media Studies',
      subtitle: 'BVM Holy Cross College, Cherpunkal, Kerala',
      description: 'Conducted engaging classes and coordinated extracurricular activities in film and media studies.',
      skills: ['Teaching', 'Event Coordination', 'Student Engagement', 'Media Analysis']
    }
  ];

  const consultingExperience = [
    {
      id: 'cons1',
      date: 'July 2021 – September 2024',
      title: 'Online Guitar Tutor',
      subtitle: 'WhiteHat Junior by BYJU\'S (Remote)',
      description: 'Delivered interactive online guitar lessons that blended creative arts with digital learning techniques.',
      skills: ['Music Education', 'Online Teaching', 'Digital Learning', 'Creative Arts']
    },
    {
      id: 'cons2',
      date: 'December 2019 - January 2020',
      title: 'Associate Editor - Internship',
      subtitle: 'Indianexpress.com Private Limited, Chennai',
      description: 'Assisted in content development and editorial processes during a short-term internship.',
      skills: ['Content Editing', 'Journalism', 'Digital Publishing', 'Media Production']
    }
  ];

  const affiliations = [
    {
      id: 'aff1',
      title: 'Member, Teacher Learning Enhancement Cell (TLEC)',
      organization: 'CHRIST (Deemed to be University)',
      year: '2022 - 2023',
      description: 'Contributing to educational enhancement initiatives and teacher development programs.'
    },
    {
      id: 'aff2',
      title: 'Member, Board of Studies (Digital Humanities)',
      organization: 'CHRIST (Deemed to be University)',
      year: '2022 - 2023',
      description: 'Participating in curriculum design and academic planning for digital humanities programs.'
    },
    {
      id: 'aff3',
      title: 'Director, MacGuffin Film Club',
      organization: 'CHRIST (Deemed to be University)',
      year: '2022 - 2023',
      description: 'Leading film appreciation activities and organizing screenings and discussions.'
    },
    {
      id: 'aff4',
      title: 'Coordinator, ACC Choir',
      organization: 'CHRIST (Deemed to be University)',
      year: '2022 - 2023',
      description: 'Leading and coordinating choir activities, performances, and rehearsals.'
    },
    {
      id: 'aff5',
      title: 'Member Secretary, IQAC Department',
      organization: 'CHRIST (Deemed to be University)',
      year: '2022 - 2023',
      description: 'Supporting quality assurance and accreditation processes for institutional development.'
    },
    {
      id: 'aff6',
      title: 'Coordinator, University Band',
      organization: 'CHRIST (Deemed to be University)',
      year: '2022 - 2023',
      description: 'Managing and directing university band activities, performances, and practice sessions.'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 mr-2 mb-2 transition-all hover:bg-indigo-200 dark:hover:bg-indigo-800/40">
      {skill}
    </span>
  );

  const TimelineItem = ({ 
    item, 
    index 
  }: { 
    item: typeof professionalExperience[0],
    index: number
  }) => {
    const isExpanded = expandedItems[item.id] || false;
    
    return (
      <motion.div
        key={item.id}
        variants={itemVariants}
        whileHover="hover"
        className="relative pl-8 pb-12 last:pb-0"
      >
        {/* Timeline connector */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-indigo-300 dark:bg-indigo-700"></div>
        
        {/* Timeline dot */}
        <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-indigo-500 dark:bg-indigo-400 shadow-md shadow-indigo-200 dark:shadow-indigo-900/50"></div>
        
        <div 
          className="card p-6 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => toggleItem(item.id)}
        >
          <div className="flex justify-between mb-2">
            <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              {item.date}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </div>
          
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {item.title}
          </h4>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-md mb-3">
            <MapPin className="w-4 h-4 mr-2" />
            {item.subtitle}
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            {item.description}
          </p>
          
          <motion.div
            initial="hidden"
            animate={isExpanded ? "visible" : "hidden"}
            variants={{
              hidden: { height: 0, opacity: 0, overflow: 'hidden' },
              visible: { height: 'auto', opacity: 1, overflow: 'visible' }
            }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700"
          >
            <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Skills & Expertise:</div>
            <div className="flex flex-wrap">
              {item.skills.map((skill, idx) => (
                <SkillBadge key={idx} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const ConsultingCard = ({ item }: { item: typeof consultingExperience[0] }) => {
    const isExpanded = expandedItems[item.id] || false;
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover="hover"
        className="card p-5 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={() => toggleItem(item.id)}
      >
        <div className="flex justify-between mb-1">
          <div className="text-sm font-medium text-purple-600 dark:text-purple-400 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {item.date}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </motion.div>
        </div>
        
        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
          {item.title}
        </h4>
        
        <div className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2 flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          {item.subtitle}
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {item.description}
        </p>
        
        <motion.div
          initial="hidden"
          animate={isExpanded ? "visible" : "hidden"}
          variants={{
            hidden: { height: 0, opacity: 0, overflow: 'hidden' },
            visible: { height: 'auto', opacity: 1, overflow: 'visible' }
          }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700"
        >
          <div className="flex flex-wrap">
            {item.skills.map((skill, idx) => (
              <SkillBadge key={idx} skill={skill} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  type Affiliation = {
    id: string;
    title: string;
    organization: string;
    year: string;
    description: string;
  };

  const AffiliationCard = ({ affiliations }: { affiliations: Affiliation[] }) => (
    <motion.div 
      variants={itemVariants}
      whileHover="hover"
      className="card p-6 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all duration-300"
    >
      <ul className="space-y-5">
        {affiliations.map((aff) => {
          const isExpanded = expandedItems[aff.id] || false;
          
          return (
            <li key={aff.id} className="pb-4 last:pb-0 border-b last:border-b-0 border-gray-100 dark:border-gray-700">
              <div 
                className="flex items-start cursor-pointer"
                onClick={() => toggleItem(aff.id)}
              >
                <Building className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-3 mt-0.5" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">{aff.title}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {aff.organization} • <span className="text-amber-600 dark:text-amber-400">{aff.year}</span>
                  </p>
                  
                  <motion.div
                    initial="hidden"
                    animate={isExpanded ? "visible" : "hidden"}
                    variants={{
                      hidden: { height: 0, opacity: 0, overflow: 'hidden', marginTop: 0 },
                      visible: { height: 'auto', opacity: 1, overflow: 'visible', marginTop: 8 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border-l-2 border-amber-300 dark:border-amber-600">
                      {aff.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );

  return (
    <PageTransition>
      <div className="container-custom py-16">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="A timeline of my academic, creative, and consulting roles."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Professional Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Academic & Media Roles
              </h3>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="pl-4"
            >
              {professionalExperience.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Consulting Experience & Affiliations */}
          <div className="lg:col-span-1 space-y-12">
            {/* Consulting Experience */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 flex items-center"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Internship
                </h3>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {consultingExperience.map((item) => (
                  <ConsultingCard key={item.id} item={item} />
                ))}
              </motion.div>
            </div>
            
            {/* Professional Affiliations */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-6 flex items-center"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mr-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Professional Affiliations
                </h3>
              </motion.div>
              
              <AffiliationCard affiliations={affiliations} />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;