import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import useLike from "../../hooks/useLike";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const UpcomingMeals = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { handleLike, like } = useLike();
  const [likedMeal, setLikedMeal] = useState([])

  const { data: upcomingMeals = [] } = useQuery({
    queryKey: ["getUpcomingMeals", like],
    queryFn: async () => {
      const res = await axiosSecure.get("/upcoming-meals");
      return res.data;
    },
  });

  useEffect(()=>{
    const likedMeal = upcomingMeals.filter(meal => meal.likes.includes(user?.email))
    setLikedMeal(likedMeal)
  }, [upcomingMeals, user?.email])

  return (
    <div className="min-h-screen">
      <div className="mb-5">
        <h2 className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Upcoming Meals
        </h2>
        <p className="mt-2 text-stone-600">
          Check out the delicious meals planned for you.
        </p>
      </div>

      {upcomingMeals.map((meal) => (
        <div
          key={meal._id}
          className="flex sm:flex-row flex-col-reverse items-stretch justify-between gap-4 rounded-lg bg-[#fcf6f6] p-4 shadow-[0_0_4px_rgba(0,0,0,0.2)] mb-10"
        >
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#994d51] text-sm font-normal">
                {meal.category}
              </p>
              <p className="text-[#1b0e0e] text-xl font-bold leading-tight">
                {meal.title}
              </p>
              <p className="text-[#994d51] text-sm font-normal leading-normal">
                {meal.description}
              </p>
            </div>
            <button
              onClick={() => handleLike(meal._id)}
              disabled={likedMeal.some((liked) => liked._id === meal._id)}
              className="flex gap-2 cursor-pointer items-center justify-center rounded-lg px-4 py-2 flex-row-reverse bg-[#f3e7e8] text-[#1b0e0e] font-medium leading-normal w-fit disabled:cursor-not-allowed"
            >
              {likedMeal.some((liked) => liked._id === meal._id) ? (
                <>
                  Liked
                  <FaHeart size={25} />
                </>
              ) : (
                <>
                  Like
                  <FaRegHeart size={25} />
                </>
              )}
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{
              backgroundImage: `url("${meal.image}")`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMeals;
