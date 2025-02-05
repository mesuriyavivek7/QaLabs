import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for children
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black flex flex-col items-center justify-center text-center px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-7xl font-bold mb-6"
        variants={itemVariants}
      >
        <span className="bg-gradient-to-r from-blue-300 via-green-400 to-green-500 text-transparent bg-clip-text">
          Project
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-3xl text-gray-300 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        Tailored Solutions for Your Digital Success.
      </motion.p>

      {/* Optional gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default Project;