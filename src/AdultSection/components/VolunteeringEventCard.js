import React from 'react'
import { Link } from 'react-router-dom'
import VolunteerForm from '../Pages/VolunteerForm'

const VolunteeringEvent = () => {
    return (
        <div className="group relative lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0" style={{backgroundColor:"#07a5f738", borderRadius: "10px", padding: "30px", marginTop: "20px" }}>
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="https://plus.unsplash.com/premium_photo-1663090088315-c67572a7dc23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center" />
            </div>
            <div>
                <h3 className="mt-6 text-2xl text-gray-900" style={{ marginBottom: "20px" }}>
                    <Link to="/" href="#">
                        <span className="absolute inset-0"></span>
                        Join Us in Making Change Happen
                    </Link>
                </h3>
                <p className="text-base text-gray-600" style={{marginBottom:"20px"}}>Make a difference today! Join hands with us and volunteer at our upcoming event. Together, we can create a positive impact in our community. Join our mission for change and be part of something meaningful. Your time and dedication can bring about real change. Act now!</p>

                <Link to="../Pages/VolunteerForm" className="rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contribute</Link>
            </div>
        </div>
    )
}

export default VolunteeringEvent