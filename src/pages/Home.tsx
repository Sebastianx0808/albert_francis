import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, BookOpen, Film, Lightbulb, ExternalLink, Star, Calendar, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  // Features with enhanced descriptions and hover effects
  const features = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: 'Digital Media',
      description: 'Creating innovative digital experiences through interactive design and emerging technologies.',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Academic Research',
      description: 'Exploring the intersection of theory and practice through rigorous academic inquiry.',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: 'Creative Direction',
      description: 'Bringing artistic vision to life through film, performance, and multimedia projects.',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Workshops & Teaching',
      description: 'Sharing knowledge and fostering creativity through educational initiatives and workshops.',
      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
      iconColor: 'text-amber-600 dark:text-amber-400'
    }
  ];

  // Featured works with additional metadata and hover effects
  const featuredWorks = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: '"Don`t Do" – Short Film',
      description: 'I served as the Music Director for this short film, blending emotional storytelling with my original score.',
      link: '/creative-works',
      category: 'Film & Music',
      year: '2023',
      accolades: 'Official Selection - Independent Short Film Festival'
    },
    {
      id: 2,
      image: '/MacGuffin.jpg',
      title: 'MacGuffin International Film Festival',
      description: 'I co-directed this large-scale festival, featuring short films, workshops, and industry talks that I helped organize and promote.',
      link: '/creative-works',
      category: 'Event Direction',
      year: '2022-2024',
      accolades: 'Over 5,000 attendees annually'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1510921304881-1ebd01cec79e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Battle of the Bands Achievements',
      description: 'I have won multiple first-place finishes and special awards in national-level band competitions across Chennai and Bangalore.',
      link: '/creative-works',
      category: 'Music Performance',
      year: '2019-2023',
      accolades: '3x Gold Medalist'
    }
  ];

  // Stats Section Data
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '25+', label: 'Academic Publications' },
    { value: '12', label: 'Industry Awards' }
  ];

  // Animation for section headers
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const staggerVariants = {
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
      transition: { duration: 0.5 }
    }
  };

  // Scroll reveal animation
  const scrollReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <PageTransition>
      {/* Hero Section - Enhanced with more dynamic elements */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Animation - Enhanced with more elements and parallax effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-br from-primary-100/40 to-secondary-100/40 dark:from-primary-900/30 dark:to-secondary-900/30" />
          
          {/* Animated Circles - More varied and interesting */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${i % 2 === 0 ? 'bg-primary-500/10 dark:bg-primary-500/5' : 'bg-secondary-500/10 dark:bg-secondary-500/5'}`}
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                top: `${Math.random() * 120 - 10}%`,
                left: `${Math.random() * 120 - 10}%`,
                filter: 'blur(2px)'
              }}
              animate={{
                x: [0, Math.random() * 150 - 75],
                y: [0, Math.random() * 150 - 75],
                scale: [1, 1 + Math.random() * 0.2]
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Bridging <span className="text-primary-600 dark:text-primary-400">Academia</span>, <span className="text-secondary-600 dark:text-secondary-400">Media</span>, and <span className="text-indigo-600 dark:text-indigo-400">Creative Arts</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              A multidisciplinary portfolio showcasing research, digital media projects, and creative works that explore the boundaries between theory and practice. Discover how I blend analytical thinking with creative expression.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <Link to="/portfolio" className="btn-primary group">
                View Portfolio <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline group">
                Get in Touch <ExternalLink className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex items-center flex-col">
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</span>
            <motion.div 
              className="w-1 h-8 bg-gray-400 dark:bg-gray-600 rounded-full"
              animate={{ height: [8, 24, 8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>


      {/* Features Section - Enhanced with color coding and interactions */}
      <section className="py-24 bg-gray-50 dark:bg-dark-200">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold mb-2 block">What I Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Areas of Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Combining technical knowledge with creative insight to deliver compelling experiences across multiple disciplines.</p>
          </motion.div>
          
          <motion.div 
            ref={ref}
            variants={staggerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="card p-6 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className={`inline-flex items-center justify-center p-3 ${feature.bgColor} rounded-full ${feature.iconColor} mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                <div className="w-12 h-1 bg-primary-600/30 dark:bg-primary-400/30 rounded-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section - Enhanced with metadata and hover effects */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold mb-2 block">Portfolio Highlights</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                A selection of recent projects spanning research, media production, and creative direction that showcase my multidisciplinary approach.
              </p>
            </motion.div>
            
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 md:mt-0"
            >
              <Link to="/portfolio" className="btn-outline group">
                View All Work <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <motion.div 
                key={work.id}
                className="card overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={work.image}
                    alt={work.title} 
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3 bg-primary-600/90 text-white text-xs font-medium px-2 py-1 rounded">
                    {work.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{work.year}</span>
                    {work.accolades && (
                      <>
                        <span className="mx-2">•</span>
                        <Award className="w-4 h-4 mr-1" />
                        <span>{work.accolades}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {work.description}
                  </p>
                  <Link 
                    to={work.link}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center group-hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section - Enhanced with more dynamic elements */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/5 rounded-full"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Interested in Collaboration?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something exceptional together.
          </motion.p>
          
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="btn bg-white text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 group"
            >
              Get in Touch <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="btn border-2 border-white/80 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Learn About Me
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;