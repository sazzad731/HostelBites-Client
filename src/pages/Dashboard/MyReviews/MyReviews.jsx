import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router";

const MyReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["my-reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${user?.email}`);
      return res.data;
    },
  });


  if (isLoading)
    return <LoadingSpinner/>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-10 text-center">My Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-500 text-center">No reviews found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="table">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th>#</th>
                <th>Meal Title</th>
                <th>Like</th>
                <th>Comment</th>
                <th>View Meal</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review._id}>
                  <th>{index + 1}</th>
                  <td className="flex items-center gap-3">
                    <span className="font-medium">{review.mealTitle}</span>
                  </td>
                  <td>{review.like}</td>
                  <td>{review.review.comment}</td>
                  <td>
                    <Link
                      to={`/meal/${review.mealId}`}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <Link className="btn btn-accent">Edit</Link>
                  </td>
                  <td>
                    <Link className="btn btn-error">Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
