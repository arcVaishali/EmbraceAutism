import React from 'react'
import StoryCard from "../components/StoryCard";
import { Link } from 'react-router-dom'

const ShareStories = () => {
  return (
    <div className="py-24 sm:py-32" style={{backgroundColor:"#0d87f430"}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" style={{textAlign:"center"}}>Stories from the Community</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600" style={{textAlign:"center"}}>Stories for you, by you</p>
        </div>
        
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />

        </div>
      </div>
    </div>

  )
}

export default ShareStories