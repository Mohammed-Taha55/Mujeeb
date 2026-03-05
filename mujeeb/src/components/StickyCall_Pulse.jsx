import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const StickyCall_Pulse = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      className="fixed bottom-8 right-8 z-50 flex items-center"
    >
      <a
        href="tel:+918660992852"
        className="group relative flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-[0_10px_40px_rgba(16,185,129,0.5)] hover:shadow-[0_10px_50px_rgba(16,185,129,0.7)] transition-all duration-300 hover:pr-6"
      >
        {/* Ringing Animation behind the phone */}
        <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></span>
        
        <Phone className="w-7 h-7 relative z-10 animate-[wiggle_1s_ease-in-out_infinite]" />
        
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-lg ml-0 group-hover:ml-3">
          Call Mujeeb
        </span>
      </a>
      
      {/* Tailwind custom wiggle animation added inline via style just for safety */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default StickyCall_Pulse;