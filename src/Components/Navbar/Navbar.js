import React from 'react'
import './Navbar.css'
import FacebookIcon from '../../assests/icons/facebook.png'
import InstagramIcon from '../../assests/icons/instagram.png'
import YoutubeIcon from '../../assests/icons/youtube.png'


function Navbar() {
  return (
    <div className='mx-10 py-5'>
      <div className='flex flex-row justify-between w-full navbar-container'>
        <div className='flex flex-row space-x-5 navbar-left'>
          <p className='text-white font-montserrat font-extralight text-sm cursor-pointer'>Home</p>
          <p className='text-white font-montserrat font-extralight text-sm cursor-pointer'>Projects</p>
          <p className='text-white font-montserrat font-extralight text-sm cursor-pointer'>About Us</p>
          <p className='text-white font-montserrat font-extralight text-sm cursor-pointer'>Contact</p>
        </div>
        <div className='flex flex-row space-x-3 sm:space-x-9'>
          <div>
            <img 
              alt="instagram"
              src={InstagramIcon}
              // width={25}
              className='cursor-pointer navbar-icon'
            />
          </div>
          <div>
            <img 
              alt="instagram"
              src={FacebookIcon}
              // width={25}
              className='cursor-pointer navbar-icon'
            />
          </div>
          <div>
            <img 
              alt="instagram"
              src={YoutubeIcon}
              // width={25}
              className='cursor-pointer navbar-icon'
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar