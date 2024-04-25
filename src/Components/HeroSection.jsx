import React from 'react'
import subtract from "../assets/subtract.png"
import bimg from "../assets/background-img.png"

function HeroSection() {
  return (
   <div className='main-container root'> 
   <div className='relative '>
      <img src={bimg} alt="" className='w-full h-auto ' />
   
  
<div className="absolute left-0 inset-0 ">
<div className='px-7 py-10 pb-10 pl-10'>
  <h1 className='active text-5xl font-bold '>P TURN LAB</h1>
  <div className='border-2 border-b border-black w-[12%]  '></div>
     <div className='flex justify-between p-4 pb-10'>
        <div className='mt-40 flex'>
        <div className='mt-80 pt-80 justify-end '>
        <p className='font-semibold text-2xl flex justify-end text-gray-700'>SCROLL</p>
        <div className='border-2 border-b border-gray-700 w-25 '></div>
        </div>
        </div>
        <div className='mx-40'>
        <h1 className='text-9xl font-semibold  pl-20  text-left ml-20 '>THE <br /> CREATIVE PROJECT COLLECTIVES <br /> FOR THE <br /> NEXT <br /> GENERATION</h1>
        </div>
     </div>
  </div>

  {/* IMAGE SECTION */}
  <div className='w-full ' >
     <img src={subtract} alt="" />
  </div>

{/* LAST SECTION */}

<div className='flex p-10 justify-between m-10'>
  <div className='mt-40 pt-60'> 
     <h2 className='text-5xl font-bold  '>CONTACT</h2>
     <p className='bg-black text-pink-500 rounded-lg px-1 py-2 text-2xl font-normal active text-center tracking-widest'>P@PTURNLAB.com</p>
  </div>
  <div className='px-20 py-2 mx-10  '>
      <h1 className='text-9xl font-bold text-right'>OUR <br /> MISSION</h1>
      <div className='border-2 border-b border-black w-[65%] ml-80  text-right  '></div>
     <p className='text-2xl font-semibold text-right my-5 ml-20 pl-20 tracking-wide'>The mission of Pturn is to lead the economy and society forward throught creativity.
          Pturn is a collaborative of creative creators that are strategically curated. 
          They believe that creative collaboration yields new solutions to the client's most challenging problems.
           Our creators harness their creativity to positively impact the constituencies  they serve. By colloborating 
           on key issues, we are read to Pturn for the client's success, the economy, and society.</p>
  </div>
  </div>
  <div className='text-2xl text-center justify-center text-black  font-extrabold mb-10'>(C)2023 P TURN LAB</div>
</div>


     
     </div>
</div>


   
  )
}

export default HeroSection