import React from 'react'
import Haze from '../AdultSection/components/Haze'
import HazeStyle2 from '../AdultSection/components/HazeStyle2'

const Features = () => {
    return (
        <div class="py-24 sm:py-32">
            <HazeStyle2/>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <h2 class="text-base font-semibold leading-7 text-indigo-600">Embrace Autism</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unlocking Potential Together</p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Embrace Autism is an innovative and inclusive app designed to cater to individuals of all ages on the autism spectrum. Our mission is clear: to empower, educate, and create a supportive community that fosters understanding and acceptance. This comprehensive app boasts a wide array of features, each carefully crafted to meet the diverse needs of our users.</p>
                </div>
                <Haze/>
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                Interactive Learning for Children
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                Image-based Vocabulary Learning: Children can expand their vocabulary by associating words with images, making language acquisition fun and intuitive.
                                <br />
                                <br />
                                Word Games: Engaging word games help develop language skills while keeping children entertained.
                                <br />
                                <br />
                                Flashcards: Interactive flashcards facilitate visual learning and improve memory retention.</dd>
                        </div>
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                Community Engagement for Adults
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                Awareness Events: Adults can discover and attend community events focused on autism awareness and advocacy, promoting social engagement and inclusivity.
                                <br />
                                <br />
                                Volunteer Opportunities: The app connects users with NGOs and organizations dedicated to autism support, making it easy to give back to the community.
                                <br />
                                <br />
                                Story Sharing: Users can share their personal experiences and stories, fostering a sense of belonging and understanding among adults on the spectrum.</dd>
                        </div>
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                Safe and Supportive Community
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                Moderated Forums: The app features moderated forums where users can discuss their challenges, successes, and experiences in a safe and supportive environment.
                                <br />
                                <br />
                                Professional Support: Connect with autism experts, therapists, and counselors for guidance and support.</dd>
                        </div>
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                Customizable User Experience
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">We understands that each individual is unique, with their own preferences and needs. The app allows users to personalize their interface to suit their specific requirements, ensuring a more tailored and user-centric experience.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

    )
}

export default Features