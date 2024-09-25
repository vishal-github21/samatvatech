"use client"
import React from 'react'
import { Footer,Nav } from '../components'

const events = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
        <Nav/>
        <div className='mt-[10vh] h-[85vh] flex justify-center md:text-2xl font-mono items-center text-teal-600 animate-pulse'>No Events Currently</div>
        <Footer/>
    </div>
  )
}

export default events