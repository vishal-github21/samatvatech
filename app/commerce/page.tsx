"use client"
import React from 'react'
import { Nav,Footer, Gallery } from '../components'
import Image from 'next/image'
import { commerse_hero } from '@/public'
import Link from 'next/link'
import { FaChalkboardTeacher, FaBook, FaUserGraduate, FaClipboardCheck } from 'react-icons/fa'

const foundation = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-[10vh] relative h-[70vh] md:h-[90vh] bg-white z-0'>
        <Image src={commerse_hero} alt='' className='h-[70vh] -z-10 md:h-auto absolute object-cover md:w-full'/>
        <div className='z-30 text-xl md:text-5xl font-medium md:font-normal text-slate-200 bg-transparent w-[80%] md:w-[60%] mx-auto text-center pt-[20vh] md:pt-[29vh]'>Expert Coaching for CBSE Commerce, CLAT, and CAT Exams</div>

        <div className='z-30 text-[0.75rem] md:text-base text-slate-300 bg-transparent w-[65%] md:w-[60%] mx-auto text-center pt-[3vh] md:pt-[4vh]'>Join us to build a strong foundation for your future in business, law, and management</div>

        <button className="text-gray-100 animate-glow bg-green-600 hover:bg-green-900 focus:ring-2 focus:outline-none transition-transform focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-6 py-1.5 md:px-9 md:py-2 mt-[7vh] md:mt-[10vh] text-center flex mx-auto items-center">
            <Link href="/foundation_enroll">Enroll Now</Link>
        </button>
      </div>
      <section className="py-12 bg-white">
  <div className="text-center mb-10">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
      Courses Overview
    </h2>
    <p className="mt-4 text-gray-500 md:text-lg">
      At Samatva, we offer comprehensive courses for Commerce, CLAT, and CAT.
    </p>
  </div>

  {/* Courses Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 lg:px-32">
    {/* Commerce Courses */}
    <div className="bg-cyan-200 rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
      <h3 className="text-xl font-bold text-orange-800 mb-3">
        Commerce Coaching (Classes 11 and 12)
      </h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
        Tailored coaching for Commerce students focusing on Accountancy, Economics, and Business Studies.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
        <li><strong>Conceptual Understanding:</strong> Deep dive into Commerce subjects.</li>
        <li><strong>Accountancy Practice:</strong> Real-life problem-solving with accounting practices.</li>
        <li><strong>Interactive Learning:</strong> Use of case studies and digital tools.</li>
        <li><strong>Mock Exams:</strong> Regular assessments to track progress.</li>
      </ul>
    </div>

    {/* CLAT Coaching */}
    <div className="bg-cyan-200 rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
      <h3 className="text-xl font-bold text-teal-800 mb-3">
        CLAT Coaching (Law Entrance Exams)
      </h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
        Prepare for CLAT with a structured course covering logical reasoning, legal aptitude, and more.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
        <li><strong>Legal Aptitude:</strong> Understanding key legal concepts.</li>
        <li><strong>Logical Reasoning:</strong> Developing reasoning and critical thinking skills.</li>
        <li><strong>Comprehensive Study Material:</strong> Detailed notes and practice sets.</li>
        <li><strong>Mock Test Series:</strong> Simulated exams to prepare for real test conditions.</li>
      </ul>
    </div>

    {/* CAT Coaching */}
    <div className="bg-cyan-200 rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
      <h3 className="text-xl font-bold text-yellow-800 mb-3">
        CAT Coaching (MBA Entrance)
      </h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
        A specialized program for CAT aspirants, focusing on Quantitative Aptitude, Logical Reasoning, and Verbal Ability.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-xs sm:text-sm md:text-base">
        <li><strong>Quantitative Aptitude:</strong> Master the key concepts and tricks.</li>
        <li><strong>Verbal Ability:</strong> Improve comprehension, vocabulary, and grammar.</li>
        <li><strong>Mock Test Series:</strong> Real-time CAT test simulations.</li>
        <li><strong>Time Management:</strong> Strategies to manage time during exams.</li>
      </ul>
    </div>
  </div>
</section>

{/* Why Choose Us Section */}
<section className="py-16 bg-gradient-to-b from-gray-100 to-white text-gray-800">
  <div className="container mx-auto px-4 sm:px-8">
    <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
      Why Choose Us
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Expert Faculty */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out text-center">
        <FaChalkboardTeacher className="text-4xl mx-auto text-blue-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Expert Faculty</h3>
        <p className="text-gray-600 text-sm">
          Learn from highly experienced educators who are experts in their fields, ensuring quality education.
        </p>
      </div>

      {/* Comprehensive Study Material */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out text-center">
        <FaBook className="text-4xl mx-auto text-green-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Comprehensive Study Material</h3>
        <p className="text-gray-600 text-sm">
          Get access to well-researched and detailed study material designed to cover all aspects of the syllabus.
        </p>
      </div>

      {/* Proven Success Track Record */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out text-center">
        <FaUserGraduate className="text-4xl mx-auto text-purple-600 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Proven Success Track Record</h3>
        <p className="text-gray-600 text-sm">
          We have a history of producing top rankers in competitive exams like IIT JEE, NEET, CLAT, and CAT.
        </p>
      </div>

      {/* Regular Assessments */}
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