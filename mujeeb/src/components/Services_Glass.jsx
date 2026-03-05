import React from 'react';
import { motion } from 'framer-motion';
import { PackageSearch, Home, Building2 } from 'lucide-react';

const services = [
  { icon: Building2, title: "Commercial Freight", desc: "B2B logistics, warehouse transfers, and daily distribution runs." },
  { icon: Home, title: "House Shifting", desc: "Careful loading and unloading of personal furniture and appliances." },
  { icon: PackageSearch, title: "Express Parcels", desc: "Immediate point-to-point delivery for urgent, high-value items." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50 } }
};

const Services_Glass = () => {
  return (
    <section id="services" className="py-24 relative dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      
      {/* Dynamic Background Gradients - Adjusted for both modes */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-10 pointer-events-none"></div>
      


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-950 dark:text-white mb-16 transition-colors duration-500"
        >
          Dedicated Services
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-xl dark:shadow-2xl transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-4 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services_Glass;