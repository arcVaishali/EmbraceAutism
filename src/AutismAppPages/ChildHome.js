import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiPuzzle } from 'react-icons/gi';
import { FiPlayCircle } from 'react-icons/fi';
import { ImFilm } from 'react-icons/im';
import Navbar from '../AutismAppComponents/Navbar';

const ChildHome = () => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, rotate: 5 },
  };

  return (
    <div className="bg-gradient-to-r from-[#12E0B7] to-[#07F76B] min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to the Child Section</h1>
      <p className="text-xl text-white mb-4">Explore fun and educational content designed just for kids!</p>
      <div className="flex flex-col items-center justify-center space-y-4">
        <motion.div
          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-lg transition-all duration-300"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          <FiPlayCircle className="mr-2 text-xl" />
          Play Games
        </motion.div>
        <motion.div
          className="flex items-center text-blue-500 hover:text-blue-600 text-lg transition-all duration-300"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          <ImFilm className="mr-2 text-xl" />
          Watch Videos
        </motion.div>
        <motion.div
          className="flex items-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full text-lg transition-all duration-300"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          <GiPuzzle className="mr-2 text-xl" />
          Solve Puzzles
        </motion.div>
      </div>
    </div>
  );
};

export default ChildHome;