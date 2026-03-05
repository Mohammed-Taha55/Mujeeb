import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Safe. Mujeeb's service is absolutely reliable. Every load is delivered perfect.",
    name: "Rahul S.",
    role: "Business Owner"
  },
  {
    quote: "Quickest city transport, by far. Mujeeb always beats the clock.",
    name: "Priya M.",
    role: "Homeowner"
  },
  {
    quote: "The capacity of his truck is impressive. Handled our large office shift.",
    name: "Vikram K.",
    role: "Logistics Manager"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
};

const AestheticTestimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-950 dark:text-white mb-16 transition-colors duration-500"
        >
          Client Perspectives
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testi, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative p-10 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg dark:shadow-2xl transition-all duration-500"
            >
              {/* Decorative background quote icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-blue-100 dark:text-blue-900/20 rotate-180 pointer-events-none" />
              
              {/* 5-Star Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                 ))}
              </div>
              
              <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-8 relative z-10 font-medium transition-colors duration-500">
                "{testi.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                {/* Generated Avatar based on the first letter of the name */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-950 dark:text-white transition-colors duration-500">{testi.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">{testi.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AestheticTestimonials;