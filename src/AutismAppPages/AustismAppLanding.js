import React, { useState } from 'react'
import Navbar from '../AutismAppComponents/Navbar'
import { Link } from 'react-router-dom'
import { BiTargetLock, BiGlobe } from 'react-icons/bi';
import { FaUserFriends, FaHandsHelping } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const AustismAppLanding = () => {
  const testimonials = [
    {
      name: 'John Doe',
      testimonial: 'I\'m amazed by the support and understanding I received from the EmpowerASD community. It has truly made a positive impact in my life.'
    },
    {
      name: 'Jane Smith',
      testimonial: 'Thanks to EmpowerASD, I was able to find resources and connect with others who share similar experiences. It has been a game changer for me.'
    }
  ];
  const missionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const visionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            EmpowerASD: Unlocking Potential Together.
            <Link to="/" class="font-semibold text-[#0D79F4]">
              <span class="absolute inset-0" aria-hidden="true">
              </span>Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Advocacy Beyond Boundaries</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">A vital resource on the autism spectrum who seek empowerment, community engagement, and the opportunity to advocate for positive change. </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/" class="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
            <Link to="/" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#12E0B7] to-[#07F76B] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      {/* Mission and Vision section */}
      <div className="flex justify-center">
        <motion.div
          className="w-1/2 bg-white rounded-md shadow-md p-6 m-4"
          variants={missionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-center">
            <BiTargetLock className="text-4xl text-[#57C7FF]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Our mission is to provide comprehensive support and resources to individuals on the autism spectrum, empowering them to reach their full potential and lead meaningful lives.
          </p>
        </motion.div>

        <motion.div
          className="w-1/2 bg-white rounded-md shadow-md p-6 m-4"
          variants={visionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-center">
            <BiGlobe className="text-4xl text-[#FF9335]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            Our vision is a world where individuals with autism are embraced, understood, and included, where they have equal opportunities, and where their unique strengths and talents are celebrated.
          </p>
        </motion.div>
      </div>

    </div>
  )
};

export default AustismAppLanding;