import React from 'react';
import { Roboto_Mono, Pacifico, Bangers, Caveat, Indie_Flower, Lobster } from 'next/font/google';
import {  Bitter, Chakra_Petch, Handjet, Jacques_Francois_Shadow, Unlock } from 'next/font/google';
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '400' });
const pacifico = Lobster({ subsets: ['latin'], weight: '400' });
const bangers = Bangers({ subsets: ['latin'], weight: '400' });
const jacques_Francois_Shadow = Jacques_Francois_Shadow({ subsets: ['latin'], weight: '400' });
const indieFlower = Indie_Flower({ subsets: ['latin'], weight: '400' });
const bitter = Bitter({ subsets: ['latin'], weight: '400' });
const chakra_Petch = Chakra_Petch({ subsets: ['latin'], weight: '500' });
const handjet = Handjet({ subsets: ['latin'], weight: '500' });
const unlock = Unlock({ subsets: ['latin'], weight: '400' });
const Slidingskills = () => {
  const skills = [
    { text: 'Coding', font:handjet },
    { text: 'Robotics', font: unlock },
    { text: 'AR/VR', font: bitter  },
    { text: 'AppDevelopment', font: indieFlower },
    { text: 'GameCreation', font: chakra_Petch },
    { text: 'Breadboards', font: bangers },
    { text: 'Electronics', font: robotoMono },
  ];
  

  return (
    <div className='sliding-container bg-gradient-to-r from-zinc-200 to-stone-300'>
      <div className='sliding-track'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-600 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-500 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-500 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-500 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-500 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-500 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-500 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-500 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-500 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.font.className} text-gray-500 hover:scale-[120%] transition-transform md:text-5xl text-2xl md:px-8 px-4`}
          >
            {skill.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidingskills;
