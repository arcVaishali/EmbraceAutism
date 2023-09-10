import React from 'react';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#12e0b77a] to-[#07f76b59] text-blue-500">
      <div className="py-8 px-6 sm:px-8 lg:px-12 mx-auto flex items-start justify-between min-w-7xl">
        <div className='px-10'>
          <p className="font-bold text-lg mb-4">Embrace Autism</p>
          <p className="text-sm text-black mb-4">A vital resource for individuals on the autism spectrum </p>
          <p className="text-sm text-black mb-4">seeking empowerment, community engagement,  </p>
          <p className="text-sm text-black mb-4">and the opportunity to advocate for positive change. </p>
          <div className="flex space-x-4">
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><SiFacebook className="text-2xl text-blue-500 transform hover:scale-110 transition-all duration-300" /></Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><SiTwitter className="text-2xl text-blue-500 transform hover:scale-110 transition-all duration-300" /></Link>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><SiInstagram className="text-2xl text-blue-500 transform hover:scale-110 transition-all duration-300" /></Link>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-bold text-lg mb-4">Useful Links</p>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm text-black hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="text-sm text-black hover:text-blue-500">About Us</Link></li>
            <li><Link to="/resources" className="text-sm text-black hover:text-blue-500">Resources</Link></li>
            <li><Link to="/contact" className="text-sm text-black hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="font-bold text-lg mb-4">Contact Us</p>
          <p className="text-sm text-black mb-4">123 Main Street, City</p>
          <p className="text-sm text-black mb-4">Email: info@embraceautism.com</p>
          <p className="text-sm text-black">Phone: 123-456-7890</p>
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0.2)] py-4 px-6 sm:px-8 lg:px-12 flex items-center justify-between min-w-7xl">
        <p className="text-sm text-black">© 2023 Embrace Autism. All rights reserved.</p>
        <p className="text-sm text-black">Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;