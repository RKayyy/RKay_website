import React from 'react'
import d1 from "../images/d1.png"
import d2 from "../images/d2.png"
import d3 from "../images/d3.png"
import d4 from "../images/d4.png"
import d5 from "../images/d5.png"
import line from "../images/line.png"
import vector from "../images/vector.png"
import Navbar2 from '../components/Navbar2'

const Design = () => {
    
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
        Designs
      </div>

      <div className="flex flex-row hidden sm:block">
        <img alt='line' src={line} className="pl-20 lg:scale-[150%] md:scale-[120%]" />
        
      </div>
        <img alt='d1' className='m-16 lg:mr-96 lg:ml-96 lg:scale-[65%] border-2 border-white rounded-2xl' src={d1}/>
        <div className='flex justify-center items-center'><img alt='vector' src={vector} className=' h-16 w-16' /></div>
        
        <img alt='d2' className='m-16 lg:mr-96 lg:ml-96 lg:scale-[85%] border-2 border-white rounded-2xl' src={d2}/>
        <div className='flex justify-center items-center'><img alt='vector' src={vector} className='h-16 w-16' /></div>
        
        <img alt='d3' className='m-16 lg:mr-96 lg:ml-96 lg:scale-[85%] border-2 border-white rounded-2xl' src={d3}/>
        <div className='flex justify-center items-center'><img alt='vector' src={vector} className='h-16 w-16' /></div>
        
        <img alt='d4' className='m-16 lg:mr-96 lg:ml-96 lg:scale-[65%] border-2 border-white rounded-2xl' src={d4}/>
        <div className='flex justify-center items-center'><img alt='vector' src={vector} className='h-16 w-16' /></div>

        <img alt='d5' className='m-16 lg:mr-96 lg:ml-96 lg:scale-[85%] border-2 border-white rounded-2xl' src={d5}/>
    </div>
  )
}

export default Design