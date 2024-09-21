import React, { useRef } from 'react'
import {reviews} from "../contents"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Reviews = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    };
  
  return (
    <div className="relative p-8 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-black">Customer Reviews</h2>
      
      {/* Scroll Buttons */}
      <button
        className="absolute left-2 opacity-60 top-[55%] transform -translate-y-1/2 z-10 bg-blue-500 p-2 rounded-full shadow-md"
        onClick={scrollLeft}
      >
        <FaChevronLeft size={28} />
      </button>
      <button
        className="absolute right-2 top-[55%] opacity-60 transform -translate-y-1/2 z-10 bg-blue-500 p-2 rounded-full shadow-md"
        onClick={scrollRight}
      >
        <FaChevronRight size={28} />
      </button>

      {/* Horizontal scroll wrapper */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
      >
        {reviews.map((review, index) => (
          <div key={index} className="min-w-[250px] max-w-[300px] p-6 bg-gray-200 shadow-md rounded-md flex-shrink-0">
            <h3 className="text-lg font-bold text-black mb-2">{review.title}</h3>
            <div className="mb-2">
              {"⭐".repeat(review.stars)}{" "}
              {"☆".repeat(5 - review.stars)} {/* Show unfilled stars */}
            </div>
            <p className="text-gray-600 mb-4">{review.review}</p>
            <p className="text-sm text-gray-500 font-medium">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews