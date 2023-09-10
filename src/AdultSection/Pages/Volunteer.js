import React from 'react'
import { Link } from 'react-router-dom'
import VolunteeringEvent from '../components/VolunteeringEvent'

const Volunteer = () => {
    return (
        <div className="bg-gray-100" style={{backgroundColor:"#0d87f430"}}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-4xl font-bold text-gray-900" style={{textAlign:"center"}}>Volunteer with us</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:space-y-0">
                        
                        <VolunteeringEvent/>
                        <VolunteeringEvent/>
                        <VolunteeringEvent/>
                        <VolunteeringEvent/>
                        <VolunteeringEvent/>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Volunteer