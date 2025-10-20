import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="items-center max-w-screen-xl relative isolate overflow-hidden bg-gray-900">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" style={{ opacity: "0.4" }} />
        </div>
        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0D79F4] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0D79F4] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
      </div>
      <div style={{ padding: "30px", margin: "34px" }}>
        <div className="text">
          <span className="text-white border-b-2 border-[#0D79F4] uppercase">About us</span>
          <h2 className="my-4 font-bold text-3xl text-white sm:text-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl ">Embrace <span className="text-[#0D79F4]">Autism</span>
          </h2>
            <div class="mx-auto max-w-2xl lg:mx-0">
              {/* <p class="lg:gap-x-10 lg:space-y-0 mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
            </div>
          <p className="mx-auto max-w-5xl lg:mx-0 text-white mt-6 text-lg leading-8 text-gray-300">
            <div>
              Autism, a beautifully diverse neurodevelopmental condition, has enriched the tapestry of human experience in countless ways. It gifts individuals with unique perspectives, unparalleled talents, and an extraordinary capacity for empathy. However, navigating the world with autism can present its own set of challenges, both for individuals on the spectrum and their families.

            </div>
          
            <div>

              "Embrace Autism" is not merely a project; it's a vision. It's a vision of a world where individuals with autism are not just understood but embraced for their extraordinary qualities. It's a vision of a world where the autism community has access to the tools, resources, and support necessary to thrive in every aspect of life.
            </div>
            
            <div>
              Our mission is clear: to empower and uplift the autism community through knowledge, support, and inclusivity. As we journey together through this introduction, we invite you to join us on a path toward greater understanding, empathy, and a shared commitment to embracing autism.

            </div>
         
            <div>
              So, without further ado, let us embark on this transformative journey together, as we unveil the inspiring world of "Embrace Autism."

            </div>
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <Link to="/About-us/Home" className="text-xl">Home <span aria-hidden="true">&rarr;</span></Link>
            <Link to="/About-us/child" className="text-xl">Child<span aria-hidden="true">&rarr;</span></Link>
            <Link to="/About-us/adult" className="text-xl">Adult<span aria-hidden="true">&rarr;</span></Link>
            <Link to="/About-us/team" className="text-xl">Meet our Team <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About