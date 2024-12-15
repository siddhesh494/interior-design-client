import React from 'react'
import './Contact.css'

function Contact() {
  return (
    
    <div className='relative w-full aspect-[12/6] bg-footer bg-cover bg-center'>
      
      <div className="absolute inset-y-0 right-0 w-1/2 bg-black bg-opacity-40 bg-pattern content-center">
        {/* head */}
        <div className='mx-2 sm:mx-4 md:mx-10 text-end'>
          <p
            className='
              font-serif font-semibold 
              tracking-wider
              contact-head
            '
          >
            LEAVE YOUR CONTACT INFORMATION
          </p>
          <p
            className='
              font-roboto font-medium 
              contact-tagline
            '
          >
            Have a project in mind? 
          </p>
          <p
            className='
              font-roboto font-medium 
              contact-tagline
            '
          >
            Let us bring your vision to life.
          </p>
        </div>

        <div className='mt-5 flex flex-col space-y-3 px-2 sm:px-4 md:px-10 items-center w-full'>
          <input 
            placeholder='Your Name'
            className='input-bar '
          />
          <input 
            placeholder='Your Email Address'
            className='input-bar'
          />
          <input 
            placeholder='Phone Number'
            className='input-bar'
          />
        </div>
        <div className='mt-5 flex flex-col space-y-3 px-2 sm:px-4 md:px-10 items-center w-full'>
          <button
            className='border border-white px-3 py-1 md:px-7 md:py-3 submit-button'
          >
            Submit Request
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default Contact