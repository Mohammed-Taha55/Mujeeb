import React from 'react';
import { motion } from 'framer-motion';
import { Truck, FastForward } from 'lucide-react';

const Preloader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
    >
      
      {/* Truck and Progress Bar Container */}
      <div className="relative w-64 md:w-80 h-2 bg-gray-200 dark:bg-gray-800 rounded-full mt-12">
        
        {/* Moving Truck Icon */}
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: 0 }}
          className="absolute -top-10 -ml-4 flex items-center text-blue-600 dark:text-blue-400"
        >
          {/* Animated Speed Lines Behind Truck */}
          <motion.div 
            animate={{ opacity: [0, 1, 0], x: [-5, -15, -5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="mr-1 text-blue-400/50 dark:text-blue-500/50"
          >
            <FastForward className="w-5 h-5" />
          </motion.div>
          
          {/* The Truck */}
          <Truck className="w-10 h-10 drop-shadow-lg" />
        </motion.div>

        {/* Filling Progress Bar */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-cyan-400 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        />
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <h2 className="text-xl md:text-2xl font-black text-gray-950 dark:text-white tracking-[0.2em] uppercase">
          Mujeeb Transport
        </h2>
        <motion.p 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide"
        >
          Securing the payload...
        </motion.p>
      </motion.div>

    </motion.div>
  );
};

export default Preloader;