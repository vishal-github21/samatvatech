import { payment } from '@/public';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa'; // Importing FontAwesome icon

const Payment = () => {
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };

  const handleCloseClick = () => {
    setShowImage(false);
  };

  return (
    <div>
      {/* Fixed Payment Button */}
      <button
        className="fixed bottom-5 right-5 z-50 bg-blue-500 text-white p-2 text-xs md:text-base md:p-4 rounded-lg md:rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition duration-300"
        onClick={handleButtonClick}
      >
        <FaMoneyBillWave className="mr-2" />
        Pay Now
      </button>

      {/* Image and Close Button */}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <Image
              src={payment}
              alt="Payment"
              className="w-96 h-full object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white p-2 rounded-full transition duration-300"
              onClick={handleCloseClick}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
