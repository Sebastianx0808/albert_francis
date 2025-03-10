import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search, ArrowUpRight, Bookmark, BookmarkCheck } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<"grid" | "compact">("grid");

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = localStorage.getItem("portfolioFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem("portfolioFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "research", name: "Research & Academic" },
    { id: "film", name: "Film & Media" },
    { id: "music", name: "Musical Innovation" },
    { id: "interactive", name: "Workshops & Events" },
    { id: "digital", name: "Digital Content & Engagement" },
  ];

  const projects = [
    {
      id: 1,
      title: "Expressive AI in Cinema",
      description:
        "My PhD project explores AI-driven storytelling, pushing the boundaries of how artificial intelligence can shape cinematic narratives.",
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["research"],
      link: "#",
      featured: true,
      date: "2024",
      author: "Dr. Alex Chen"
    },
    {
      id: 2,
      title: "Premam: A Pastiche Movie",
      description:
        "A deep dive into postmodern film theory, analyzing Premam's use of pastiche, nostalgia, and non-linear storytelling.",
      image:
        "https://images.unsplash.com/photo-1574717024453-354056adc7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["research", "film"],
      link: "#",
      repoLink: "https://github.com/username/premam-analysis",
      date: "2023"
    },
    {
      id: 3,
      title: "The Dark Knight: Story Structure Analysis",
      description:
        "Breaking down Dan Harmon's story circle and its role in the storytelling excellence of The Dark Knight.",
      image:
        "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["film"],
      link: "#",
      date: "2022",
      author: "Film Analysis Team"
    },
    {
      id: 4,
      title: "Soundscapes: Music for Theater",
      description:
        "Composed and directed original music for theatrical productions and cultural events.",
      image:
        "https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["music"],
      link: "#",
      featured: true,
      date: "2023-2024"
    },
    {
      id: 5,
      title: "MacGuffin International Film Festival",
      description:
        "Founder and Director of a festival celebrating independent and experimental cinema.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["interactive", "film"],
      link: "#",
      repoLink: "https://github.com/username/macguffin-festival",
      date: "2023",
      author: "Festival Committee"
    },
    {
      id: 6,
      title: "Workshops on AI & Film",
      description:
        "Led hands-on workshops exploring AI's role in cinema, storytelling, and media production.",
      image:
        "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["interactive"],
      link: "#",
      date: "2022-2023"
    },
    {
      id: 7,
      title: "Music & Narrative: A Film Score Experiment",
      description:
        "Exploring how music composition influences storytelling and emotional engagement in films.",
      image:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["music", "research"],
      link: "#",
      date: "2024",
      author: "Music Research Group"
    },
    {
      id: 8,
      title: "Blog Series: The Evolution of Storytelling",
      description:
        "Wrote and published a blog series analyzing the intersection of AI, literature, and cinema.",
      image:
        "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["digital"],
      link: "#",
      featured: true,
      date: "2023-2024"
    },
  ];

  // Apply filters and search
  const filteredProjects = projects
    .filter(project => {
      // Category filter
      const categoryMatch = filter === "all" || project.tags.includes(filter);
      
      // Search filter
      const searchMatch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Favorites filter
      const favoriteMatch = !showFavoritesOnly || favorites.includes(project.id);
      
      return categoryMatch && searchMatch && favoriteMatch;
    });

  // Container variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    },
    exit: { 
      opacity: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <PageTransition>
      <div className="container-custom py-16">
        <SectionHeading
          title="Portfolio"
          subtitle="A curated collection of research projects, creative works, and interactive experiences spanning various media forms."
        />

        {/* Controls Bar */}
        <motion.div
          className="mb-8 bg-gray-50 dark:bg-dark-200 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-dark-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Search and View Toggles */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-200 dark:border-dark-400 rounded-md bg-white dark:bg-dark-300 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* View Controls */}
            <div className="flex items-center gap-2">
              {/* Grid/Compact View Toggle */}
              <div className="flex items-center bg-gray-200 dark:bg-dark-300 rounded-md p-1">
                <button 
                  onClick={() => setActiveView("grid")}
                  className={`px-3 py-1 rounded ${
                    activeView === "grid" 
                      ? "bg-white dark:bg-dark-400 shadow-sm" 
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  Grid
                </button>
                <button 
                  onClick={() => setActiveView("compact")}
                  className={`px-3 py-1 rounded ${
                    activeView === "compact" 
                      ? "bg-white dark:bg-dark-400 shadow-sm" 
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  Compact
                </button>
              </div>
              
              {/* Favorites Toggle */}
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  showFavoritesOnly
                    ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    : "bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-400"
                }`}
              >
                {showFavoritesOnly ? (
                  <>
                    <BookmarkCheck className="w-4 h-4" />
                    <span>Favorites</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>All</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center mr-2 text-gray-700 dark:text-gray-300">
              <Filter className="w-4 h-4 mr-1" />
              <span className="text-sm">Filter:</span>
            </div>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? "bg-primary-600 text-white shadow-sm"
                    : "bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-400"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Stats */}
        <motion.div 
          className="mb-6 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            Showing <span className="font-medium text-gray-700 dark:text-gray-300">{filteredProjects.length}</span> of {projects.length} projects
          </div>
          
          {searchQuery && (
            <div>
              Search results for: <span className="font-medium text-primary-600 dark:text-primary-400">"{searchQuery}"</span>
            </div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${filter}-${searchQuery}-${showFavoritesOnly}-${activeView}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={activeView === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-4"
            }
          >
            {filteredProjects.map((project, index) => (
              <div key={project.id} className={activeView === "compact" ? "w-full" : ""}>
                {activeView === "grid" ? (
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags.map(tag => {
                      const category = categories.find(cat => cat.id === tag);
                      return category ? category.name.replace(" & ", " ").split(" ")[0] : tag;
                    })}
                    link={project.link}
                    repoLink={project.repoLink}
                    date={project.date}
                    author={project.author}
                    featured={project.featured}
                    index={index}
                  />
                ) : (
                  <motion.div 
                    className="flex bg-white dark:bg-dark-200 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-dark-300 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="w-24 h-24 sm:w-36 sm:h-36 flex-shrink-0">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow p-4 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                          {project.title}
                        </h3>
                        <button 
                          onClick={() => toggleFavorite(project.id)}
                          className="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400"
                        >
                          {favorites.includes(project.id) ? (
                            <BookmarkCheck className="w-5 h-5" />
                          ) : (
                            <Bookmark className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mt-auto mb-2">
                        {project.tags.map((tag, i) => {
                          const category = categories.find(cat => cat.id === tag);
                          const displayName = category ? category.name.replace(" & ", " ").split(" ")[0] : tag;
                          
                          return (
                            <span 
                              key={i} 
                              className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 rounded"
                            >
                              {displayName}
                            </span>
                          );
                        })}
                      </div>
                      
                      {project.date && (
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {project.date}
                        </div>
                      )}
                      
                      {project.link && (
                        <a 
                          href={project.link}
                          className="mt-2 inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          View project <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16 bg-gray-50 dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchQuery ? (
                <>No projects match your search for "<span className="font-medium">{searchQuery}</span>".</>
              ) : (
                <>No projects match the selected filters.</>
              )}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setFilter("all");
                  setSearchQuery("");
                  setShowFavoritesOnly(false);
                }}
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Reset filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
};

export default Portfolio;