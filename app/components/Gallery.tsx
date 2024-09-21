import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {gallery01} from "../contents/gallery"; // Import your images here
import { gallery02 } from '../contents/gallery';

const Gallery = () => {
  const images = [gallery01, gallery02]; // Add more images as needed
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000); // 2 seconds delay for each image
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="h-[50vh] md:h-[100vh] w-full p-8 md:p-24  bg-gray-100 flex justify-center items-center">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg border shadow-gray-600 border-gray-300 shadow-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
