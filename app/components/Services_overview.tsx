import Image from 'next/image'
import {hero,illus_1, illus_2, illus_3} from "@/public"
import Link from 'next/link'

const Services_overview = () => {
  return (
    <div className='bg-gray-100 mt-10'>
        <div className='ml-2 mt-2 p-[0.5vh] md:p-[1vh] w-[35vh] md:w-[65vh] rounded-tr-3xl flex justify-center text-center items-center md:text-2xl bg-gradient-to-r from-blue-500 to-violet-700'>
            Services overview
        </div>
        
<Link href="/workshops" className="flex flex-col items-center  bg-white rounded-lg md:flex-row w-[85%] hover:bg-gray-100 dark:border-gray-700 mx-auto my-6 shadow-lg shadow-gray-500">
    <Image className="object-cover md:max-w-[40%] rounded-t-lg filter sepia-[-60%] brightness-110 contrast-90 md:h-[60vh]  md:rounded-none md:rounded-s-lg" src={illus_1} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-700">Engage in Interactive Live Workshops</h5>
        <p className="mb-3 font-normal text-gray-500">Join our expert-led live workshops designed to enhance your skills with hands-on learning in cutting-edge technologies and tools. Stay ahead by participating in sessions covering the latest trends.</p>
        <button className='h-[5vh] w-[20vh] mt-3 ml-3 bg-gradient-to-r from-red-700 to-orange-600 flex justify-center items-center rounded-3xl '>Learn More</button>
    </div>
</Link>
<Link href="/tech/labs" className="flex flex-col items-center  bg-white rounded-lg md:flex-row w-[85%] hover:bg-gray-100 dark:border-gray-700 mx-auto my-6 shadow-lg shadow-gray-500">
    <Image className="object-cover md:max-w-[40%] rounded-t-lg filter sepia-[-60%] brightness-110 contrast-90 md:h-[60vh]  md:rounded-none md:rounded-s-lg" src={illus_2} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-700">Explore the World of STEM Labs</h5>
        <p className="mb-3 font-normal text-gray-500">Immerse yourself in practical STEM labs focused on science, technology, engineering, and math. Build, experiment, and innovate with real-world projects that inspire creativity and problem-solving.</p>
                <button className='h-[5vh] w-[20vh] mt-3 ml-3 bg-gradient-to-r from-green-700 to-teal-600 flex justify-center items-center rounded-3xl '>Get Started</button>
    </div>
</Link>
<Link href="/events" className="flex flex-col mb-24 items-center  bg-white rounded-lg md:flex-row w-[85%] hover:bg-gray-100 dark:border-gray-700 mx-auto my-6 shadow-lg shadow-gray-500">
    <Image className="object-cover md:max-w-[40%] rounded-t-lg filter sepia-[-60%] brightness-110 contrast-90 md:h-[60vh]  md:rounded-none md:rounded-s-lg" src={illus_3} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-700">Participate in Exciting Events</h5>
        <p className="mb-3 font-normal text-gray-500">Attend exclusive events that bring together industry professionals, enthusiasts, and learners. Network, collaborate, and explore new opportunities at our engaging events.</p>
                <button className='h-[5vh] w-[20vh] mt-3 ml-3 bg-gradient-to-r from-blue-700 to-violet-700 flex justify-center items-center rounded-3xl '>Join Now</button>
    </div>
</Link>

    </div>
  )
}

export default Services_overview