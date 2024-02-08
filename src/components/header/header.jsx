// import React from 'react'
import Logo from '../img/logo.jpg'
function header() {
  return (
    <div>
      <header className="bg-gray-800 text-white">
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img className='w-10 rounded-full' src={Logo} alt="" />
            <a href="/" className="text-white text-xl font-semibold">DefendHex</a>
        </div>
        <div className=" md:flex items-center space-x-1">
            <a href="/home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
            <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Courses</a>
            <a href="/login" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Login</a>
            <a href="/signup" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Sign Up</a>
        </div>
    </nav>
</header>

          
    </div>
  )
}

export default header
