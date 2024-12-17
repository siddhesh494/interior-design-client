import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header() {
  return (
    <div className='relative w-full aspect-[12/16]  md:aspect-[12/6] bg-header bg-cover bg-center'>
      
      <div className="absolute inset-y-0 left-0 w-1/2 bg-black bg-opacity-40 bg-pattern content-center">
        <div className='flex flex-col items-center'>
          <div className=''>
            <p
              className='
                font-serif font-medium 
                tracking-wider
                create-text
              '
            >
              Create
            </p>
            <p
              className='
                font-roboto font-normal 
                relative
                comfort-text
                text-end
              '
            >
              COMFORT
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <p className='w-[90%] md:w-[70%] header-tagline font-light tracking-wider'>
            Transforming spaces into works of art. 
            Explore the harmony of modern design and architecture tailored to perfection.
          </p>
        </div>
      </div>


      {/* navbar */}
      <Navbar />
      
    </div>
  )
}

export default Header