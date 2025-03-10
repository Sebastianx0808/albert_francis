import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, ExternalLink, BookOpen } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const Workshops: React.FC = () => {
  const workshopsOrganized = [
    {
      title: 'Video Production & Content Creation Workshop',
      date: '24 September 2024',
      location: 'Department of Media Studies, CHRIST University (Bangalore)',
      description: 'Training students in video production techniques and content creation strategies for The Press Project.',
      image: 'https://via.placeholder.com/800x500'
    },
    {
      title: 'National-Level Workshop: "Initiation into Journalistic Writing and Ad Writing"',
      date: '',
      location: 'Department of English, Loyola College (Chennai)',
      description: 'Focused on honing journalistic and ad writing skills for students, covering various writing frameworks and best practices.',
      image: 'https://via.placeholder.com/800x500'
    },
    {
      title: 'Workshop on Quality Assurance Processes for Academic Officers',
      date: '',
      location: 'Pune Lavasa Campus (CHRIST University) – "The Hub of Analytics"',
      description: 'Discussed academic quality standards, IQAC methodologies, and best practices in documentation.',
      image: 'https://via.placeholder.com/800x500'
    },
    {
      title: 'Panel Discussion & Workshop: Future of Education and Resetting a Continuum of Migration',
      date: '4–5 October 2024',
      location: 'CHRIST University (Bangalore)',
      description: 'Addressed educational reforms, migration challenges, and interdisciplinary learning approaches in a rapidly changing global environment.',
      image: 'https://via.placeholder.com/800x500'
    },
    {
      title: 'Workshop on Music and Sound Design by Prof. Issac Newton (FTII)',
      date: '30 September 2023',
      location: '',
      description: 'Explored creative approaches to music composition, sound engineering, and film audio design.',
      image: 'https://via.placeholder.com/800x500'
    }
  ];

  const conferencesOrganized = [
    {
      title: 'Mélange 2022: Student-Led Postgraduate International Conference',
      role: 'Organizer',
      date: '2022',
      location: 'Department of English and Cultural Studies, CHRIST University (Bangalore)',
      topic: 'Theme: “Digital Space, Ethics, and Digital Humanities”',
      image: 'https://via.placeholder.com/800x500'
    },
    {
      title: 'Mélange 2021: Student-Led Postgraduate International Conference',
      role: 'Organizer',
      date: '2021',
      location: 'Department of English and Cultural Studies, CHRIST University (Bangalore)',
      topic: 'Theme: “Memory and Narrativization”',
      image: 'https://via.placeholder.com/800x500'
    },
    {
      title: 'LET US DREAM Triennial International Conference 2023',
      role: 'Organizer',
      date: '3–5 November 2023',
      location: 'CHRIST University (Bangalore)',
      topic: 'Theme: “Empowered Communities: Strengthening Connections for a Sustainable Future”',
      image: 'https://via.placeholder.com/800x500'
    },
    {
      title: 'A Conference on Wheels: “Bangalore – A Palimpsest: Revisiting Sites of Colonial Histories”',
      role: 'Organizer',
      date: '',
      location: 'Department of English and Cultural Studies, CHRIST University (Bangalore)',
      topic: 'Special Note: Included a project presentation on Chinnaswamy Stadium, Bangalore.',
      image: 'https://via.placeholder.com/800x500'
    }
  ];

  const guestLecturesOrganized = [
    {
      title: 'Grammar and Language Soft Skills',
      institution: 'Department of Languages, CHRIST University (Pune Lavasa Campus)',
      date: '6 September 2023',
      description: 'Focused on refining grammar, language proficiency, and communication skills.'
    },
    {
      title: 'Note-Making and Newspaper Report',
      institution: 'Department of Languages, CHRIST University (Pune Lavasa Campus)',
      date: '13 September 2023',
      description: 'Highlighted effective note-taking strategies and best practices in writing concise newspaper reports.'
    },
    {
      title: 'Travel and Photography by Col. Krishnandu Sarkar (Retd.)',
      institution: 'Department of Languages, CHRIST University (Pune Lavasa Campus)',
      date: '20 September 2023',
      description: 'Insights into travel experiences and photography tips, emphasizing storytelling through images.'
    }
  ];

  const guestLecturesDelivered = [
    {
      title: 'Artificial Intelligence in Education',
      institution: 'CHRIST University (Bangalore)',
      date: '30 August 2024',
      description: 'Integrating AI tools and methodologies in modern education for school teachers.'
    },
    {
      title: 'Art and Literature in New Media',
      institution: 'Media and Journal Club, Department of Data Science, CHRIST University (Pune Lavasa Campus)',
      date: '',
      description: 'Examined how new media platforms reshape artistic expression and literary engagement.'
    },
    {
      title: 'Using Art and Literature for Community Service',
      institution: 'Community Service and Social Action Club, Department of Data Science, CHRIST University (Pune Lavasa Campus)',
      date: '',
      description: 'Showcased the potential of art and literature to drive positive community impact and social action.'
    },
    {
      title: 'Film Analysis and Cinematic Techniques (MacGuffin Film Club)',
      institution: 'CHRIST University (Pune Lavasa Campus)',
      date: '',
      description: `A series of lectures covering aerial cinematography, narratology, screenplay structure, and production design in films like Top Gun: Maverick (2022), Yeh Jawaani Hai Deewani (2013), The Dark Knight (2008), Premam (2015), Everything Everywhere All at Once (2022), Vikram (2022), Interstellar (2014), 2018: Everyone is a Hero (2023), and Zindagi Na Milegi Dobara (2011).`
    }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageTransition>
      <div className="container-custom py-16 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 dark:bg-primary-900/20 rounded-full -z-10 blur-3xl opacity-50"></div>
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-secondary-100 dark:bg-secondary-900/20 rounded-full -z-10 blur-3xl opacity-40"></div>

        <SectionHeading 
          title="Workshops & Conferences" 
          subtitle="Educational initiatives, speaking engagements, and collaborative events exploring media theory and practice."
        />

        {/* Banner */}
        <motion.div 
          className="relative overflow-hidden rounded-2xl mb-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Exploring Knowledge Through Collaboration</h2>
              <p className="text-white/80 text-lg mb-6">Join us in our journey of educational excellence through workshops, conferences, and lectures that bridge theory and practice.</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  5+ Workshops
                </span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Calendar className="w-16 h-16 text-white" />
                <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Workshops Organized */}
        <section className="mb-24">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <Users className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
              Workshops Organized
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {workshopsOrganized.map((workshop, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-52 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                      <Calendar className="w-3 h-3 mr-1" />
                      {workshop.date || 'Date TBA'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {workshop.title}
                    </h3>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                      <ExternalLink className="w-3 h-3 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{workshop.location || 'Location TBD'}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    {workshop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Conferences Organized */}
        <section className="mb-24">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
              Conferences Organized
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {conferencesOrganized.map((conference, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10 md:hidden"></div>
                    <img
                      src={conference.image}
                      alt={conference.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-secondary-500 text-white rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 relative">
                    <div className="absolute top-6 right-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full">
                        {conference.role}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 pr-24">
                      {conference.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{conference.date || 'Date TBA'}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{conference.location}</span>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                        Conference Theme:
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {conference.topic}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Guest Lectures Organized */}
        <section className="mb-24">
          <motion.h2
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
            Guest Lectures Organized
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {guestLecturesOrganized.map((lecture, index) => (
              <motion.div
                key={index}
                className="card p-6 border-l-4 border-primary-500 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {lecture.title}
                  </h3>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                    <BookOpen className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </span>
                </div>
                <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
                  {lecture.institution}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {lecture.date || 'Date TBA'}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {lecture.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Guest Lectures Delivered by Me */}
        <section className="mb-24">
          <motion.h2
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
            Guest Lectures Delivered by Me
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {guestLecturesDelivered.map((lecture, index) => (
              <motion.div
                key={index}
                className="card p-6 border-l-4 border-secondary-500 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {lecture.title}
                  </h3>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900/30">
                    <BookOpen className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                  </span>
                </div>
                <div className="text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-1">
                  {lecture.institution}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {lecture.date || 'Date TBA'}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {lecture.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call-to-Action Section */}
        <motion.section 
          className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Looking to organize a workshop, conference, or lecture? Let's work together to create an engaging and educational experience for your audience.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Workshops;