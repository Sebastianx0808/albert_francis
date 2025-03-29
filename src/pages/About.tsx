import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Award, BookOpen, Briefcase, GraduationCap, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageTransition>
      <div className="container-custom py-16 px-4 sm:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="A multidisciplinary professional blending academic research with creative media expertise."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Image & Info Card */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <img 
                src="/albert-francis.jpeg" 
                alt="Profile" 
                className="w-full rounded-xl shadow-lg object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-indigo-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">Albert Francis</h3>
                  <p className="text-white/90">Academic & Creative Professional</p>
                </div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -top-3 -right-3 h-16 w-16 bg-amber-400 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 h-20 w-20 bg-purple-400 rounded-full opacity-60 blur-xl"></div>
            </div>
            
            {/* Qualifications Card */}
            <motion.div 
              className="mt-8 card bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg flex items-center">
                <span className="inline-block w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-2">
                  <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </span>
                Qualifications
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors duration-200">
                  <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-gray-700 dark:text-gray-300">PhD in Media Studies</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors duration-200">
                  <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-gray-700 dark:text-gray-300">Published Researcher</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors duration-200">
                  <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-gray-700 dark:text-gray-300">10+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors duration-200">
                  <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-gray-700 dark:text-gray-300">Visiting Professor</span>
                </div>
              </div>
            </motion.div>
            
            {/* Social Media Links */}
            <div className="mt-6 flex justify-center space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/albert-francis-a43010137" className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="albertfrancis95@gmail.com" className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            {/* Download CV Button */}
            <div className="mt-8">
              <a 
                href="/albert-francis-resume.pdf" 
                className="group w-full flex items-center justify-center py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-medium shadow-sm hover:shadow-indigo-500/30 transition-all duration-300"
              >
                Download CV 
                <Download className="ml-2 w-4 h-4 group-hover:animate-bounce" />
              </a>
            </div>
          </motion.div>
          
          {/* Bio Content */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Biography Section */}
            <motion.div 
              className="card bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 inline-flex items-center">
                <span className="relative">
                  Biography
                  <span className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                </span>
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  I am a multidisciplinary professional with expertise spanning academic research, digital media production, and creative direction. As a PhD scholar in Media Studies with experience in academic and creative fields, I bring a unique perspective that bridges theory and practice.
                </p>
                
                <p className="leading-relaxed">
                  My research focuses on the intersection of emerging technologies, digital media, digital tools, and media ethics. I have published books and presented my work at international conferences. I am an adjunct faculty member and research assistant at CHRIST (Deemed To Be University), Bangalore.
                
                <div className="relative p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500 my-6">
                  <p className="italic text-indigo-800 dark:text-indigo-300">
                    "My goal is to bridge the gap between theoretical understanding and practical application of AI with arts and humanities and social sciences, creating intellectually rigorous and creatively engaging work."
                  </p>
                  <div className="absolute -top-2 -right-2 h-8 w-8 bg-amber-300 rounded-full opacity-50 blur-md"></div>
                </div>
                
                <p className="leading-relaxed">
                  Beyond academia, I am an active practitioner in the creative arts. My work includes music production, AV production, and multimedia performances. I am particularly interested in projects that challenge conventional boundaries between disciplines.
                </p>
                
                <p className="leading-relaxed">
                  I regularly conduct workshops and masterclasses on digital media and tools, AI tools for education, integration of AI in arts and humanities and social sciences with creative research methodologies, and interdisciplinary approaches. These educational initiatives aim to empower the next generation of students and researchers with both theoretical knowledge and practical skills.
                </p>
              </div>
            </motion.div>
            
            {/* Interests Cards Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="card bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-bl-full opacity-70"></div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                  <span className="inline-block w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-2">
                    <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  Research Interests
                </h4>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 relative z-10">
                  {["Digital Media Ethics", "Emerging Technologies", "Interactive Storytelling", "Media Archaeology", "Cultural Theory"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="card bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-purple-100 dark:bg-purple-900/30 rounded-bl-full opacity-70"></div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                  <span className="inline-block w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-2">
                    <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </span>
                  Creative Practice
                </h4>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 relative z-10">
                  {["Documentary Filmmaking", "Interactive Installations", "Multimedia Performance", "Sound Design", "Experimental Media"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Timeline Section */}
            <motion.div 
              className="mt-8 card bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 inline-flex items-center">
                <span className="inline-block w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-2">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </span>
                Career Highlights
              </h4>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-amber-500 before:to-purple-500">
                {[
                  { year: "2023", title: "Visiting Professor", desc: "University of Creative Arts", color: "purple" },
                  { year: "2021", title: "Published Book", desc: "Digital Media Ethics in Practice", color: "amber" },
                  { year: "2019", title: "Exhibition Curator", desc: "International Media Arts Festival", color: "indigo" },
                  { year: "2016", title: "PhD Completion", desc: "Media Studies & Digital Culture", color: "purple" }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                      <span className={`w-3.5 h-3.5 rounded-full bg-${item.color}-500`}></span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm group-hover:shadow-md group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-all duration-300">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <h5 className="font-bold text-gray-900 dark:text-white">{item.title}</h5>
                        <span className={`font-medium text-sm px-2 py-0.5 rounded bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600 dark:text-${item.color}-400`}>{item.year}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {[
                { to: "/research", label: "Research & Publications", icon: BookOpen },
                { to: "/creative-works", label: "Creative Works", icon: Briefcase },
                { to: "/contact", label: "Get in Touch", icon: Mail }
              ].map((btn, index) => (
                <Link 
                  key={index}
                  to={btn.to} 
                  className="group flex items-center px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 mr-2 transition-colors duration-300">
                    <btn.icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">{btn.label}</span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
