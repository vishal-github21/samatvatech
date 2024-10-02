"use client"
import React from 'react'
import { Nav,Footer, Gallery } from '../components'
import Image from 'next/image'
import { foundation_hero } from '@/public'
import Link from 'next/link'
import { FaChalkboardTeacher, FaBook, FaUserGraduate, FaClipboardCheck } from 'react-icons/fa'

const foundation = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-[10vh] relative h-[70vh] md:h-[90vh] bg-white z-0'>
        <Image src={foundation_hero} alt='' className='h-[70vh] -z-10 md:h-auto absolute object-cover md:w-full'/>
        <div className='z-30 text-xl md:text-5xl font-medium md:font-normal text-slate-200 bg-transparent w-[80%] md:w-[60%] mx-auto text-center pt-[20vh] md:pt-[29vh]'>Achieve Success in IIT JEE & Medical Entrance Exams</div>

        <div className='z-30 text-[0.75rem] md:text-base text-slate-300 bg-transparent w-[65%] md:w-[60%] mx-auto text-center pt-[3vh] md:pt-[4vh]'>Comprehensive coaching for classes 6 to 12 Build a strong foundation with expert faculty.</div>

        <button className="text-gray-100 animate-glow bg-green-600 hover:bg-green-900 focus:ring-2 focus:outline-none transition-transform focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-6 py-1.5 md:px-9 md:py-2 mt-[7vh] md:mt-[10vh] text-center flex mx-auto items-center">
            <Link href="/contact_us">Enroll Now</Link>
        </button>
      </div>
      {/* Courses Overview Section */}
      <section className="py-12 bg-white">
        <div className="text-center mb-10">
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>
            Courses Overview
          </h2>
          <p className='mt-4 text-gray-500 md:text-lg'>
            At Samatva, we offer courses tailored for success in IIT JEE, NEET, and Foundation classes.
          </p>
        </div>

        {/* Foundation Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="bg-cyan-200 rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Foundation Courses (Classes 6 to 10)
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Strengthen basic concepts in subjects like Mathematics and Science, the stepping stones for competitive exams.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
              <li><strong>Conceptual Clarity:</strong> Building a deep understanding of core subjects.</li>
              <li><strong>Olympiad Prep:</strong> Special coaching for national-level competitions.</li>
              <li><strong>Interactive Learning:</strong> Engaging practical methods and digital tools.</li>
              <li><strong>Personalized Attention:</strong> Small batches with focused learning.</li>
            </ul>
          </div>

          {/* IIT JEE Coaching */}
          <div className="bg-cyan-200 rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              IIT JEE Coaching (Classes 11 and 12)
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Prepare for JEE Mains and Advanced with expert guidance in Physics, Chemistry, and Mathematics.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
              <li><strong>Comprehensive Syllabus:</strong> Detailed coverage of JEE-required subjects.</li>
              <li><strong>Rigorous Testing:</strong> Weekly tests and mock exams to evaluate progress.</li>
              <li><strong>Doubt Clearing Sessions:</strong> Special sessions to clarify complex topics.</li>
            </ul>
          </div>

          {/* NEET Coaching */}
          <div className="bg-cyan-200 rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-bold text-red-800 mb-3">
              NEET Coaching (Classes 11 and 12)
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Excel in NEET exams with expert coaching in Biology, Chemistry, and Physics.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
              <li><strong>MCQ Practice Sessions:</strong> Regular practice for NEET pattern questions.</li>
              <li><strong>Time Management:</strong> Learn effective time management during exams.</li>
              <li><strong>Mock Test Series:</strong> Simulate NEET exam conditions with full-length tests.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out text-center">
            <FaChalkboardTeacher className="text-4xl mx-auto text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Faculty</h3>
            <p className="text-gray-600 text-sm">
              Learn from highly experienced educators who are experts in their fields, ensuring quality education.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out text-center">
            <FaBook className="text-4xl mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Comprehensive Study Material</h3>
            <p className="text-gray-600 text-sm">
              Get access to well-researched and detailed study material designed to cover all aspects of the syllabus.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out text-center">
            <FaUserGraduate className="text-4xl mx-auto text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Proven Success Track Record</h3>
            <p className="text-gray-600 text-sm">
              We have a history of producing top rankers in IIT JEE, NEET, and other competitive exams.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out text-center">
            <FaClipboardCheck className="text-4xl mx-auto text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Regular Assessments & Mock Tests</h3>
            <p className="text-gray-600 text-sm">
              We conduct frequent tests and mock exams to track student progress and readiness for the real exams.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Gallery/>
      <Footer/>
    </div>
  )
}

export default foundation