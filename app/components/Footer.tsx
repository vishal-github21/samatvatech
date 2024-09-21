import { logo } from '@/public'
import Image from 'next/image'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      email,
      query,
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        console.log('Success:', response);
        alert('Your query has been sent successfully!');
        setEmail('');
        setQuery('');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your query. Please try again.');
      });
  };
  return (
    <div className='md:h-[87vh] h-[50vh] w-full bg-[#d7d3e5]'>
      <div className='md:h-[40%] h-[30vh] flex flex-col items-center justify-center gap-4'>
      <form onSubmit={handleSubmit} className='md:w-[60%] w-[84%] md:p-6 rounded-md'>
          <h2 className='text-lg font-semibold text-black mb-4 mt-6 md:text-2xl'>Submit Your Query</h2>
          <div className='flex flex-row gap-4'><div className='w-[40%]'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=' block w-full border text-[0.6rem] border-gray-300 h-[5vh] md:text-sm mb-4 text-black rounded-md shadow-sm p-2'
            />
          </div>
          <div className='w-[60%]'>
            <label htmlFor='query' className='block text-sm font-medium text-gray-700 mb-2'>Your Query</label>
            <textarea
              id='query'
              name='query'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              rows={4}
              className=' block w-full border border-gray-300 h-[5vh] text-[0.6rem] md:text-sm mb-4 text-black rounded-md shadow-sm p-2'
            />
          </div></div>
          <button
            type='submit'
            className='md:w-[30%] bg-gray-600 text-white md:py-2 py-1 text-sm md:text-base px-4 rounded-md hover:bg-blue-600'
          >
            Send Query
          </button>
        </form>
      </div>
      <hr className='border-t border-gray-500 my-4 mx-[5vh] md:mx-[35vh]'/>
      <div className='md:h-[50%] h-[10%] flex flex-row p-10 justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <Image src={logo} alt="" className='hidden md:block' height={250} width={250}/>
        <div className='flex items-center justify-center text-center text-gray-700'>
          <p className='text-sm mt-1'>
            &copy; {new Date().getFullYear()} Samatva Tech | All rights reserved | Samatva
         </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer