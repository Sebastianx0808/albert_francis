import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle, Ghost, Rocket, PartyPopper, Wand2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFound: React.FC = () => {
  const [sassyMessages] = useState([
    "This page is on a coffee break. Try again when it's had its espresso.",
    "Abandon hope all ye who enter here... or just try a different page.",
    "404: Page not found. The internet gremlins strike again!",
    "This is like that movie Inception - a page within a page that doesn't exist.",
    "Our hamster escaped with the URL. Chase him on TikTok @RunningRodent!",
    "This page is so 2020. It disappeared unexpectedly.",
    "You've found the secret void! Prize: This disappointing message.",
    "Plot twist! This is actually the page you're looking for. Mind blown!",
  ]);

  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [konamiCode] = useState(['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']);
  const [enteredKeys, setEnteredKeys] = useState<string[]>([]);

  // Rotate through funny messages
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMsgIndex((prev) => (prev + 1) % sassyMessages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Konami code listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setEnteredKeys((prev) => [...prev.slice(-konamiCode.length + 1), e.key]);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (enteredKeys.join(' ') === konamiCode.join(' ')) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 5000);
    }
  }, [enteredKeys]);

  return (
    <PageTransition>
      <div className="container-custom py-16 min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-lg relative">
          {/* Easter Egg */}
          <AnimatePresence>
            {showEasterEgg && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 360, -360, 0] }}
                exit={{ scale: 0 }}
                className="absolute -top-20 left-1/2 -translate-x-1/2"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg shadow-lg">
                  <PartyPopper className="w-12 h-12 text-yellow-300 mb-2 mx-auto" />
                  <p className="text-white font-bold">Congratulations! You broke the 4th wall! 🎉</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated Emoji Character */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: 'mirror'
            }}
            className="mb-8 text-6xl"
          >
            🕵️♂️
            <Wand2 className="inline-block ml-2 w-8 h-8" />
          </motion.div>

          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="inline-flex items-center justify-center p-6 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 mb-6"
          >
            <AlertTriangle className="w-12 h-12" />
            <Ghost className="w-12 h-12 ml-4 animate-float" />
          </motion.div>

          <motion.h1 
            className="text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
            <span className="text-3xl ml-2 align-middle">🚨</span>
          </motion.h1>

          <AnimatePresence mode='wait'>
            <motion.div
              key={currentMsgIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4"
            >
              {sassyMessages[currentMsgIndex]}
            </motion.div>
          </AnimatePresence>

          <motion.p 
            className="text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Possible reasons why:
            <ul className="mt-2 text-sm text-left max-w-xs mx-auto">
              <li className="flex items-center mb-2">
                <Rocket className="w-4 h-4 mr-2 text-blue-500" />
                Our server monkeys got distracted
              </li>
              <li className="flex items-center mb-2">
                <Rocket className="w-4 h-4 mr-2 text-blue-500" />
                You're secretly testing our 404 page
              </li>
              <li className="flex items-center">
                <Rocket className="w-4 h-4 mr-2 text-blue-500" />
                The internet ate your page
              </li>
            </ul>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="btn-primary inline-flex items-center group transition-all"
              title="Safety net included!"
            >
              <Home className="mr-2 w-5 h-5 group-hover:animate-bounce" /> 
              <span className="group-hover:underline">Back to Civilization</span>
            </Link>
          </motion.div>

          <motion.p 
            className="text-sm mt-8 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            PS: Did you try turning it off and on again? 🔌
          </motion.p>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;