import React from 'react';
import { Scale, MapPin, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ScenicV50Image = "https://assets.tractorjunction.com/truck-junction/assets/images/truck/intra-v50-gold-0-right-1735043767.webp"; 

const capabilities = [
  { icon: Scale, label: "Massive Payload", detail: "Handles up to 1500kg with ease." },
  { icon: Zap, label: "Power & Efficiency", detail: "Advanced Engine for quick deliveries." },
  { icon: MapPin, label: "City & Highway", detail: "Maneuverable and reliable on all routes." },
];

const Hero2_VehicleCapabilities = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        
        {/* Aesthetic V50 image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl order-1"
        >
          <img src={ScenicV50Image} alt="Tata Intra V50, loaded and ready for delivery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </motion.div>

        {/* Capabilities Text */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 order-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-4 md:mb-6 text-center lg:text-left">
            Engineered for <br className="hidden lg:block"/> Your Needs
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 md:mb-10 text-center lg:text-left px-2 lg:px-0">
            The Tata Intra V50 isn't just transport. It's a powerhouse, custom-built for safety and massive loads, ensuring your goods are prioritized and protected.
          </p>
          
          <div className="space-y-4 md:space-y-6">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-gray-900 border border-transparent dark:border-gray-800 shadow-sm transition-all"
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2.5 md:p-3 rounded-full md:rounded-xl shrink-0">
                  <cap.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-700 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-950 dark:text-white text-base md:text-lg mb-1">{cap.label}</h4>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{cap.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100 dark:bg-blue-900 rounded-full blur-[100px] md:blur-[160px] opacity-30 md:opacity-20 z-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero2_VehicleCapabilities;