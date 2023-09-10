import React from 'react'

const Features = () => {
  return (
    <div className="bg-white" style={{ backgroundColor: "#0d87f430" }}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features</h2>
          <p className="mt-4 text-gray-500">"Embrace Autism: Advocating for Adult Autism" carries a profound message of empowerment, community support, and advocacy. It emphasizes the importance of adults with autism embracing their unique strengths and using their voices to create positive change. The app's message is encapsulated in its tagline: "Empowering Voices, Building Bridges."
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Personalized Experience</dt>
              <dd className="mt-2 text-sm text-gray-500">Recognizing that each individual's needs and preferences are unique, the app allows users to customize their experience, ensuring that it aligns with their specific requirements and goals.</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Discover and Attend</dt>
              <dd className="mt-2 text-sm text-gray-500">The app provides a centralized hub where adults can discover community events specifically focused on autism awareness and advocacy. Users can explore and attend events that resonate with their interests and goals.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Tagline</dt>
              <dd className="mt-2 text-sm text-gray-500">Volunteer Opportunities;
                Empowerment Through Giving Back: The app serves as a bridge between adults with autism and NGOs and organizations dedicated to autism support. Users can easily find volunteer opportunities, enabling them to give back to their communities and contribute to causes that matter to them.</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Community Awareness Events</dt>
              <dd className="mt-2 text-sm text-gray-500">Supportive Community Forums,
                Safe and Supportive Environment; The app features moderated forums where adults can engage in meaningful discussions about their experiences, challenges, and successes in a safe and supportive environment.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Peer Support</dt>
              <dd className="mt-2 text-sm text-gray-500">Users can connect with peers who understand their unique journey, providing a valuable network for mutual support and advice.</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Story Sharing and Advocacy</dt>
              <dd className="mt-2 text-sm text-gray-500">Personal Narratives; Embrance Autism encourages adults on the spectrum to share their personal experiences, triumphs, and challenges. Users can craft and share their own narratives, fostering a sense of belonging within the community.</dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img src="https://images.unsplash.com/photo-1687360441221-ff5143d5cd5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Autistic man sitting on a bench while using Fidget spinners" className="rounded-lg bg-gray-100" />
          <img src="https://images.unsplash.com/photo-1687360441387-0179af118555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80" alt="A non-binary Autistic Person with Headphones." className="rounded-lg bg-gray-100" />
          <img src="https://images.unsplash.com/photo-1687360441027-27e70655b27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1883&q=80" alt="Two Autistic friends sitting outside and lauging at their phones" className="rounded-lg bg-gray-100" />
          <img src="https://images.unsplash.com/photo-1687360440100-d4fbdc03bff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="A self potrait of Autistic woman" className="rounded-lg bg-gray-100" />
        </div>
      </div>
    </div>

  )
}

export default Features