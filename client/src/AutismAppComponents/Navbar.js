import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Haze from './Haze'


const Navbar = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Haze/>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Embrace</h1>
            <p className="tracking-tight text-gray-500" style={{ marginLeft: "65px", marginTop: "-11px" }}>AUTISM</p>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
          <Link to="/About-us" className="text-sm font-semibold leading-6 text-gray-900">About Us</Link>
          <Link to="/child" className="text-sm font-semibold leading-6 text-gray-900">Child</Link>
              <Link to="/adult" className="text-sm font-semibold leading-6 text-gray-900">Adult</Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isAuthenticated ? (
            <div>
              <Link to="/profile" className="text-sm font-semibold leading-6 text-gray-900">
                Profile <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ) : (
            <button>
              <Link to="/signup" className="text-sm font-semibold leading-6 text-gray-900">
                Signup <span aria-hidden="true">&rarr;</span>
              </Link>
            </button>
          )}
        </div>
      </nav>
    </header>

  )
}

export default Navbar