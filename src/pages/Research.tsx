import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, BookMarked, Layers, Film, Search } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ResearchCard from '../components/ResearchCard';

const Research: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  
  const categories = [
    { id: 'all', name: 'All Publications', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'papers', name: 'Journal Articles', icon: <FileText className="w-5 h-5" /> },
    { id: 'books', name: 'Books & Chapters', icon: <BookMarked className="w-5 h-5" /> },
    { id: 'projects', name: 'Research Projects', icon: <Layers className="w-5 h-5" /> },
    { id: 'film', name: 'Film Studies & Analysis', icon: <BookMarked className="w-5 h-5" /> }
  ];
  
  const researchItems = [
    {
      id: 1,
      category: 'papers',
      title: 'Transforming Traditional Classrooms in Higher Education Using AI',
      authors: 'Albert Francis, Dr. Kennedy Andrew Thomas, Dr. Fr. Varghese K J, Dr. Sangeetha R',
      date: '2024',
      journal: 'Education and AI Review',
      abstract: 'This paper explores how AI-driven pedagogical tools transform higher education, improving student engagement through automated learning environments. The study provides empirical analysis from university implementations, discussing the benefits and challenges of AI in modern classrooms.',
      link: '#'
    },
    {
      id: 2,
      category: 'papers',
      title: 'Cultural Factors and Cognitive Processes in Higher Education',
      authors: 'Albert Francis, Dr. Kennedy Andrew Thomas',
      date: '2023',
      journal: 'Journal of Higher Education Studies',
      abstract: 'This research examines how cultural influences shape cognitive learning strategies, with a focus on international education models. It offers insights into classroom diversity, language barriers, and the role of institutional culture in shaping student outcomes.',
      link: '#'
    },
    {
      id: 3,
      category: 'books',
      title: 'Education: Navigating Through Transformation and Shift',
      authors: 'Edited by Dr. Kennedy Andrew Thomas, Contributions by Albert Francis',
      date: '2023',
      journal: 'Academic Press',
      abstract: 'A comprehensive examination of the changing dynamics in education, including AI intervention, pedagogical innovation, and institutional transformation. Albert Francis contributed a chapter on AI’s role in reshaping higher education.',
      link: '#'
    },
    {
      id: 4,
      category: 'projects',
      title: 'Leading by Influence: Impact on Faculty & Academic Culture',
      authors: 'Albert Francis, Dr. Kennedy Andrew Thomas, Research Team',
      date: '2024-Present',
      journal: 'CHRIST University Research Initiative',
      abstract: 'This project analyzes faculty leadership’s role in shaping institutional culture, academic integrity, and student success. Through qualitative and quantitative methods, the research provides an extensive understanding of faculty influence in higher education.',
      link: '#'
    },
    {
      id: 5,
      category: 'film',
      title: 'Screenplay Development in Interstellar (2014)',
      authors: 'Albert Francis',
      date: '2023',
      journal: 'Film Studies Journal',
      abstract: 'An in-depth study of Christopher Nolan’s screenplay techniques, exploring narrative complexity, time dilation mechanics, and emotional engagement in Interstellar. The research analyzes how the screenplay blends science and storytelling for an immersive cinematic experience.',
      link: '#'
    },
    {
      id: 6,
      category: 'film',
      title: 'Narratology and the Author Theory in Yeh Jawaani Hai Deewani (2013)',
      authors: 'Albert Francis',
      date: '2022',
      journal: 'Cinema & Literature Review',
      abstract: 'Examining Ayan Mukerji’s directorial vision through auteur theory, this study analyzes how personal experiences influence film narratives. The research delves into character arcs, thematic storytelling, and cinematic nostalgia.',
      link: '#'
    },
    {
      id: 7,
      category: 'film',
      title: 'Three-Plot Structure and Intertextuality in Premam (2015)',
      authors: 'Albert Francis',
      date: '2023',
      journal: 'Postmodern Film Theory Journal',
      abstract: 'A study on Premam’s non-linear storytelling, discussing its integration of multiple life phases, intertextual references, and postmodern cinematic elements that redefine narrative traditions in Indian cinema.',
      link: '#'
    }
  ];

  const filteredItems = researchItems
    .filter(item => activeCategory == 'all' || item.category == activeCategory)
    .filter(item =>
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.authors.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const stats = {
      papers: researchItems.filter(item => item.category === 'papers').length,
      books: researchItems.filter(item => item.category === 'books').length,
      projects: researchItems.filter(item => item.category === 'projects').length,
      film: researchItems.filter(item => item.category === 'film').length,
    };

    useEffect(() => {
      setSearchQuery('');
      setIsSearchActive(false);
    }, [activeCategory]);
  


  
  
    return (
      <PageTransition>
        <div className="container-custom py-16">
          <SectionHeading 
            title="Research & Publications" 
            subtitle="Exploring the intersection of AI, media studies, film analysis, and educational research."
          />
          
          {/* Stats Bar */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
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
                  {category.charAt(0).toUpperCase() + category.slice(1)}
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
