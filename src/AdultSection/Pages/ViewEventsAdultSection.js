import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ViewEventsAdultSection = () => {
  return (
    <div className="bg-white">

      <Navbar />

      <h2 class="sr-only">Community Events</h2>
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Link to="/" class="group" style={{ backgroundColor: "#12e0b738", padding: "30px", borderRadius: "20px" }}>
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h2 class="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Community Picnic</h2>
              <h3 class="mt-4 text-sm text-gray-700"
                style={{ marginBottom: "34px" }}>Join us this Saturday at Oakridge Park for a community picnic! This event, organized for autistic adults, promises a day of connection and fun. Enjoy games, music, and a chance to share your experiences.</h3>
              <Link to="/" class="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
            </Link>
            <Link to="/" class="group" style={{ backgroundColor: "#12e0b738", padding: "30px", borderRadius: "20px" }}>
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h2 class="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Autism Awareness</h2>
              <h3 class="mt-4 text-sm text-gray-700"
                style={{ marginBottom: "34px" }}>Calling all advocates! The Grandview Community Center is hosting a workshop on autism awareness and advocacy. Join us on September 15th to learn how to make a difference in the lives of autistic adults in our community.</h3>
              <Link to="/" class="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
            </Link>
            <Link to="/" class="group" style={{ backgroundColor: "#12e0b738", padding: "30px", borderRadius: "20px" }}>
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h2 class="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Harmony Arts Center</h2>
              <h3 class="mt-4 text-sm text-gray-700"
                style={{ marginBottom: "34px" }}>Get ready for an exciting evening at the Harmony Arts Center! Our Art & Expression Night for autistic adults is happening on October 2nd. Explore your creativity, share your talents, and connect with a vibrant community of fellow artists.</h3>
              <Link to="/" class="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
            </Link>
            <Link to="/" class="group" style={{ backgroundColor: "#12e0b738", padding: "30px", borderRadius: "20px" }}>
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h2 class="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>The Maplewood Community</h2>
              <h3 class="mt-4 text-sm text-gray-700"
                style={{ marginBottom: "34px" }}>Save the date! The Maplewood Community Hall is hosting a sensory-friendly movie night on September 20th. We'll be screening a heartwarming film, and there will be plenty of snacks and a relaxed atmosphere for autistic adults to enjoy.</h3>
              <Link to="#" class="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
            </Link>

            <Link to="/" class="group" style={{ backgroundColor: "#12e0b738", padding: "30px", borderRadius: "20px" }}>
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h2 class="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Culinary Adventure</h2>
              <h3 class="mt-4 text-sm text-gray-700" style={{ marginBottom: "34px" }}>Calling all foodies! Join us for a culinary adventure at the Rainbow Café on September 30th. Our Autism Chef Showcase features talented autistic adults demonstrating their culinary skills. Taste amazing dishes and support local talent.</h3>
              <Link to="/" class="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
            </Link>

            <Link to="/" class="group" style={{ backgroundColor: "#12e0b738", padding: "30px", borderRadius: "20px" }}>
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h2 class="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Autism in Art</h2>
              <h3 class="mt-4 text-sm text-gray-700" style={{ marginBottom: "34px" }}>Step into a world of colors and creativity at the Artistic Spectrum Gallery. On October 5th, our "Autism in Art" exhibition opens, featuring remarkable works by autistic adults. Discover the beauty of their unique perspectives.</h3>
              <Link to="/" class="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
            </Link>


          </div>
        </div>
      </div>
    </div>


  )
}

export default ViewEventsAdultSection

