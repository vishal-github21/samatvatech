"use client"
import React from 'react'
import { Footer, Nav } from '../components'
import Image from 'next/image'
import { workshophero } from '@/public'

const workshop = () => {
  return (
    <main>
        <Nav/>
        <div className='relative mt-[10vh] min-h-screen bg-opacity-0 w-full  bg-gray-100'>
            <Image src={workshophero} alt="" className='-z-10 absolute w-full'/>
            <div className='text-4xl w-[100vh] text-black font-semibold pt-40 z-20 pl-40'>Fueling Imagination and Building Future-Ready Skills</div>
            <div className='text-black w-[100vh] pl-40 pt-6'>Dive into a world of creativity and discovery with engaging workshops that nurture the next generation of thinkers and creators. These hands-on sessions are designed to inspire curiosity and problem-solving. From building projects to unlocking new skills, every workshop fosters growth, imagination, and a passion for innovation.</div>
            <div className='h-[25vh] w-full'></div>
            <div className='h-[50vh] w-full bg-gray-100'>
                <div className='py-10 font-bold items-center text-4xl text-center text-teal-900'>Discover Our Engaging Workshops</div>
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default workshop