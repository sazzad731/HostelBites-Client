import { useParams } from "react-router";
import { FiThumbsUp } from "react-icons/fi";
import { formatDistance } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import StaticRating from "../../components/StarRating/StaticRating";


const MealDetail = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  
  const { data: meal, isLoading } = useQuery({
    queryKey: [ 'mealDetail' ],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/meal/${id}`)
      return res.data
    }
  })

  console.log(meal);

  return (
    <section className="sm:px-4 py-10">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Meal Image */}
            <img
              src={meal?.image}
              alt="Meal"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />

            {/* Meal Info */}
            <div className="space-y-4">
              <h1 className="text-3xl font-poppins font-bold">{meal?.title}</h1>
              <p className="text-gray-600 font-inter">
                {meal?.distributorName}
              </p>

              <p className="text-gray-700 font-inter">{meal?.description}</p>

              <div>
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {meal?.ingredients.split(", ").map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-500 text-sm font-inter">
                Posted{" "}
                {formatDistance(
                  new Date(),
                  new Date(meal?.postTime?.split("-").join(", "))
                )}
              </p>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">
                  <StaticRating rating={meal?.rating}/>
                </h4>
                <p className="text-lg font-bold">({meal?.rating})</p>
              </div>

              <div className="flex items-center gap-4">
                <button className="btn btn-outline btn-primary flex items-center gap-2">
                  <FiThumbsUp />
                  Like
                </button>
                <button className="btn btn-primary">Request Meal</button>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-12">
            {/* Add Review Form */}
            <div className="mb-10">
              <h4 className="font-semibold mb-2">Add Your Review</h4>
              <textarea
                className="textarea textarea-bordered w-full mb-4"
                rows="4"
                placeholder="Write your review here..."
              ></textarea>
              <button className="btn btn-primary">Post Review</button>
            </div>

            <h3 className="text-2xl font-poppins font-bold mb-4">
              Reviews ({meal?.reviews.length})
            </h3>

            <div className="space-y-6">
              {/* Review Item */}

              {meal?.reviews.map((review) => (
                <div className="border border-gray-200 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">{review?.user}</h4>
                  <p className="text-gray-600 text-sm">{review?.timeStamp}</p>
                  <p className="mt-2 font-inter">{review?.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MealDetail;
