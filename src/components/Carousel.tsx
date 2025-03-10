import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface CarouselProps {
  items: {
    id: number;
    image: string;
    title: string;
    description?: string;
    link?: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  showPauseButton?: boolean;
  imageHeight?: string;
  darkOverlay?: boolean;
  animation?: 'slide' | 'fade' | 'zoom';
  thumbnails?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlay = true, 
  interval = 5000,
  showControls = true,
  showIndicators = true,
  showPauseButton = true,
  imageHeight = "h-64 md:h-96",
  darkOverlay = true,
  animation = 'slide',
  thumbnails = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Create animations based on selected type
  const getVariants = useCallback(() => {
    switch(animation) {
      case 'fade':
        return {
          enter: { opacity: 0 },
          center: { opacity: 1 },
          exit: { opacity: 0 }
        };
      case 'zoom':
        return {
          enter: { opacity: 0, scale: 0.8 },
          center: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.2 }
        };
      case 'slide':
      default:
        return {
          enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
          }),
          center: {
            x: 0,
            opacity: 1
          },
          exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0
          })
        };
    }
  }, [animation]);

  const variants = getVariants();

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="space-y-4">
      <div 
        className="relative overflow-hidden rounded-xl shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative ${imageHeight} w-full`}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.5 }}
              className="absolute inset-0"
            >
              <img 
                src={currentItem.image} 
                alt={currentItem.title}
                className="w-full h-full object-cover"
              />
              {darkOverlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                  {currentItem.title}
                </h3>
                {currentItem.description && (
                  <p className="text-white/90 text-sm md:text-base max-w-2xl">
                    {currentItem.description}
                  </p>
                )}
                {currentItem.link && (
                  <a 
                    href={currentItem.link}
                    className="inline-block mt-3 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-md transition-colors text-sm font-medium"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-white/70"
          initial={{ width: "0%" }}
          animate={{ 
            width: "100%", 
            transition: { 
              duration: interval / 1000, 
              ease: "linear",
              repeat: isPaused ? 0 : 1,
              repeatType: "loop"
            }
          }}
          key={`progress-${currentIndex}-${isPaused}`}
        />

        {/* Navigation Controls */}
        {showControls && (
          <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Pause/Play Button */}
        {showPauseButton && (
          <button
            onClick={togglePause}
            className={`absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
        )}

        {/* Indicators */}
        {showIndicators && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {thumbnails && (
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 relative transition-all duration-300 ${
                currentIndex === index 
                  ? 'ring-2 ring-blue-500 ring-offset-2' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={item.image} 
                alt={`Thumbnail for ${item.title}`}
                className="h-16 w-24 object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;