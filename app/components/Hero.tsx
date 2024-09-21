import React from 'react';
import Image from "next/image";
import { hero } from "@/public";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="h-[70vh] mt-[10vh] w-full bg-gray-100 relative">
      {/* Background Image */}
      <div className='w-full h-full bg-cover filter  brightness-110 contrast-90 overflow-hidden border border-gray-300'>
        <Image src={hero} alt="hero" className='object-cover w-full h-full' />
      </div>
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-5">
        <div className="bg-black bg-opacity-50 p-5 rounded-lg animate-glow ">
          <p className="text-gray-100 text-lg md:text-xl lg:text-2xl font-serif font-bold text-center">
            Embrace the Journey of Technology Learning
          </p>
        </div>
          <button className="text-white translate-y-8  animate-glow bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none transition-transform focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            <Link href="/workshops">Explore workshops</Link>
          </button>
      </div>
    </div>
  );
};

export default Hero;
