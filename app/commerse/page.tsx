"use client"
import React from 'react'
import { Nav,Footer } from '../components'
import Image from 'next/image'
import { commerse_hero } from '@/public'
import Link from 'next/link'

const foundation = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-[10vh] relative min-h-screen'>
        <Image src={commerse_hero} alt='' className='h-[70vh] -z-10 md:h-auto absolute object-cover md:w-full'/>
        <div className='z-30 text-xl md:text-5xl font-medium md:font-normal text-slate-200 bg-transparent w-[80%] md:w-[60%] mx-auto text-center pt-[20vh] md:pt-[29vh]'>Expert Coaching for CBSE Commerce, CLAT, and CAT Exams</div>

        <div className='z-30 text-[0.75rem] md:text-base text-slate-300 bg-transparent w-[65%] md:w-[60%] mx-auto text-center pt-[3vh] md:pt-[4vh]'>Join us to build a strong foundation for your future in business, law, and management</div>

        <button className="text-gray-100 animate-glow bg-green-600 hover:bg-green-900 focus:ring-2 focus:outline-none transition-transform focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-6 py-1.5 md:px-9 md:py-2 mt-[7vh] md:mt-[10vh] text-center flex mx-auto items-center">
            <Link href="/foundation_enroll">Enroll Now</Link>
        </button>
      </div>
      <Footer/>
    </div>
  )
}

export default foundation