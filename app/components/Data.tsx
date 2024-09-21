import Image from "next/image"
import {people,labs,events,workshop} from "@/public"
const Data = () => {
  return (
    <div className="grid grid-cols-4 mx-auto my-2 border-[10px] border-black rounded-lg justify-center w-[95%] mt-10 h-[30vh] md:h-[45vh] bg-gradient-conic to-teal-950 from-slate-950">
        <div className="flex flex-col md:selection:gap-2 items-center justify-center">
            <div className="font-bold"><Image src={events} alt="" className="md:h-24 md:w-24 p-1"/></div>
            <div className="font-bold md:text-2xl font-serif mt-1 text-violet-400">15+</div>
            <div className="animate-glow font-semibold font-serif text-[0.7rem] md:text-base mt-2 text-violet-400 text-center">Events organised</div>
        </div>
        <div className="flex flex-col md:gap-2 items-center justify-center">
            <div className="font-bold"><Image src={workshop} alt="" className="md:h-24 md:w-24 p-1"/></div>
            <div className="font-bold md:text-2xl font-serif text-red-300">50+</div>
            <div className="animate-glow font-semibold font-serif text-[0.7rem] md:text-base text-red-300 text-center">Workshops conducted</div>
        </div>
        <div className="flex flex-col md:gap-2 items-center justify-center">
            <div className="font-bold"><Image src={labs} alt="" className="md:h-24 md:w-24"/></div>
            <div className="font-bold md:text-2xl font-serif text-orange-400">20+</div>
            <div className="animate-glow font-semibold font-serif text-[0.7rem] md:text-base text-orange-400 text-center">Lab setups</div>
        </div>
        <div className="flex flex-col md:gap-2 items-center justify-center">
            <div className="font-bold"><Image src={people} alt="" className="md:h-24 md:w-24"/></div>
            <div className="font-bold md:text-2xl font-serif text-yellow-400">400+</div>
            <div className="animate-glow font-semibold font-serif text-[0.7rem] md:text-base text-yellow-400 text-center">Active members</div>
        </div>
    </div>
  )
}

export default Data