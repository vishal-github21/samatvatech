"use client"
import React from 'react'
import { Footer, Nav } from '../components'
import Image from 'next/image'
import { workshopdata, workshophero } from '@/public'

const workshop = () => {
  return (
    <main>
        <Nav/>
        <div className='relative mt-[10vh] bg-opacity-0 w-full  bg-gray-100'>
            <Image src={workshophero} alt="" className='-z-10 absolute w-full hidden md:block object-cover'/>
            <div className='md:text-4xl md:w-[100vh] hidden md:block text-black font-semibold md:pt-40 z-20 md:pl-40'>Fueling Imagination and Building Future-Ready Skills</div>
            <div className='text-black md:w-[100vh] md:pl-40 hidden md:block md:pt-6'>Dive into a world of creativity and discovery with engaging workshops that nurture the next generation of thinkers and creators. These hands-on sessions are designed to inspire curiosity and problem-solving. From building projects to unlocking new skills, every workshop fosters growth, imagination, and a passion for innovation.</div>
            <div className='h-[25vh] hidden md:block w-full'></div>
            <div className='w-full bg-gray-100'>
                <div className='py-10 font-bold items-center text-2xl md:text-4xl text-center text-teal-900'>Discover Our Engaging Workshops</div>
                <div className=''>
                  <Image src={workshopdata} alt='' className=' w-full'/>
                </div>
                <div className='mx-[10%] text-gray-700 text-center pb-[4vh] md:pb-[10vh] text-xs font-bold md:text-base'>contact us to get the workshop information in your area and to arrange our workshop in your institution</div>
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default workshop