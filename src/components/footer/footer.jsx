// import React from 'react'

import discord from '../img/discord.png';
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
                <h2 className="text-2xl mb-2">&nbsp;DefendHex</h2></div>
                <p className="text-gray-400">Telangana, Hyderabad</p>
                <a href="mailto:admin@defendhex.com">admin@defendhex.com</a>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="flex items-center space-x-4 ">
                    
                    <a href="https://discord.gg/6cEkDHKN">
                        <img className='w-8 rounded-[100%]' src={discord} alt="discord" />
                    </a>
                    <a href="https://www.linkedin.com/in/praneeth-reddy-mekala/">
                        <img className='w-8 rounded-[100%]' src={linkedin} alt="faceboog" />
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