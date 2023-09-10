import React from 'react'

const StoryCard = () => {
  return (
    // SAMPLE STORY CARD
    <article className="flex max-w-xl flex-col items-start justify-between" style={{backgroundColor:"#07a5f738", padding:"30px", borderRadius:"10px"}}>
      <div className="flex items-center gap-x-6 text-xs">

        {/* ================ */}
        {/* DAY  */}
        {/* ================ */}
        <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>

        {/* ================ */}
        {/* TITLE */}
        {/* ================ */}
        <a href="#" className="relative z-10 font-medium text-gray-700 text-xl">Unleashing Creativity</a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="#">
            <span className="absolute inset-0"></span>
            
            {/* ======== */}
            {/* STORY */}
            {/* ======== */}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-900">Art knows no bounds, and neither does the human spirit. Prepare to embark on a sensory journey that transcends the ordinary and celebrates the extraordinary. Join us on October 15th, 2023, from 10:00 AM to 5:00 PM, at the Artistic Spectrum Exhibition—an event that promises to redefine your understanding of creativity...</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href="#">
              <span className="absolute inset-0"></span>
              Michael Foster
            </a>
          </p>
          <p className="text-gray-600">Art Enthusiast</p>
        </div>
      </div>
    </article>
  )
}

export default StoryCard