// import React from 'react'
import facebook from '../img/facebook-icon.png';
import instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.jpg'
import Logo from '../img/logo.jpg'

function footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className='flex'>
            <img className='w-10 rounded-full' src={Logo} alt="" />
                <h2 className="text-2xl mb-2">DefendHex</h2></div>
                <p className="text-gray-400">123 Street Address, City, Country</p>
                <p className="text-gray-400">Phone: (91+) 456-7890</p>
                <p className="text-gray-400">Email: praneeth@DefendHex.com</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="flex items-center space-x-4 ">
                    <a href="https://www.linkedin.com">
                        <img className='w-8' src={facebook} alt="LinkedIn Logo" />
                    </a>
                    <a href="https://www.github.com">
                        <img className='w-8' src={instagram
                        } alt="instagram" />
                    </a>
                    <a href="https://www.facebook.com">
                        <img className='w-8 rounded-[50%]' src={linkedin} alt="faceboog" />
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</footer>

    </div>
  )
}

export default footer
