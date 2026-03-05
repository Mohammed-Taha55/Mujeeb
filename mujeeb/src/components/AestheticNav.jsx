import React, { useState } from 'react';
import { Truck, Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AestheticNav = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-gray-950/70 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Truck className="h-6 w-6 md:h-7 md:w-7 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-wider">
            Mujeeb Transport
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Services</a>
          <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Reviews</a>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ml-2"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="text-yellow-400 w-5 h-5" /> : <Moon className="text-gray-600 w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav Controls (Hamburger + Dark Mode) */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="text-yellow-400 w-5 h-5" /> : <Moon className="text-gray-600 w-5 h-5" />}
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="p-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 overflow-hidden shadow-2xl"
          >
            <div className="px-6 pt-4 pb-8 flex flex-col gap-6">
              <a 
                href="#services" 
                onClick={toggleMenu} 
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                onClick={toggleMenu} 
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Reviews
              </a>
              
              {/* Extra Mobile-Only Call Button for better conversions */}
              <a 
                href="tel:+918660992852" 
                onClick={toggleMenu} 
                className="mt-2 flex justify-center items-center bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
              >
                Call Mujeeb Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AestheticNav;