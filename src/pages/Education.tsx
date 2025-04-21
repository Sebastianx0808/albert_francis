import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, AlignCenterVertical as Certificate, BookOpen, Briefcase, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications' | 'awards'>('education');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const certificationsPerPage = 8;

  const [achievementSearchTerm, setAchievementSearchTerm] = useState('');
  const [achievementFilter, setAchievementFilter] = useState('All');
  const [achievementPage, setAchievementPage] = useState(1);
  const achievementsPerPage = 5;

  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  const [isUniDropdownOpen, setIsUniDropdownOpen] = useState(false);

  const educationData = [
    {
      date: 'June 2024 - Expected June 2027',
      title: 'PhD in Media Studies',
      subtitle: 'CHRIST (Deemed To Be University), Bangalore, Karnataka',
      description: 'Working on Generative Artificial Intelligence (Gen AI) in transforming music reception, appreciation, and propagation.',
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      achievements: []  // Removed achievements for PhD
    },
    {
      date: 'June 2020 - May 2022',
      title: 'Master of Arts in English with Communication Studies',
      subtitle: 'CHRIST (Deemed To Be University), Bangalore, Karnataka',
      description: 'Specialized in Film Studies with a CGPA of 8.15, combining media theory with creative practice.',
      icon: <Briefcase className="w-5 h-5 text-purple-500" />,
      achievements: ['Completed 52 Coursera certifications', 'Internship at WhiteHat Jr', 'Organized two student-led post-graduate International Conferences']
    },
    {
      date: 'June 2017 - April 2020',
      title: 'Bachelor of Arts in English Literature',
      subtitle: 'Loyola College Chennai, Madras University',
      description: 'Completed with a CGPA of 7.34, establishing a strong foundation in literature and critical analysis.',
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      achievements: ['Department Cultural Secretary', 'College Band Member', '1st in the Battle of Bands, National level cultural fest conducted by SRM College, Chennai', '1st in the Battle of Bands, Rahmania 2018, conducted by M.O.P College, Chennai', 'Department Cricket Team Player']
    }
  ];

  const certifications = [
    {
      title: 'Journey of the Universe: The Unfolding of Life',
      organization: 'Yale University',
      year: '',
      skills: []
    },
    {
      title: 'Moral Foundations of Politics',
      organization: 'Yale University',
      year: '',
      skills: []
    },
    {
      title: 'Essentials of Global Health',
      organization: 'Yale University',
      year: '',
      skills: []
    },
    {
      title: 'Introduction to Psychology',
      organization: 'Yale University',
      year: '',
      skills: []
    },
    {
      title: 'Citizenship and the Rule of Law',
      organization: 'University of London',
      year: '',
      skills: []
    },
    {
      title: 'The Manager\'s Toolkit: A Practical Guide to Managing People at Work',
      organization: 'University of London',
      year: '',
      skills: []
    },
    {
      title: 'Introduction to Philosophy',
      organization: 'The University of Edinburgh',
      year: '',
      skills: []
    },
    {
      title: 'Philosophy, Science and Religion: Philosophy and Religion',
      organization: 'The University of Edinburgh',
      year: '',
      skills: []
    },
    {
      title: 'Intellectual Humility: Theory',
      organization: 'The University of Edinburgh',
      year: '',
      skills: []
    },
    {
      title: 'Intellectual Humility: Science',
      organization: 'The University of Edinburgh',
      year: '',
      skills: []
    },
    {
      title: 'Linear Regression in R for Public Health',
      organization: 'Imperial College London',
      year: '',
      skills: []
    },
    {
      title: 'Introduction to Cloud Identity',
      organization: 'Google Cloud',
      year: '',
      skills: []
    },
    {
      title: 'Introduction to Cybersecurity Tools & Cyber Attacks',
      organization: 'IBM',
      year: '',
      skills: []
    },
    {
      title: 'Internet Giants: The Law and Economics of Media Platforms',
      organization: 'The University of Chicago',
      year: '',
      skills: []
    },
    {
      title: 'Software Defined Networking',
      organization: 'The University of Chicago',
      year: '',
      skills: []
    },
    {
      title: 'Building Your Career in Music: Developing A Brand and Funding Your Music',
      organization: 'Berklee College of Music',
      year: '',
      skills: []
    },
    {
      title: 'Copyright Law in the Music Business',
      organization: 'Berklee College of Music',
      year: '',
      skills: []
    },
    {
      title: 'Music Business Foundations',
      organization: 'Berklee College of Music',
      year: '',
      skills: []
    },
    {
      title: 'COVID-19 Contact Tracing',
      organization: 'Johns Hopkins University',
      year: '',
      skills: []
    },
    {
      title: 'Data Science in Real Life',
      organization: 'Johns Hopkins University',
      year: '',
      skills: []
    },
    {
      title: 'Outbreaks and Epidemics',
      organization: 'Johns Hopkins University',
      year: '',
      skills: []
    },
    {
      title: 'Managing Data Analysis',
      organization: 'Johns Hopkins University',
      year: '',
      skills: []
    },
    {
      title: 'A Crash Course in Data Science',
      organization: 'Johns Hopkins University',
      year: '',
      skills: []
    },
    {
      title: 'International Travel Preparation, Safety, & Wellness',
      organization: 'Johns Hopkins University',
      year: '',
      skills: []
    },
    {
      title: 'Essential Epidemiologic Tools for Public Health Practice',
      organization: 'Johns Hopkins University',
      year: '',
      skills: []
    },
    {
      title: 'European Business Law: Competing in Europe',
      organization: 'Lund University',
      year: '',
      skills: []
    },
    {
      title: 'European Business Law: Doing Business in Europe',
      organization: 'Lund University',
      year: '',
      skills: []
    },
    {
      title: 'European Business Law: Understanding the Fundamentals',
      organization: 'Lund University',
      year: '',
      skills: []
    },
    {
      title: 'The Blues: Understanding and Performing an American Art Form',
      organization: 'University of Rochester',
      year: '',
      skills: []
    },
    {
      title: 'Essentials in Clinical Simulations Across the Health Professions',
      organization: 'The George Washington University',
      year: '',
      skills: []
    },
    {
      title: 'Leading Healthcare Quality and Safety',
      organization: 'The George Washington University',
      year: '',
      skills: []
    },
    {
      title: 'Competitive Strategy',
      organization: 'Ludwig-Maximilians-Universität München (LMU)',
      year: '',
      skills: []
    },
    {
      title: 'New Models of Business in Society',
      organization: 'University of Virginia',
      year: '',
      skills: []
    },
    {
      title: 'Civic Engagement in American Democracy',
      organization: 'Duke University',
      year: '',
      skills: []
    },
    {
      title: 'The Challenges of Global Health',
      organization: 'Duke University',
      year: '',
      skills: []
    },
    {
      title: 'Music as Biology: What We Like to Hear and Why',
      organization: 'Duke University',
      year: '',
      skills: []
    },
    {
      title: 'Intro to International Marketing',
      organization: 'Yonsei University',
      year: '',
      skills: []
    },
    {
      title: 'Successful Negotiation: Essential Strategies and Skills',
      organization: 'University of Michigan',
      year: '',
      skills: []
    },
    {
      title: 'Michigan Sport-Related Concussion Training Certification',
      organization: 'University of Michigan',
      year: '',
      skills: []
    },
    {
      title: 'The Modern World, Part One: Global History from 1760 to 1910',
      organization: 'University of Virginia',
      year: '',
      skills: []
    },
    {
      title: 'Leadership and Emotional Intelligence',
      organization: 'Indian School of Business',
      year: '',
      skills: []
    },
    {
      title: 'Schizophrenia',
      organization: 'Wesleyan University',
      year: '',
      skills: []
    },
    {
      title: 'International Business I',
      organization: 'University of New Mexico',
      year: '',
      skills: []
    },
    {
      title: 'International Business II',
      organization: 'University of New Mexico',
      year: '',
      skills: []
    },
    {
      title: 'Emotions: a Philosophical Introduction',
      organization: 'Universitat Autònoma de Barcelona',
      year: '',
      skills: []
    },
    {
      title: 'From the Big Bang to Dark Energy',
      organization: 'The University of Tokyo',
      year: '',
      skills: []
    },
    {
      title: 'Global Health and Humanitarianism',
      organization: 'University of Manchester',
      year: '',
      skills: []
    },
    {
      title: 'Mind Control: Managing Your Mental Health During COVID-19',
      organization: 'University of Toronto',
      year: '',
      skills: []
    },
    {
      title: 'Grammar and Punctuation',
      organization: 'University of California, Irvine',
      year: '',
      skills: []
    },
    {
      title: 'Feminism and Social Justice',
      organization: 'University of California, Santa Cruz',
      year: '',
      skills: []
    },
    {
      title: 'Effective Altruism',
      organization: 'Princeton University',
      year: '',
      skills: []
    },
    {
      title: 'U101: Understanding College and College Life',
      organization: 'University of Washington',
      year: '',
      skills: []
    }
  ];

  // Replace the existing awards array with the new achievements array
