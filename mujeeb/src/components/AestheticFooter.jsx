import React from 'react';

const AestheticFooter = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 py-10 transition-colors duration-300 text-center border-t border-gray-100 dark:border-gray-900">
      <p className="text-gray-500 dark:text-gray-600 font-medium tracking-tight">
        © {new Date().getFullYear()} Mujeeb Transport. Curated for Precision. All rights reserved.
      </p>
    </footer>
  );
};

export default AestheticFooter;