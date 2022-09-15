import React from 'react'

export default function Navbar() {
  return (
    <nav>
      {/* Navbar Background */}
      <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... ">
        {/* gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... */}

        {/* Border */}
        <div className="flex items-center justify-between border-b-2 border-gray-300 py-6  md:justify-start md:space-x-10">
            
          {/* logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1 mx-auto max-w-full px-4 sm:px-6">
            <a href="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Flogo1_edfc81b31b.png&w=256&q=75"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
