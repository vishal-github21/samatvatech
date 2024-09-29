"use client"
import React from 'react'
import { Footer, Nav } from '../components'

const contact_us = () => {
  return (
    <div>
      <Nav />
      <div className='mt-[10vh] relative bg-gray-100 min-h-screen'>
        <div className="px-6 py-12">
          <h1 className="text-3xl font-bold text-teal-700 text-center mb-12">Our Branches</h1>
          
          {/* Barbil Branch */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-700 font-semibold">Barbil Branch</h2>
            <p className=' text-gray-700'>City centre, above TVS showroom, beside fire station, Kalinga road, Barbil, Odisha - 758035</p>
            <p className=' text-gray-700'>Contact: 8917420556</p>
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462.09023945105776!2d85.38158685708936!3d22.098434600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1fb9118d57bf81%3A0xee3690f1015883a5!2sTVS%20-%20M%2FS%20Anjali%20Motors!5e0!3m2!1sen!2sin!4v1727617853153!5m2!1sen!2sin"             
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Joda Branch */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-700 font-semibold">Joda Branch</h2>
            <p className='text-gray-700'>UP/ME School, near Hanthi park, Joda east, Joda Keonjhar Odisha (Tata Steel Supported Branch)</p>
            <p className='text-gray-700'>Contact: 8918420556</p>
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118414.12399956828!2d85.41227733466907!3d21.956017021549904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1fab798fb91011%3A0x89a611573450a4cd!2sUP%20ME%20SCHOOL!5e0!3m2!1sen!2sin!4v1727617991878!5m2!1sen!2sin"
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Dhanbad Branch */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-700 font-semibold">Dhanbad Branch</h2>
            <p className='text-gray-700'>Kunj Vihar Colony, Flat No-22, Raghuvar Nagar, Sugiadih, Dhanbad - 828127</p>
            <p className='text-gray-700'>Contact: 8918420556</p>
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58397.7833587485!2d86.3777990458492!3d23.823525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bb7ecdfc6209%3A0x9bfbe8d51b116b0c!2sKunj%20Vihar%20Sugiadih!5e0!3m2!1sen!2sin!4v1727618280868!5m2!1sen!2sin"
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default contact_us
