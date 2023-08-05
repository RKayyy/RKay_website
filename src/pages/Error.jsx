import React from 'react'
import Navbar2 from '../components/Navbar2'

const Error = () => {
  return (
    <div className='bg-[#15141A] flex flex-col justify-center text-white'>
      <Navbar2 />
      <div className='flex flex-col justify-center items-center h-screen w-full'>
      <h1 className='text-7xl' style={{fontFamily: 'Stardose'}}>Error</h1>
      </div>
      
    </div>
  )
}

export default Error