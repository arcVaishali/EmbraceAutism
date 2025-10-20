import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiPuzzle } from 'react-icons/gi';
import { FiPlayCircle } from 'react-icons/fi';
import { ImFilm } from 'react-icons/im';
import Navbar from '../AutismAppComponents/Navbar';
import ButtonSecondary from '../AutismAppComponents/ButtonSecondary';
import ButtonPrimary from '../AutismAppComponents/ButtonPrimary';
import { FaChild } from 'react-icons/fa';

const ChildHome = () => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, rotate: 5 },
  };

  return (
    <div className="bg-gradient-to-r from-[#07f76b87] to-[#12e0b7ad] min-h-screen flex flex-col items-center justify-center" >
      {/* <Navbar /> */}
      <br/>
      <br/>
      <div className='p-10 bg-gradient-to-r from-[#12e0b7ab] to-[#0d2cf447] border-[#12e0b77a] hover:shadow-lg lg:rounded'>
        <h1 className="text-4xl font-bold text-black mb-8">Welcome to the Child Section</h1>
        <p className="text-xl text-black mb-4">Explore fun and educational content designed just for kids!</p>
        <div className="flex flex-col items-center justify-center space-y-4">
        </div>
        <div>
          <Link to="/">
            <motion.div
              className="flex items-center  hover:bg-blue-600 text-purple-500 font-semibold py-2 px-4 rounded-full text-lg transition-all duration-300"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <FaChild style={{
                marginLeft:"190px",
                width:"50px",
                height:"50px"
              }}
              />
            </motion.div>
          </Link>
          <div className='p-5 items-center align-center text-center'>
            <div>
              <Link to="/games">
                <motion.div
                  className="flex items-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 text-red-500 font-semibold py-2 px-4 rounded-full text-lg transition-all duration-300"
                  variants={buttonVariants}
                  style={{marginBottom:"15px"}}
                  initial="initial"
                  whileHover="hover"
                >
                  <FiPlayCircle className="mr-2 text-xl"/>
                  Play Games
                </motion.div>
              </Link>
            </div>
            <div>
              <Link to="videos">
                <motion.div
                  className="flex items-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:text-blue-600 text-lg transition-all duration-300"
                  variants={buttonVariants}
                  style={{marginBottom:"15px"}}
                  initial="initial"
                  whileHover="hover"
                >
                  <ImFilm className="mr-2 text-xl" />
                  Watch Lessons
                </motion.div>
              </Link>
            </div>
            <Link to="puzzles">
              <div>
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
            </Link>

          </div>
        </div>
      </div>

      <div className='p-6'>
        <Link to="/">
          <ButtonPrimary text="Go Back to Homepage" />
        </Link>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default ChildHome;