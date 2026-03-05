import React from 'react';
import { PhoneCall, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

import mujeebPhoto from '../assets/mujeeb.jpeg';
const premiumTruckImage = "https://truckcdn.cardekho.com/in/tata/intra-v50/tata-intra-v50.jpg";

const Hero1_Premium = () => {
  return (
    <section className="relative min-h-screen pt-18 pb-20 md:pt-22 md:pb-24 bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-[100px] md:blur-[160px]"></div>
        <div className="absolute bottom-0 -right-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-tl from-purple-200 to-transparent rounded-full blur-[100px] md:blur-[160px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 md:gap-16 items-center z-10 relative">
        
        {/* Left Side: Text and CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left mt-8 lg:mt-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-inner"
          >
            <Truck className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-tight">Reliable Logistics Partner</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-950 dark:text-white leading-[1] md:leading-[0.9]">
            Mujeeb<br className="hidden md:block" />
            <span className="md:hidden"> </span>Transport.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 block">
              Ballari.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light px-2 lg:px-0">
            Fast, secure, high-payload transportation all over Ballari and near by town's powered by the dynamic Tata Intra V50.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 pt-2 md:pt-4">
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+918660992852" 
              className="inline-flex items-center justify-center gap-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 rounded-2xl font-extrabold text-lg md:text-xl shadow-xl hover:shadow-[0_20px_60px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all"
            >
              <PhoneCall className="w-5 h-5 md:w-7 md:h-7" />
              Call Now: 8660992852
            </motion.a> 
          </div>
        </motion.div>

        {/* Right Side: Re-designed Image Collage (PERFECT MOBILE FIX) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative w-full max-w-[500px] lg:max-w-none mx-auto h-[320px] sm:h-[450px] lg:h-[600px] mt-12 lg:mt-0"
        >
          {/* Main Truck Image (Anchored to top right, fluid width) */}
          <motion.div
            style={{ rotateY: 5, rotateX: 2 }}
            whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute top-0 right-0 lg:-right-10 lg:top-10 w-[85%] lg:w-[110%] aspect-[4/3] sm:aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl bg-white dark:bg-gray-800 p-1.5 md:p-4 border-[4px] md:border-[12px] border-white dark:border-gray-800 z-10"
          >
            <img 
              src={premiumTruckImage} 
              alt="Mujeeb's Tata Intra V50" 
              className="w-full h-full object-cover rounded-lg md:rounded-xl" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 mix-blend-multiply"></div>
          </motion.div>

          {/* Mujeeb's Photo Overlay (Anchored to bottom left, fluid square) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="absolute bottom-0 left-0 lg:-bottom-10 lg:-left-10 w-[45%] lg:w-[45%] max-w-[280px] aspect-square rounded-2xl md:rounded-3xl border-[6px] md:border-[16px] border-gray-50 dark:border-gray-900 shadow-2xl overflow-hidden z-20 bg-gray-100"
          >
            <img 
              src={mujeebPhoto} 
              alt="Mujeeb" 
              className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" 
            />
            
            {/* Badge - perfectly scaled for mobile */}
            <div className="absolute bottom-1.5 left-1.5 md:bottom-3 md:left-3 bg-white/80 dark:bg-black/70 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-xl border border-white/20">
                <p className="font-extrabold text-gray-950 dark:text-white text-[10px] md:text-lg tracking-tight leading-none">MUJEEB</p>
            </div>
          </motion.div>

          {/* Decorative Background */}
          <div className="absolute -z-10 w-full h-full opacity-10 dark:opacity-[0.03] pointer-events-none"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero1_Premium;