import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecureOrPublic from '../../../hooks/useAxiosSecureOrPublic';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Rating from 'react-rating';

const MealsByCategory = () => {
  const [category, setCategory] = useState("")
  const {axiosPublic} = useAxiosSecureOrPublic();
  const { data: meals, isLoading } = useQuery({
    queryKey: [ 'mealsData', category ],
    queryFn: async()=>{
      const res = await axiosPublic.get(
        `/mealsByCategory?category=${category}`
      );
      return res.data
    }
  })
  

  return (
    <section className="my-16 sm:mt-36">
      <div className="mb-8 border-b border-black/20">
        <div className="flex justify-center -mb-px space-x-6 sm:space-x-8">
          <button
            onClick={() => setCategory("")}
            className={`cursor-pointer py-3 px-1 ${
              category === ""
                ? "border-primary text-primary font-bold border-b-2"
                : "text-slate-500 font-medium"
            } hover:text-primary hover:border-primary transition-colors text-sm`}
            href="#"
          >
            All Meals
          </button>
          <button
            onClick={() => setCategory("Breakfast")}
            className={`cursor-pointer py-3 px-1 ${
              category === "Breakfast"
                ? "border-primary text-primary font-bold border-b-2"
                : "text-slate-500 font-medium"
            } hover:text-primary hover:border-primary transition-colors text-sm`}
            href="#"
          >
            Breakfast
          </button>
          <button
            onClick={() => setCategory("Lunch")}
            className={`cursor-pointer py-3 px-1 ${
              category === "Lunch"
                ? "border-primary text-primary font-bold border-b-2"
                : "text-slate-500 font-medium"
            } hover:text-primary hover:border-primary transition-colors text-sm`}
            href="#"
          >
            Lunch
          </button>
          <button
            onClick={() => setCategory("Dinner")}
            className={`cursor-pointer py-3 px-1 ${
              category === "Dinner"
                ? "border-primary text-primary font-bold border-b-2"
                : "text-slate-500 font-medium"
            } hover:text-primary hover:border-primary transition-colors text-sm`}
            href="#"
          >
            Dinner
          </button>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals?.map((meal) => (
            <div
              key={meal._id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${meal.image})`,
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {meal.title}
                </h3>
                <div className="flex items-center mb-2 text-sm text-primary">
                  <Rating
                    emptySymbol={<FaRegStar className="text-primary" size={18}/>}
                    fullSymbol={<FaStarHalfAlt className="text-primary" size={18}/>}
                    placeholderSymbol={<FaStar className="text-primary" size={18}/>}
                    placeholderRating={meal?.rating}
                    readonly
                  />
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  {meal.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-primary">
                    ${meal.price}
                  </p>
                  <Link
                    to={`/meal/${meal._id}`}
                    className="text-sm font-semibold text-primary hover:bg-primary/15 px-5 py-2 transition-colors cursor-pointer rounded-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MealsByCategory;