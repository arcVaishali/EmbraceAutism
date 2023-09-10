import React from 'react'
import UsernameField from '../components/UsernameField'
import AboutField from "../components/AboutField"
import ProfileField from '../components/ProfileField'
import PersonalInformationCard from '../components/PersonalInformationCard'
import NotificationsSettingsCard from '../components/NotificationsSettingsCard'

const VolunteerForm = () => {
    return (
        <div className="bg-gray-100" style={{ backgroundColor: "#0d87f431" }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h1 className="text-base font-bold text-gray-900 text-5xl" style={{textAlign:"center"}}>Registration details</h1>
                            <p className="mt-1 text-sm leading-6 text-gray-600" style={{textAlign:"center",marginTop:"10px"}}>This information will be displayed publicly so be careful what you share.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <UsernameField/>
                                <AboutField/>
                                <ProfileField/>

                            </div>
                        </div>

                        <PersonalInformationCard/>

                        <NotificationsSettingsCard/>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6"> 
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900  hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{width:"20%", backgroundColor:"white",border:"1px solid white", borderRadius:"5px", padding:"7px"}}>Cancel</button>
                        <button type="submit" className="max-w-xl rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{width:"20%"}}>Submit</button>

                    </div>
                </form>

            </div>
        </div>


    )
}

export default VolunteerForm