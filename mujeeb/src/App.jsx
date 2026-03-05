import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AestheticNav from './components/AestheticNav';
import Hero1_Premium from './components/Hero1_Premium';
import Hero2_VehicleCapabilities from './components/Hero2_VehicleCapabilities';
import Services_Glass from './components/Services_Glass';
import AestheticTestimonials from './components/AestheticTestimonials';
import AestheticFooter from './components/AestheticFooter';
import StickyCall_Pulse from './components/StickyCall_Pulse';
import Preloader from './components/Preloader'; // Import the new Preloader

import './index.css';

function App() {
  // --- Preloader State ---
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 2.5 seconds before revealing the site
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // --- Dark Mode State ---
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans tracking-tight transition-colors duration-500 overflow-x-hidden">
      
      {/* AnimatePresence allows components to animate out when they are removed from the DOM */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AestheticNav darkMode={darkMode} setDarkMode={setDarkMode} />
            
            <main className="z-10">
              <Hero1_Premium />
              <Hero2_VehicleCapabilities />
              <Services_Glass />
              <AestheticTestimonials />
            </main>
            
            <AestheticFooter />
            <StickyCall_Pulse />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;