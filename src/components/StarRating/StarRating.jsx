// src/components/StarRating.jsx
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ maxStars = 5, initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  const handleClick = (value) => {
    setRating(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxStars)].map((_, index) => {
        const value = index + 1;
        return (
          <button
            key={value}
            type="button"
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(null)}
            className="focus:outline-none"
            disabled
          >
            <FaStar
              className={`h-6 w-6 transition-colors cursor-not-allowed ${
                value <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
