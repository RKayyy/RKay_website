import React from 'react'
import p1 from "../images/p1.png"
import p2 from "../images/p2.png"
import p3 from "../images/p3.png"
import p4 from "../images/p4.png"
import line from "../images/line.png"
import vector from "../images/vector.png"
import Navbar2 from '../components/Navbar2'

const Art = () => {
    
  return (
    <div className='bg-[#15141A] flex flex-col justify-center text-white '>
        <Navbar2 />
        <div className="flex justify-center">
  <div className="h-[1px] w-[80%] bg-white"></div>
</div>
        <br></br>
        <br></br>
        <div
        className="lg:text-7xl text-5xl sm:text-left text-center lg:pl-36 md:pl-24 sm:pl-20"
        style={{ fontFamily: "Stardos" }}
      >
        Paintings
      </div>

      <div className="flex flex-row hidden sm:block">
        <img alt="line" src={line} className="pl-20 lg:scale-[150%] md:scale-[120%]" />
        
      </div>
        <img alt="p1" className='m-16 lg:mr-96 lg:ml-96 lg:scale-[85%] border-2 border-white rounded-2xl' src={p1}/>
        <div className='flex justify-center items-center'><img alt='vector' src={vector} className=' h-16 w-16' /></div>
        
        <img alt="p2" className='m-16 lg:mr-96 lg:ml-96 lg:scale-[85%] border-2 border-white rounded-2xl' src={p2}/>
        <div className='flex justify-center items-center'><img alt='vector' src={vector} className='h-16 w-16' /></div>
        
        <img alt="p3" className='m-16 lg:mr-96 lg:ml-96 lg:scale-[85%] border-2 border-white rounded-2xl' src={p3}/>
        <div className='flex justify-center items-center'><img alt='vector' src={vector} className='h-16 w-16' /></div>
        
        <img alt='p4' className='m-16 lg:mr-96 lg:ml-96 lg:scale-[85%] border-2 border-white rounded-2xl' src={p4}/>
    </div>
  )
}

export default Art