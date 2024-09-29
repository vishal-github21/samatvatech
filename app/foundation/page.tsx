"use client"
import React from 'react'
import { Nav,Footer } from '../components'
import Image from 'next/image'
import { foundation_hero } from '@/public'
import Link from 'next/link'

const foundation = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-[10vh] relative min-h-screen'>
        <Image src={foundation_hero} alt='' className='h-[70vh] -z-10 md:h-auto absolute object-cover md:w-full'/>
        <div className='z-30 text-xl md:text-5xl text-slate-200 bg-transparent w-[80%] md:w-[60%] mx-auto text-center pt-[20vh] md:pt-[25vh]'>Achieve Success in IIT JEE & Medical Entrance Exams</div>

        <div className='z-30 text-[1rem] md:text-base text-slate-300 bg-transparent w-[70%] md:w-[60%] mx-auto text-center pt-[4vh] md:pt-[4vh]'>Comprehensive coaching for classes 6 to 12 Build a strong foundation with expert faculty.</div>

        <button className="text-gray-100 animate-glow bg-green-600 hover:bg-green-900 focus:ring-2 focus:outline-none transition-transform focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-6 py-1.5 md:px-9 md:py-2 mt-[6vh] md:mt-[10vh] text-center flex mx-auto items-center">
            <Link href="/foundation_enroll">Enroll Now</Link>
        </button>
      </div>
      <Footer/>
    </div>
  )
}

export default foundation