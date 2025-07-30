import { useNavigate, useParams } from "react-router";
import { FiThumbsUp } from "react-icons/fi";
import { formatDistance } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Rating from "react-rating";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import usePurchased from "../../hooks/usePurchased";
import useLike from "../../hooks/useLike";


const MealDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure();
  const [ addedReview, setAddedReview ] = useState(false)
  const hasSubscribed = usePurchased()
  const { handleLike, like, setLike, likeCount } = useLike();
  
  const { data: meal, isLoading } = useQuery({
    queryKey: ["mealDetail", addedReview, id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meal/${id}`);
      return res.data;
    },
  });

  useEffect(()=>{
    if(!isLoading){
      if (meal?.likes.includes(user?.email)) {
        return setLike(true);
      }
    }
  }, [ meal?.likes, setLike, user?.email, isLoading ])



  const handleMealRequest = async()=>{
    if (!user) {
      return navigate('/login');
    }
    if(!hasSubscribed){
      return navigate("/", { state: { scrollTo: "membership" } });
    }
    const requestedMealInfo = {
      userEmail: user?.email,
      mealId: id,
      status: 'pending'
    };
    try{
      const res = await axiosSecure.post("/meal-request", requestedMealInfo);
      if(res.data.insertedId){
        Swal.fire({
          title: "Meal Requested Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        })
      }
      if(res.data.code === 208){
        Swal.fire({
          title: res.data.message,
          icon: "error",
        });
      }
    }catch(error){
      Swal.fire({
        title: error.message,
        icon: "error"
      })
      console.log(error);
    }
  }



  const handleAddReview = async(event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    if(!user) return navigate('/login')
    const review = {
      userName: user.displayName,
      email: user.email,
      img: user.photoURL,
      comment: comment
    }

    const result = await axiosSecure.post(`/add-review?mealId=${id}`, review);

    if (result.data.modifiedCount === 1) {
      Swal.fire({
        title: "Review added successfully",
        icon: "success"
      })
      setAddedReview(true);
    }
  };

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
                  new Date(meal?.postTime)
                )}
              </p>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">
                  <Rating
                    emptySymbol={
                      <FaRegStar className="text-primary" size={20} />
                    }
                    fullSymbol={
                      <FaStarHalfAlt className="text-primary" size={20} />
                    }
                    placeholderSymbol={
                      <FaStar className="text-primary" size={20} />
                    }
                    placeholderRating={meal?.rating}
                    readonly
                  />
                </h4>
                <p className="text-lg font-bold">({meal?.rating})</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={()=>handleLike(meal?._id)}
                  disabled={like}
                  className={`btn btn-outline btn-primary flex items-center gap-2`}
                >
                  <FiThumbsUp />
                  Like ({meal.likes.length + likeCount})
                </button>
                <button onClick={handleMealRequest} className="btn btn-primary">
                  Request Meal
                </button>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-12">
            {/* Add Review Form */}
            <div className="mb-10">
              <h4 className="font-semibold mb-2">Add Your Review</h4>
              <form onSubmit={handleAddReview}>
                <textarea
                  className="textarea textarea-bordered w-full mb-4"
                  rows="4"
                  placeholder="Write your review here..."
                  name="comment"
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary">
                  Post Review
                </button>
              </form>
            </div>

            <h3 className="text-2xl font-poppins font-bold mb-4">
              Reviews ({meal?.reviews.length})
            </h3>

            <div className="space-y-6">
              {/* Review Item */}

              {meal?.reviews.map((review) => (
                <div
                  key={review?.timeStamp}
                  className="border border-gray-200 p-4 rounded-lg shadow-sm"
                >
                  <h4 className="font-semibold">{review?.userName}</h4>
                  <p className="text-gray-600 text-sm">
                    Posted{" "}
                    {formatDistance(new Date(), new Date(review?.timeStamp))}
                  </p>
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
