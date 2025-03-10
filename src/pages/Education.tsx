import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, AlignCenterVertical as Certificate, BookOpen, Briefcase, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications' | 'awards'>('education');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const educationData = [
    {
      date: 'June 2020 - May 2022',
      title: 'PhD in Media Studies',
      subtitle: 'CHRIST (Deemed To Be University), Bangalore, Karnataka',
      description: 'Working on Expressive AI: Cinematic Experiments with Artificial Intelligence. Part-time research integrating media theory with innovative cinematic practice.',
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      achievements: ['Published 3 research papers', 'Presented at International AI Conference', 'Recipient of Research Excellence Grant']
    },
    {
      date: 'June 2017 - April 2020',
      title: 'Master of Arts in English with Communication Studies',
      subtitle: 'Loyola College Chennai, Madras University, Chennai, Tamil Nadu',
      description: 'Specialized in Film Studies with a CGPA of 8.15, combining media theory with creative practice.',
      icon: <Briefcase className="w-5 h-5 text-purple-500" />,
      achievements: ['Department Representative', 'Student Film Festival Organizer', 'Media Lab Assistant']
    },
    {
      date: '2013 - 2017',
      title: 'Bachelor of Arts in English Literature',
      subtitle: 'Loyola College Chennai, Madras University',
      description: 'Completed with a CGPA of 7.34, establishing a strong foundation in literature and critical analysis.',
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      achievements: ['Literary Club President', 'Student Council Member', 'Inter-College Debate Winner']
    }
  ];

  const certifications = [
    {
      title: 'Advanced Research Methodologies',
      organization: 'International Research Association',
      year: '2020',
      skills: ['Qualitative Analysis', 'Data Collection', 'Research Design']
    },
    {
      title: 'Digital Media Production',
      organization: 'Media Professionals Guild',
      year: '2018',
      skills: ['Video Editing', 'Sound Design', 'Content Strategy']
    },
    {
      title: 'Teaching in Higher Education',
      organization: 'Educational Excellence Institute',
      year: '2017',
      skills: ['Curriculum Design', 'Student Assessment', 'Pedagogical Methods']
    },
    {
      title: 'Grant Writing for Creative Projects',
      organization: 'Arts Foundation',
      year: '2016',
      skills: ['Proposal Development', 'Budget Planning', 'Project Management']
    }
  ];

  const awards = [
    {
      title: 'Outstanding Dissertation Award',
      organization: 'University of Excellence',
      year: '2019',
      description: 'Recognized for exceptional research contribution in the field of media studies.'
    },
    {
      title: 'Young Researcher Grant',
      organization: 'National Media Foundation',
      year: '2018',
      description: 'Competitive grant awarded to promising researchers under 30 years of age.'
    },
    {
      title: 'Excellence in Teaching Award',
      organization: 'Department of Media Studies',
      year: '2017',
      description: 'Awarded based on student evaluations and peer reviews of teaching methodology.'
    },
    {
      title: 'Best Documentary Short',
      organization: 'Student Film Festival',
      year: '2013',
      description: 'First place for a documentary exploring urban environmental challenges.'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tabVariants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: { scale: 1.05, opacity: 1 }
  };

  const cardHoverVariants = {
    initial: { scale: 1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" },
    hover: { scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }
  };

  return (
    <PageTransition>
      <div className="container-custom py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading 
            title="Education & Qualifications" 
            subtitle="Academic background, certifications, and awards that have shaped my professional journey."
          />
        </motion.div>
        
        {/* Navigation Tabs */}
        <motion.div 
          className="flex justify-center mb-12 mt-8 border-b border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className={`flex items-center px-6 py-3 font-medium text-lg transition-all duration-300 relative ${
              activeTab === 'education' 
                ? 'text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300'
            }`}
            onClick={() => setActiveTab('education')}
            variants={tabVariants}
            animate={activeTab === 'education' ? 'active' : 'inactive'}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            <span>Education</span>
            {activeTab === 'education' && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500 dark:bg-indigo-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>

          <motion.button
            className={`flex items-center px-6 py-3 font-medium text-lg transition-all duration-300 relative ${
              activeTab === 'certifications' 
                ? 'text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300'
            }`}
            onClick={() => setActiveTab('certifications')}
            variants={tabVariants}
            animate={activeTab === 'certifications' ? 'active' : 'inactive'}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Certificate className="w-5 h-5 mr-2" />
            <span>Certifications</span>
            {activeTab === 'certifications' && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500 dark:bg-indigo-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>

          <motion.button
            className={`flex items-center px-6 py-3 font-medium text-lg transition-all duration-300 relative ${
              activeTab === 'awards' 
                ? 'text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300'
            }`}
            onClick={() => setActiveTab('awards')}
            variants={tabVariants}
            animate={activeTab === 'awards' ? 'active' : 'inactive'}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Award className="w-5 h-5 mr-2" />
            <span>Awards</span>
            {activeTab === 'awards' && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500 dark:bg-indigo-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={containerVariants}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Main Education Timeline */}
              <div className="lg:col-span-12">
                <motion.div
                  variants={itemVariants}
                  className="mb-8 flex items-center"
                >
                  <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mr-4">
                    <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Academic Journey
                  </h3>
                </motion.div>
                
                <div className="pl-4 space-y-12">
                  {educationData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-8 pb-8"
                      variants={itemVariants}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onHoverStart={() => setHoveredItem(index)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      {/* Timeline line */}
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
                      
                      {/* Timeline dot */}
                      <motion.div 
                        className="absolute left-0 top-0 w-6 h-6 -ml-3 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-indigo-400"
                        initial={{ scale: 1 }}
                        animate={{ 
                          scale: hoveredItem === index ? 1.2 : 1,
                          borderColor: hoveredItem === index ? '#6366f1' : '#818cf8'
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      
                      {/* Content */}
                      <motion.div
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300"
                        variants={cardHoverVariants}
                        initial="initial"
                        whileHover="hover"
                        transition={{ duration: 0.3 }}
                      >
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300">
                          {item.date}
                        </span>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                          {item.subtitle}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {item.description}
                        </p>
                        
                        {/* Achievements */}
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, idx) => (
                              <motion.li 
                                key={idx}
                                className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                              >
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-1.5 mr-2"></span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                      <Certificate className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                      {cert.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">
                    {cert.organization}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <motion.span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'awards' && (
            <motion.div
              key="awards"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={containerVariants}
              className="grid grid-cols-1 gap-6"
            >
              {awards.map((award, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row md:items-center gap-6"
                  whileHover={{ 
                    x: 5, 
                    backgroundColor: "rgba(79, 70, 229, 0.03)",
                    borderColor: "rgba(79, 70, 229, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Award className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {award.title}
                      </h4>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 self-start md:self-auto mt-2 md:mt-0">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1 mb-2">
                      {award.organization}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact for academic collaborations
            <ExternalLink className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Education;