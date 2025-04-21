import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, BookMarked, Layers, Search } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ResearchCard from '../components/ResearchCard';

const Research: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  
  const categories = [
    { id: 'all', name: 'All Publications', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'books', name: 'Books', icon: <BookMarked className="w-5 h-5" /> },
    { id: 'projects', name: 'Projects', icon: <Layers className="w-5 h-5" /> },
    { id: 'analysis', name: 'Thematic Analysis', icon: <FileText className="w-5 h-5" /> }
  ];
  
  const researchItems = [
    {
      id: 1,
      category: 'books',
      title: 'Echoes of the Soul: The Timeless Wisdom of Kahlil Gibran',
      authors: 'Albert Francis',
      date: '2024',
      journal: 'Amazon KDP',
      abstract: 'An exploration of Kahlil Gibran\'s philosophical insights and timeless wisdom that continues to inspire generations worldwide.',
      link: 'https://www.amazon.in/dp/B0DSJMKK5R'
    },
    {
      id: 2,
      category: 'books',
      title: 'Foundations of Research: Philosophical Insights, Methods, and Applications',
      authors: 'Albert Francis',
      date: '2024',
      journal: 'Amazon KDP',
      abstract: 'A comprehensive guide to research methodologies, philosophical foundations, and practical applications for academic and professional researchers.',
      link: 'https://kdp.amazon.com/amazon-dp-action/in/dualbookshelf.marketplacelink/B0DSK3BD6P'
    },
    {
      id: 3,
      category: 'books',
      title: 'Remote Work Success: A Comprehensive Guide to Thriving in the Digital Workplace',
      authors: 'Albert Francis',
      date: '2024',
      journal: 'Amazon KDP',
      abstract: 'Strategic approaches and practical tips for professionals adapting to and excelling in remote work environments.',
      link: 'https://www.amazon.in/dp/B0DVQ3PB79'
    },
    {
      id: 4,
      category: 'books',
      title: 'The Collected Works of Kahlil Gibran: A Journey Through the Soul',
      authors: 'Albert Francis',
      date: '2024',
      journal: 'Amazon KDP',
      abstract: 'A curated collection of Kahlil Gibran\'s most profound works, offering readers a spiritual journey through his timeless philosophy.',
      link: 'https://www.amazon.in/dp/B0DVDG7MRJ'
    },
    {
      id: 5,
      category: 'books',
      title: 'The Exposure Triangle Explained',
      authors: 'Albert Francis',
      date: '2024',
      journal: 'Amazon KDP',
      abstract: 'A practical guide demystifying the fundamental relationship between aperture, shutter speed, and ISO in photography.',
      link: 'https://www.amazon.in/dp/B0DSK2FVSB'
    },
    {
      id: 6,
      category: 'books',
      title: 'AI for Students: Leveraging Artificial Intelligence for Enhanced Learning, Effective Assignments, and Successful Thesis Writing',
      authors: 'Albert Francis',
      date: '2024',
      journal: 'Amazon KDP',
      abstract: 'A student-focused guide on effectively utilizing AI tools to improve academic performance and research outcomes.',
      link: 'https://www.amazon.in/dp/B0F1KY7KLV'
    },
    {
      id: 7,
      category: 'books',
      title: 'Ancient Indian History for Civil Services & State Service Examinations: A Complete Guide with Concepts, Chronology, and Exam-Oriented Notes',
      authors: 'Albert Francis',
      date: '2024',
      journal: 'Amazon KDP',
      abstract: 'A comprehensive examination resource covering ancient Indian history with a focus on civil service preparation.',
      link: 'https://www.amazon.in/dp/B0F3SNBR54'
    },
    {
      id: 8,
      category: 'books',
      title: 'Mastering the Art of Conversation: Insights from 8 Transformative TEDx Talks on Communication, Connection, and Confidence',
      authors: 'Albert Francis',
      date: '2024',
      journal: 'Amazon KDP',
      abstract: 'Analysis and practical applications from impactful TEDx presentations on effective communication strategies.',
      link: 'https://www.amazon.in/dp/B0F2WXF5BT'
    },
    {
      id: 9,
      category: 'books',
      title: 'Wealth Beyond Riches: Unlock Financial Freedom with Behavioral Insights and Proven Money Rules',
      authors: 'Albert Francis',
      date: '2024',
      journal: 'Amazon KDP',
      abstract: 'A guide to achieving financial independence through behavioral psychology and established financial principles.',
      link: 'https://www.amazon.in/dp/B0F44CLSMF'
    },
    {
      id: 10,
      category: 'analysis',
      title: 'Premam: A Pastiche Movie – A Study on Postmodern Film Theory',
      authors: 'Albert Francis',
      date: '2023',
      journal: 'Film Studies Journal',
      abstract: 'An examination of postmodern elements in the Malayalam film Premam, analyzing its narrative structure, cultural references, and stylistic choices.',
      link: '#'
    },
    {
      id: 11,
      category: 'analysis',
      title: 'Critical Analysis: Impact of the Mollywood Movie Premam and Bollywood Movie 3 Idiots on Youth',
      authors: 'Albert Francis',
      date: '2023',
      journal: 'Cinema & Cultural Studies',
      abstract: 'A comparative study of two influential Indian films and their significant impact on youth culture, education perspectives, and social values.',
      link: '#'
    },
    {
      id: 12,
      category: 'analysis',
      title: 'Narrative and Genre Theory in Jersey (2022)',
      authors: 'Albert Francis',
      date: '2022',
      journal: 'Film Analysis Quarterly',
      abstract: 'An exploration of storytelling techniques and genre conventions in the sports drama Jersey, examining character arcs and thematic elements.',
      link: '#'
    },
    {
      id: 13,
      category: 'analysis',
      title: 'Social Change in the Romeo and Juliet Broadway Adaptation: A Healer for Disordered Society',
      authors: 'Albert Francis',
      date: '2023',
      journal: 'Theater & Performance Review',
      abstract: 'Analysis of how modern Broadway adaptations of Shakespeare\'s Romeo and Juliet address contemporary social issues and promote cultural healing.',
      link: '#'
    },
    {
      id: 14,
      category: 'analysis',
      title: 'Things Fall Apart: The Impact of Colonization on the Igbo Community',
      authors: 'Albert Francis',
      date: '2022',
      journal: 'Literary Analysis Journal',
      abstract: 'A critical examination of Chinua Achebe\'s portrayal of colonial disruption of indigenous cultures and traditional social structures.',
      link: '#'
    },
    {
      id: 15,
      category: 'projects',
      title: 'Leading by Influence: Impact on Faculty Culture, Academic Culture, Campus Culture, and Healthy Campus Climate',
      authors: 'Principal Investigator: Dr. Kennedy Andrew Thomas, Co-Investigators: Dr. Fr. Varghese K J, Dr. Sangeetha R',
      date: '2024-Present',
      journal: 'CHRIST University Research Initiative',
      abstract: 'An ongoing project examining leadership dynamics in higher education institutions and their influence on various aspects of campus culture.',
      link: '#'
    },
    {
      id: 16,
      category: 'projects',
      title: 'Production, Class Struggle, Narrative, and Reception Theories Across Genres',
      authors: 'Albert Francis',
      date: '2023',
      journal: 'Media Studies Research',
      abstract: 'An exploration of critical theory applications in media analysis, examining socioeconomic factors and audience reception across various genres.',
      link: '#'
    },
    {
      id: 17,
      category: 'projects',
      title: 'The Degradation of Female Characters Through Toxic Musicality in Narasimham',
      authors: 'Albert Francis',
      date: '2022',
      journal: 'Gender & Media Studies',
      abstract: 'Gender theory analysis examining the portrayal of female characters in the film Narasimham, with particular focus on musical sequences and representation.',
      link: '#'
    },
    {
      id: 18,
      category: 'projects',
      title: 'The Effect of OTT Platforms on the Indian Film Industry During the Pandemic',
      authors: 'Albert Francis',
      date: '2023',
      journal: 'Digital Media Research',
      abstract: 'A comparative study on how streaming platforms transformed distribution, consumption, and production patterns in Indian cinema during COVID-19.',
      link: '#'
    }
  ];

  const filteredItems = researchItems
    .filter(item => activeCategory === 'all' || item.category === activeCategory)
    .filter(item =>
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.authors.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const stats = {
      books: researchItems.filter(item => item.category === 'books').length,
      projects: researchItems.filter(item => item.category === 'projects').length,
      analysis: researchItems.filter(item => item.category === 'analysis').length,
    };

    useEffect(() => {
      setSearchQuery('');
      setIsSearchActive(false);
    }, [activeCategory]);
  
    return (
      <PageTransition>
        <div className="container-custom py-16">
          <SectionHeading 
            title="Publications & Projects" 
            subtitle="Exploring literature, film analysis, and educational research contributions."
          />
          
          {/* Stats Bar */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {Object.entries(stats).map(([category, count]) => (
              <motion.div 
                key={category}
                className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-100 dark:border-gray-800"
                whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">
                  {category === 'books' ? 'Books' : 
                   category === 'projects' ? 'Projects' : 
                   'Thematic Analysis'}
                </p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{count}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Category Filters and Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <AnimatePresence>
                {isSearchActive ? (
                  <motion.input
                    initial={{ width: 40, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    exit={{ width: 40, opacity: 0 }}
                    type="text"
                    placeholder="Search publications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-64 px-10 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    autoFocus
                  />
                ) : (
                  <motion.button
                    onClick={() => setIsSearchActive(true)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Search className="w-5 h-5" />
                  </motion.button>
                )}
              </AnimatePresence>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
              {isSearchActive && searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  ×
                </button>
              )}
            </motion.div>
          </div>
          
          {/* Results count */}
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Showing {filteredItems.length} of {researchItems.length} publications
          </motion.p>
          
          {/* Research Items */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory + searchQuery}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <ResearchCard
                    key={item.id}
                    title={item.title}
                    abstract={item.abstract}
                    authors={item.authors}
                    date={item.date}
                    journal={item.journal}
                    link={item.link}
                    index={index}
                  />
                ))
              ) : (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-gray-500 dark:text-gray-400">No publications found matching your criteria.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </PageTransition>
    );
};

export default Research;