const achievements = [
  {
    title: 'Department Cultural Secretary of Loyola College (2019-2020)',
    organization: 'Loyola College',
    year: '2019-2020'
  },
  {
    title: '1st in the battle of bands, National level cultural fest',
    organization: 'SRM College, Chennai',
    year: ''
  },
  {
    title: '1st in the battle of bands, Rahmania 2018',
    organization: 'M.O.P College, Chennai',
    year: '2018'
  },
  {
    title: '2nd in battle of bands',
    organization: 'M.O.P College, Chennai',
    year: '2019'
  },
  {
    title: '3rd in the battle of bands',
    organization: 'MCC College Bangalore',
    year: '2018'
  },
  {
    title: 'Finalist in the National Level Battle of Bands, Forum Rock-On 2018',
    organization: 'Forum Vijaya Mall',
    year: '2018'
  },
  {
    title: '1st in mime (Done live music for the event)',
    organization: 'DG Vaishnav College',
    year: ''
  },
  {
    title: '2nd in mime (Done live music for the event)',
    organization: 'Madras Christian College',
    year: ''
  },
  {
    title: '2nd in Variety entertainment (Done live music for the event)',
    organization: 'Madras Christian College',
    year: ''
  },
  {
    title: 'Coordinator of Licet band and Loho band',
    organization: '',
    year: ''
  },
  {
    title: 'Cultural coordinator of the prolife exhibition 2019',
    organization: 'Loyola College',
    year: '2019'
  },
  {
    title: 'Event coordinator of "Creepy cauldron", an Inter college cultural event',
    organization: 'Loyola College',
    year: ''
  },
  {
    title: 'Ex-coordinator of campus music ministry',
    organization: 'Jesus Youth Tamil Nadu',
    year: ''
  },
  {
    title: 'Best instrumentalist award',
    organization: 'Loyola Hostel',
    year: ''
  },
  {
    title: 'Music director of English theater society',
    organization: 'Loyola College',
    year: ''
  },
  {
    title: 'Music Direction for Tamil Nadu Jesus Youth Jubilee 2019 for audio-visual ministry',
    organization: 'Jesus Youth Tamil Nadu',
    year: '2019'
  },
  {
    title: 'Music Direction for the short film "Don\'t Do"',
    organization: '',
    year: ''
  },
  {
    title: 'Kerala School Kalolsavam – Mannarkkad Sub District – Guitar (Western) - 1st With A GRADE',
    organization: 'Kerala School Kalolsavam',
    year: ''
  },
  {
    title: 'Kerala School Kalolsavam – Mannarkkad Sub District – Poorakkali (Boys) – 1st With A Grade',
    organization: 'Kerala School Kalolsavam',
    year: ''
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

  const universities = ['All', ...Array.from(new Set(certifications.map(cert => cert.organization)))];
  // Filter certifications based on search term and selected university
  const filteredCertifications = certifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cert.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUniversity = selectedUniversity === 'All' || cert.organization === selectedUniversity;
    return matchesSearch && matchesUniversity;
  });

  // Get current certifications for pagination
  const indexOfLastCert = currentPage * certificationsPerPage;
  const indexOfFirstCert = indexOfLastCert - certificationsPerPage;
  const currentCertifications = filteredCertifications.slice(indexOfFirstCert, indexOfLastCert);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);


  // Get unique organizations for filter dropdown
  const organizations = ['All', ...Array.from(new Set(achievements.filter(a => a.organization).map(a => a.organization)))];

  // Filter achievements based on search term and selected organization
  const filteredAchievements = achievements.filter(achievement => {
    const matchesSearch = achievement.title.toLowerCase().includes(achievementSearchTerm.toLowerCase()) || 
                          (achievement.organization && achievement.organization.toLowerCase().includes(achievementSearchTerm.toLowerCase()));
    const matchesOrg = achievementFilter === 'All' || achievement.organization === achievementFilter;
    return matchesSearch && matchesOrg;
  });

  // Get current achievements for pagination
  const indexOfLastAchievement = achievementPage * achievementsPerPage;
  const indexOfFirstAchievement = indexOfLastAchievement - achievementsPerPage;
  const currentAchievements = filteredAchievements.slice(indexOfFirstAchievement, indexOfLastAchievement);

  // Change page for achievements
  const paginateAchievements = (pageNumber: React.SetStateAction<number>) => setAchievementPage(pageNumber);




  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      // Add proper type checking and casting
      if (isOrgDropdownOpen && e.target && !(e.target as Element).closest('.org-dropdown')) {
        setIsOrgDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOrgDropdownOpen]);


  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (e.target) {
        const target = e.target as Element;
        if (isUniDropdownOpen && !target.closest('.cert-dropdown')) {
          setIsUniDropdownOpen(false);
        }
        if (isOrgDropdownOpen && !target.closest('.org-dropdown')) {
          setIsOrgDropdownOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isUniDropdownOpen, isOrgDropdownOpen]);

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
                        {item.achievements.length > 0 && (
                          
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
                        )}
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
              className="space-y-6"
            >
              {/* Search and Filter Controls */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-4 mb-6"
              >
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Search certifications..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}
                  />
                </div>
                <div className="w-full md:w-64 relative cert-dropdown">
                  <button
                    onClick={() => setIsUniDropdownOpen(!isUniDropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-purple-400 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent"
                  >
                    <span className="flex items-center">
                      {selectedUniversity === 'All' ? (
                        <span className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mr-2"></span>
                          All Universities
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                          {selectedUniversity}
                        </span>
                      )}
                    </span>
                    <svg className={`w-5 h-5 transition-transform duration-200 ${isUniDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {isUniDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {universities.map((uni, idx) => (
                        <div 
                          key={idx}
                          className={`px-4 py-2.5 flex items-center cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-900/30 ${selectedUniversity === uni ? 'bg-purple-100 dark:bg-purple-900/20' : ''}`}
                          onClick={() => {
                            setSelectedUniversity(uni);
                            setCurrentPage(1);
                            setIsUniDropdownOpen(false);
                          }}
                        >
                          <span className={`w-3 h-3 rounded-full mr-2 ${uni === 'All' ? 'bg-gradient-to-r from-purple-500 to-indigo-500' : 'bg-purple-500'}`}></span>
                          <span className="text-gray-700 dark:text-gray-300">{uni}</span>
                          {selectedUniversity === uni && (
                            <svg className="w-4 h-4 ml-auto text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Certificate Count */}
              <motion.div variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Showing {currentCertifications.length} of {filteredCertifications.length} certifications
                {selectedUniversity !== 'All' && ` from ${selectedUniversity}`}
              </motion.div>

              {/* Certificates Grid */}
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentCertifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                        <Certificate className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">
                      {cert.organization}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination Controls */}
              {filteredCertifications.length > certificationsPerPage && (
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-center mt-8 space-x-2"
                >
                  <button
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/50'}`}
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(5, Math.ceil(filteredCertifications.length / certificationsPerPage)) }, (_, i) => {
                    // Calculate page numbers to show (centered around current page)
                    const totalPages = Math.ceil(filteredCertifications.length / certificationsPerPage);
                    let startPage = Math.max(1, currentPage - 2);
                    if (currentPage > totalPages - 2) {
                      startPage = Math.max(1, totalPages - 4);
                    }
                    const pageNum = startPage + i;
                    if (pageNum <= totalPages) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => paginate(pageNum)}
                          className={`w-10 h-10 rounded-lg ${currentPage === pageNum ? 'bg-indigo-500 dark:bg-indigo-600 text-white' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/50'}`}
                        >
                          {pageNum}
                        </button>
                      );
                    }
                    return null;
                  })}
                  
                  <button
                    onClick={() => paginate(currentPage < Math.ceil(filteredCertifications.length / certificationsPerPage) ? currentPage + 1 : currentPage)}
                    disabled={currentPage === Math.ceil(filteredCertifications.length / certificationsPerPage)}
                    className={`px-4 py-2 rounded-lg ${currentPage === Math.ceil(filteredCertifications.length / certificationsPerPage) ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/50'}`}
                  >
                    Next
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab === 'awards' && (
            <motion.div
              key="awards"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={containerVariants}
              className="space-y-6"
            >
              {/* Search and Filter Controls */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-4 mb-6"
              >
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Search achievements..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                    value={achievementSearchTerm}
                    onChange={(e) => {setAchievementSearchTerm(e.target.value); setAchievementPage(1);}}
                  />
                </div>
                <div className="w-full md:w-64 relative org-dropdown">
                  <button
                    onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-indigo-400 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                  >
                    <span className="flex items-center">
                      {achievementFilter === 'All' ? (
                        <span className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2"></span>
                          All Organizations
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
                          {achievementFilter || 'Unspecified'}
                        </span>
                      )}
                    </span>
                    <svg className={`w-5 h-5 transition-transform duration-200 ${isOrgDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {isOrgDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {organizations.map((org, idx) => (
                        <div 
                          key={idx}
                          className={`px-4 py-2.5 flex items-center cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900/30 ${achievementFilter === org ? 'bg-indigo-100 dark:bg-indigo-900/20' : ''}`}
                          onClick={() => {
                            setAchievementFilter(org);
                            setAchievementPage(1);
                            setIsOrgDropdownOpen(false);
                          }}
                        >
                          <span className={`w-3 h-3 rounded-full mr-2 ${org === 'All' ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-indigo-500'}`}></span>
                          <span className="text-gray-700 dark:text-gray-300">{org || 'Unspecified'}</span>
                          {achievementFilter === org && (
                            <svg className="w-4 h-4 ml-auto text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Achievement Count */}
              <motion.div variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Showing {currentAchievements.length} of {filteredAchievements.length} achievements
                {achievementFilter !== 'All' && ` from ${achievementFilter}`}
              </motion.div>

              {/* Achievements List */}
              <motion.div className="grid grid-cols-1 gap-6">
                {currentAchievements.map((achievement, index) => (
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
                          {achievement.title}
                        </h4>
                        {achievement.year && (
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 self-start md:self-auto mt-2 md:mt-0">
                            {achievement.year}
                          </span>
                        )}
                      </div>
                      {achievement.organization && (
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1 mb-2">
                          {achievement.organization}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination Controls */}
              {filteredAchievements.length > achievementsPerPage && (
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-center mt-8 space-x-2"
                >
                  <button
                    onClick={() => paginateAchievements(achievementPage > 1 ? achievementPage - 1 : 1)}
                    disabled={achievementPage === 1}
                    className={`px-4 py-2 rounded-lg ${achievementPage === 1 ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/50'}`}
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(5, Math.ceil(filteredAchievements.length / achievementsPerPage)) }, (_, i) => {
                    // Calculate page numbers to show (centered around current page)
                    const totalPages = Math.ceil(filteredAchievements.length / achievementsPerPage);
                    let startPage = Math.max(1, achievementPage - 2);
                    if (achievementPage > totalPages - 2) {
                      startPage = Math.max(1, totalPages - 4);
                    }
                    const pageNum = startPage + i;
                    if (pageNum <= totalPages) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => paginateAchievements(pageNum)}
                          className={`w-10 h-10 rounded-lg ${achievementPage === pageNum ? 'bg-indigo-500 dark:bg-indigo-600 text-white' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/50'}`}
                        >
                          {pageNum}
                        </button>
                      );
                    }
                    return null;
                  })}
                  
                  <button
                    onClick={() => paginateAchievements(achievementPage < Math.ceil(filteredAchievements.length / achievementsPerPage) ? achievementPage + 1 : achievementPage)}
                    disabled={achievementPage === Math.ceil(filteredAchievements.length / achievementsPerPage)}
                    className={`px-4 py-2 rounded-lg ${achievementPage === Math.ceil(filteredAchievements.length / achievementsPerPage) ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/50'}`}
                  >
                    Next
                  </button>
                </motion.div>
              )}
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