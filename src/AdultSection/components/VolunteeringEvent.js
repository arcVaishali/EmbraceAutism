import React from 'react'
import { Link } from 'react-router-dom'

const VolunteeringEvent = () => {
    return (
        <Link to="/" className="group" style={{ backgroundColor: "#12e0b738", padding: "30px", borderRadius: "20px" }}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-700" style={{ textAlign: "center", margin: "5px" }}>Community Picnic</h2>
            <h3 className="mt-4 text-sm text-gray-700"
                style={{ marginBottom: "34px" }}>Join us this Saturday at Oakridge Park for a community picnic! This event, organized for autistic adults, promises a day of connection and fun. Enjoy games, music, and a chance to share your experiences.</h3>
            <Link to="/" className="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
        </Link>
    )
}

export default VolunteeringEvent