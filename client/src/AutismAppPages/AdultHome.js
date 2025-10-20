import React from 'react'
import Navbar from '../AdultSection/components/Navbar'
import Haze from '../AdultSection/components/Haze'
import HazeStyle2 from '../AdultSection/components/HazeStyle2'
import Features from '../AdultSection/Pages/Features'
import { Link } from 'react-router-dom'

const AdultHome = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8" style={{ backgroundColor: "#0d87f430" }}>
      <Navbar />
      <Haze />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            EmpowerASD: Unlocking Potential Together.
            <Link to="/adult/ShareStories" className="font-semibold text-[#0D79F4]">
              <span className="absolute inset-0" aria-hidden="true">
              </span>Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Advocacy Beyond Boundaries</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">A vital resource for adults on the autism spectrum who seek empowerment, community engagement, and the opportunity to advocate for positive change. </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="Features" className="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
            <Link to="/About-us" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
      <HazeStyle2 />
      <Features />
    </div>
  )
}

export default AdultHome