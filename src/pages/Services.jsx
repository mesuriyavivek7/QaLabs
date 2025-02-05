import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

const Services = () => {
  return (
    <div className="bg-black text-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <motion.div
        className="text-center py-24 px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
          Our Services
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Delivering Impactful Digital Solutions.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-24 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-green-400">
            Web Development
          </h2>
          <p className="mt-4 text-sm">
            Crafting responsive, user-friendly websites tailored to your brand.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-green-400">
            SEO Optimization
          </h2>
          <p className="mt-4 text-sm">
            Enhancing your online visibility with proven SEO strategies.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-green-400">
            UI/UX Design
          </h2>
          <p className="mt-4 text-sm">
            Designing intuitive and engaging user experiences.
          </p>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-24 py-12 bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-semibold text-green-400">+60%</h2>
          <p className="mt-2 text-xl">Traffic Increase</p>
          <p className="text-center mt-4">
            By optimizing your website for search engines and enhancing user
            experience.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-semibold text-green-400">+30%</h2>
          <p className="mt-2 text-xl">Revenue Increase</p>
          <p className="text-center mt-4">
            Rise in revenue as more visitors convert into paying customers.
          </p>
        </motion.div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="text-center py-16 px-8 bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <p className="text-xl font-semibold">
          Innovative Design for{" "}
          <span className="text-blue-500">Modern Businesses.</span>
        </p>
        <p className="text-sm mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <motion.button
          className="mt-6 px-8 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Learn more
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Services;
