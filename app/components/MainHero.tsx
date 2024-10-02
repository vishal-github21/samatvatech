import { comm, footmain, frame4, jee, tech } from '@/public'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const MainHero = () => {
    const [options,setoptions]=useState(false);
  return (
    <div className='relative bg-transparent w-full'>
        <div className='absolute z-10 pt-[10vh] h-screen w-full'>
            <Image src={frame4} alt='' className='w-full h-full object-cover '/>
            {/* <Image src={frame4mob} alt='' className='w-full h-full object-cover block md:hidden'/> */}
        </div>
        <div className='absolute mt-[10vh] z-20 bg-transparent w-full'>
            <div className='relative w-full'>
            <div className='flex items-center text-gray-300 text-2xl md:text-5xl mx-auto w-[65%] md:w-[55%] mt-[15vh] md:mt-[20vh] text-center'>Unlock the Power of Learning, Shape the Future!</div>
            <div className='flex items-center text-xs md:text-sm text-gray-300 mx-auto w-[70%] mt-[6vh] md:w-[60%] text-center'>Empower yourself with the knowledge and skills to thrive in a dynamic world. Our expert-led programs ignite curiosity and inspire lifelong learning for a brighter tomorrow.</div>
            <div onClick={()=>setoptions(true)} className='flex cursor-pointer h-[6vh] w-[25vh] text-center items-center justify-center mx-auto mt-[5vh] md:mt-[7vh] text-black bg-[#AFFC41]'>GET STARTED</div>
            <div className='flex items-center justify-center'>
                <Image src={footmain} alt='' className='w-30% h-[7vh] md:h-[9vh] mt-[9vh] md:mt-[12vh]'/>
            </div>
            </div>
        </div>
        {options && (
  <div className='absolute z-30 pt-[10vh] bg-black bg-opacity-80 h-screen w-full'>
    <div className='flex flex-col md:flex-row h-full md:gap-[10vh] gap-[5vh] items-center justify-center p-[2vh] md:p-[5vh] md:px-[25vh]'>

      {/* Image and caption container */}
      <div className="relative h-[28%] md:h-[80%] w-[50%] md:w-[28%] bg-teal-700 border-2 border-teal-700 rounded-lg shadow">
        <Link href="/foundation"><Image className="rounded-lg w-full h-full object-cover" src={jee} alt='' />
        </Link><div className="absolute bottom-0 w-full rounded-b-lg text-teal-200 bg-black bg-opacity-50 text-center p-2">
          <p>Foundation | Jee | Medical</p>
        </div>
      </div>

      <div className="relative h-[28%] md:h-[80%] w-[50%] md:w-[28%] bg-teal-700 border-2 border-teal-700 rounded-lg shadow">
        <Link href="/commerce"><Image className="rounded-lg w-full h-full object-cover" src={comm} alt='' />
        </Link><div className="absolute bottom-0 w-full rounded-b-lg text-teal-200 bg-black bg-opacity-50 text-center p-2">
          <p>Commerce | CLAT</p>
        </div>
      </div>

      <div className="relative h-[28%] md:h-[80%] w-[50%] md:w-[28%] bg-teal-700 border-2 border-teal-700 rounded-lg shadow">
        <Link href="/tech"><Image className="rounded-lg w-full h-full object-cover" src={tech} alt='' />
        </Link><div className="absolute bottom-0 w-full rounded-b-lg text-teal-200 bg-black bg-opacity-50 text-center p-2">
          <p>Coding | Robotics</p>
        </div>
      </div>

    </div>
  </div>
)}

    </div>
  )
}

export default MainHero