"use client"
import React from 'react'
import { Footer, Nav } from '../components'
import Image from 'next/image'
import { comm, gouri, md, profile } from '@/public'

const our_team = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-[10vh] w-full bg-gray-100'>
        <span className='md:text-4xl text-xl font-semibold text-teal-700 justify-center items-center flex py-5 font-serif bg-gray-100'>Meet The Samatva Team</span>
        <div className='text-teal-700 bg-gray-100 grid md:grid-cols-4 grid-cols-2 mx-[10%] py-5 gap-8 md:gap-12'>
          <div className='bg-white h-[30vh]  md:h-[44vh] w-full rounded-lg border border-teal-800'>
            <Image src={gouri} alt='' className='rounded-t-lg h-[21vh] md:h-[34vh] w-full object-cover'/>
            <div className='h-[9vh] md:h-10vh flex-row justify-center items-center text-center'>
            <p className='px-1 md:px-2 text-xs md:text-base font-bold'>Gouri Shankar</p>
            <p className='px-1 md:px-2 text-[0.7rem] md:text-sm font-medium'>Founder</p>
            </div>
          </div>
          <div className='bg-white h-[30vh]  md:h-[44vh] w-full rounded-lg border border-teal-800'>
            <Image src={md} alt='' className='rounded-t-lg h-[21vh] md:h-[34vh] w-full object-cover'/>
            <div className='h-[9vh] md:h-10vh flex-row justify-center items-center text-center'>
            <p className='px-1 md:px-2 text-xs md:text-base font-bold'>MD. Aqueel Ansari</p>
            <p className='px-1 md:px-2 text-[0.7rem] md:text-sm font-medium'>Chief Mentor (Chemistry)</p>
            </div>
          </div>
          <div className='bg-white h-[30vh]  md:h-[44vh] w-full rounded-lg border border-teal-800'>
            <Image src={profile} alt='' className='rounded-t-lg h-[21vh] md:h-[34vh] w-full object-cover'/>
            <div className='h-[9vh] md:h-10vh flex-row justify-center items-center text-center'>
            <p className='px-1 md:px-2 text-xs md:text-base font-bold'>Vishal Kumar</p>
            <p className='px-1 md:px-2 text-[0.7rem] md:text-sm font-medium'>Web Developer and Teacher</p>
            </div>
          </div>
          <div className='bg-white h-[30vh]  md:h-[44vh] w-full rounded-lg border border-teal-800'>
            <Image src={comm} alt='' className='rounded-t-lg h-[21vh] md:h-[34vh] w-full object-cover'/>
            <div className='h-[9vh] md:h-10vh flex-row justify-center items-center text-center'>
            <p className='px-1 md:px-2 text-xs md:text-base font-bold'>Ashish Kumar Singh</p>
            <p className='px-1 md:px-2 text-[0.7rem] md:text-sm font-medium'>Teacher</p>
            </div>
          </div>
          

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default our_team