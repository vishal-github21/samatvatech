import { app_game, collaboration, experience, foundation_knowledge, mentors, prototype, skills, thinking } from '@/public'
import { Bangers, Bitter, Chakra_Petch, Handjet, Jacques_Francois_Shadow, Roboto_Mono, Unlock } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
const bangers = Bitter({ subsets: ['latin'], weight: '400' });
const banger = Chakra_Petch({ subsets: ['latin'], weight: '400' });
const Provide = () => {
  return (
    <div>
      <div className='ml-2 my-2 h-[7vh] w-[35vh] md:w-[50vh] bg-cyan-700 rounded-tr-3xl flex justify-center text-center items-center md:text-xl bg-gradient-to-r from-teal-500 to-emerald-700'>
            What you gain
      </div>
      <div className='min-h-[90vh] w-full bg-gradient-to-r grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 md:px-20 md:py-10 px-10 py-5 from-emerald-600 to-teal-600'>
        <div className='flex flex-col justify-center items-center bg-black bg-opacity-5'><Image src={foundation_knowledge} alt='' className='hover:scale-[120%] transition-transform h-16 w-16 md:h-24 md:w-24'/><div className={`text-sm md:text-lg stroke-black stroke-2 text-white font-extrabold text-center pt-2 ${bangers.className}`}>Foundation Knowledge</div></div>
        <div className='flex flex-col justify-center items-center bg-black bg-opacity-5'><Image src={experience} alt='' className='hover:scale-[120%] transition-transform h-16 w-16 md:h-24 md:w-24'/><div className={`text-sm md:text-lg stroke-black stroke-2 text-white font-extrabold text-center pt-2 ${bangers.className}`}>Hands on Experience</div></div>
        <div className='flex flex-col justify-center items-center bg-black bg-opacity-5'><Image src={skills} alt='' className='hover:scale-[120%] transition-transform h-16 w-16 md:h-24 md:w-24'/><div className={`text-sm md:text-lg stroke-black stroke-2 text-white font-extrabold text-center pt-2 ${bangers.className}`}>technological skills</div></div>
        <div className='flex flex-col justify-center items-center bg-black bg-opacity-5'><Image src={thinking} alt='' className='hover:scale-[120%] transition-transform h-16 w-16 md:h-24 md:w-24'/><div className={`text-sm md:text-lg stroke-black stroke-2 text-white font-extrabold text-center pt-2 ${bangers.className}`}>Evolve Thinking Ability</div></div>
        <div className='flex flex-col justify-center items-center bg-black bg-opacity-5'><Image src={collaboration} alt='' className='hover:scale-[120%] transition-transform h-16 w-16 md:h-24 md:w-24'/><div className={`text-sm md:text-lg stroke-black stroke-2 text-white font-extrabold text-center pt-2 ${bangers.className}`}>Collaborations</div></div>
        <div className='flex flex-col justify-center items-center bg-black bg-opacity-5'><Image src={app_game} alt='' className='hover:scale-[120%] transition-transform h-16 w-16 md:h-24 md:w-24'/><div className={`text-sm md:text-lg stroke-black stroke-2 text-white font-extrabold text-center pt-2 ${bangers.className}`}>Develop apps and games</div></div>
        <div className='flex flex-col justify-center items-center bg-black bg-opacity-5'><Image src={prototype} alt='' className='hover:scale-[120%] transition-transform h-16 w-16 md:h-24 md:w-24'/><div className={`text-sm md:text-lg stroke-black stroke-2 text-white font-extrabold text-center pt-2 ${bangers.className}`}>build prototypes</div></div>
        <div className='flex flex-col justify-center items-center bg-black bg-opacity-5'><Image src={mentors} alt='' className='hover:scale-[120%] transition-transform h-16 w-16 md:h-24 md:w-24'/><div className={`text-sm md:text-lg stroke-black stroke-2 text-white font-extrabold text-center pt-2 ${bangers.className}`}>Supportive Mentors</div></div>
      </div>
    </div>
  )
}

export default Provide