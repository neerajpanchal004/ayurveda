'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Stars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1 my-2">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`w-8 h-8 ${index <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <FaStar className="w-full h-full" />
          </button>
        );
      })}
    </div>
  );
};

export default Stars;
