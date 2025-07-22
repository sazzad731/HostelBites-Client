import React from 'react';
import { FaStar } from 'react-icons/fa';

const StaticRating = ({rating}) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <button key={value} type="button" disabled>
            <FaStar
              className={`h-4 w-4 transition-colors ${
                value <= rating ? "text-primary" : "text-gray-300"
              }`}
            />
          </button>
        );
      })}
    </>
  );
};

export default StaticRating;