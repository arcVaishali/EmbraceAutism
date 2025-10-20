import React from 'react'

const AboutField = () => {
    return (
        <div className="col-span-full">
            <label for="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
            <div className="mt-2">
                <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>
    )
}

export default AboutField