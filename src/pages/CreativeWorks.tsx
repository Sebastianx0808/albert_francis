import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Music, Monitor, Play } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import Carousel from '../components/Carousel';

const CreativeWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('films');

  
  const carouselItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: '“Don’t Do” – Short Film',
      description: 'I served as the Music Director for this short film, blending emotional storytelling with my original score.'
    },
    {
      id: 2,
      image: '/MacGuffin.jpg',
      title: 'MacGuffin International Film Festival',
      description: 'I co-directed this large-scale festival, featuring short films, workshops, and industry talks that I helped organize and promote.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1510921304881-1ebd01cec79e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Battle of the Bands Achievements',
      description: 'I have won multiple first-place finishes and special awards in national-level band competitions across Chennai and Bangalore.'
    }
  ];

  
  const tabs = [
    { id: 'films', name: 'Films & Video', icon: <Film className="w-5 h-5" /> },
    { id: 'festivals', name: 'Festivals & Workshops', icon: <Monitor className="w-5 h-5" /> },
    { id: 'sound', name: 'Sound & Music', icon: <Music className="w-5 h-5" /> }
  ];

  
  const filmWorks = [
    {
      title: 'Don’t Do',
      year: '2019',
      duration: '10 min',
      role: 'Music Director',
      description:
        'I composed and arranged the musical score for this short film, reinforcing its themes of peer pressure and personal boundaries.',
      image: 'https://images.unsplash.com/photo-1484430967773-70a86e488910?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#'
    }
  ];

  // -- FESTIVALS & WORKSHOPS --
  const festivalWorks = [
    {
      title: 'MacGuffin International Film Festival',
      year: '2023',
      location: 'CHRIST (Deemed to be University), Pune Lavasa Campus',
      role: 'Director & Organising Committee Chairman',
      description:
        'Planned and executed a large-scale film festival featuring short films, all-India photography contests, and master classes from New York Film Academy professionals. Promoted emerging filmmakers, with Albert overseeing budgets, scheduling, and overall creative direction.',
      image: 'MacGuffin.jpg',
      link: '#'
    },
    {
      title: 'Short Film Festival (NYFA Collaboration)',
      year: '2024',
      location: 'CHRIST (Deemed to be University), Bangalore',
      role: 'Organizing Committee Member',
      description:
        'Coordinated a national-level short film event in association with the New York Film Academy, providing a platform for student filmmakers to showcase their work. Responsibilities included event logistics, judging criteria, and speaker sessions with film experts.',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      title: 'Video Production & Content Creation Workshop',
      year: '2024',
      location: 'Department of Media Studies, CHRIST University, Bangalore',
      role: 'Coordinator',
      description:
        'Led a workshop focusing on camera operations, post-production workflows, and creative storytelling methods. Guided students through hands-on activities and project-based learning to enhance their filmmaking skills.',
      image: 'https://images.unsplash.com/photo-1610279509863-b5bf4ec1762b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#'
    }
  ];

  
  const soundWorks = [
    {
      title: 'Battle of the Bands Achievements',
      year: '2018–2019',
      duration: 'Multiple events',
      role: 'Guitarist & Vocalist',
      description:'I performed in various bands, earning top placements at SRM College, M.O.P College, MCC College, and becoming a finalist at Forum Rock-On 2018. I also received the Best Instrumentalist award at Loyola Hostel.',
      image: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#' 
    },
    {
      title: 'Tamil Nadu Jesus Youth Jubilee',
      year: '2019',
      duration: 'Audio-Visual Ministry',
      role: 'Music Director',
      description:
        'Composed and arranged music for the Tamil Nadu Jesus Youth Jubilee, leading the Audio-Visual Ministry. Oversaw musical selections, coordinating live performances and recorded tracks, enhancing the event’s spiritual atmosphere.',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      title: 'Music Director for Theatrical Productions',
      year: '2019',
      duration: 'Various productions',
      role: 'Music Director',
      description:
        'Served as Music Director for the English Theatre Society of Loyola College. Managed composition and live performance for theatrical shows, blending vocals, guitar, and instrumental arrangements to enhance storytelling on stage.',
      image: 'https://images.unsplash.com/photo-1497874518914-06e8bf7d4d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#'
    }
  ];

  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'films':
        return (
          <div className="space-y-12">
            {filmWorks.map((work, index) => (
              <WorkItem key={index} work={work} index={index} type="film" />
            ))}
          </div>
        );
      case 'festivals':
        return (
          <div className="space-y-12">
            {festivalWorks.map((work, index) => (
              <WorkItem key={index} work={work} index={index} type="installation" />
            ))}
          </div>
        );
      case 'sound':
        return (
          <div className="space-y-12">
            {soundWorks.map((work, index) => (
              <WorkItem key={index} work={work} index={index} type="sound" />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PageTransition>
      <div className="container-custom py-16">
        <SectionHeading
          title="Creative Works"
          subtitle="A portfolio of films, festivals, and musical achievements by Albert Francis."
        />

        {/* Featured Works Carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Works
          </h3>
          <Carousel items={carouselItems} />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </PageTransition>
  );
};

interface WorkItemProps {
  work: {
    title: string;
    year: string;
    duration?: string;
    location?: string;
    medium?: string;
    role: string;
    description: string;
    image: string;
    link?: string;
  };
  index: number;
  type: 'film' | 'installation' | 'sound' | 'photography';
}

const WorkItem: React.FC<WorkItemProps> = ({ work, index, type }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="md:col-span-1">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full aspect-video object-cover"
          />
          {type === 'film' && (
            <a
              href={work.link}
              className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
              aria-label={`Play ${work.title}`}
            >
              <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                <Play className="w-8 h-8 text-white" />
              </div>
            </a>
          )}
        </div>
      </div>

      <div className="md:col-span-2">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {work.title}{' '}
          <span className="text-gray-500 dark:text-gray-400">
            ({work.year})
          </span>
        </h3>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <span className="font-medium text-gray-900 dark:text-white">
              Role:
            </span>{' '}
            {work.role}
          </div>

          {work.duration && (
            <div>
              <span className="font-medium text-gray-900 dark:text-white">
                Duration:
              </span>{' '}
              {work.duration}
            </div>
          )}

          {work.location && (
            <div>
              <span className="font-medium text-gray-900 dark:text-white">
                Location:
              </span>{' '}
              {work.location}
            </div>
          )}

          {work.medium && (
            <div>
              <span className="font-medium text-gray-900 dark:text-white">
                Medium:
              </span>{' '}
              {work.medium}
            </div>
          )}
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {work.description}
        </p>

        {work.link && (
          <a
            href={work.link}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            {type === 'film'
              ? 'Watch Film'
              : type === 'sound'
              ? 'Listen'
              : 'View Project'}{' '}
            <Play className="ml-1 w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CreativeWorks;
