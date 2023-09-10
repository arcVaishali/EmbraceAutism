import React from 'react'
import UsernameField from '../components/UsernameField'
import AboutField from "../components/AboutField"
import ProfileField from '../components/ProfileField'
import PersonalInformationCard from '../components/PersonalInformationCard'
import NotificationsSettingsCard from '../components/NotificationsSettingsCard'

const VolunteerForm = () => {
    return (
        <div className="bg-gray-100" style={{ backgroundColor: "#0d87f431" }}>
            <div className="mx-auto px-20 sm:px-16 lg:px-18">
                <br/>
                <h1 className="font-bold text-gray-900 text-4xl" style={{textAlign: "center" }}>Registration details</h1>
                <p className="mt-1 text-sm leading-6 text-gray-600" style={{ textAlign: "center", marginTop: "20px" }}>This information will be displayed publicly so be careful what you share.</p>
                <form>
                    <div className="space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-10 lg:space-y-0">
                        <div className="border-b border-gray-900/10 pb-12">

                            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <UsernameField />
                                <AboutField />
                                <ProfileField />

                            </div>
                        </div>

                        <PersonalInformationCard />

                        {/* <NotificationsSettingsCard /> */}

                        <div className="flex items-center justify-center gap-x-6" style={{ marginBottom: "34px" }}>
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900  hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{ width: "20%", backgroundColor: "white", border: "1px solid white", borderRadius: "5px", padding: "7px" }}>Cancel</button>
                            <button type="submit" className="max-w-xl rounded-md bg-[#0D79F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{ width: "20%" }}>Submit</button>

                        </div>
                    </div>


                </form>

            </div>
        </div>


    )
}

export default VolunteerForm