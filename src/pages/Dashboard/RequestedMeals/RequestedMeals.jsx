import { useQuery } from "@tanstack/react-query";
import { FaThumbsUp } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const RequestedMeals = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { data: requestedMeals } = useQuery({
    queryKey: ["requestedMeals", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/requested-meals?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Requested Meals
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Meal Title</th>
              <th className="text-center">
                <FaThumbsUp className="inline" /> Likes
              </th>
              <th>Reviews</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {requestedMeals?.map((meal, index) => (
              <tr key={meal._id}>
                <th>{index + 1}</th>
                <td>{meal.title}</td>
                <td className="text-center">{meal.likes}</td>
                <td>{meal.reviews_count}</td>
                <td>
                  <span
                    className={`badge ${
                      meal.status === "Delivered"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {meal.status}
                  </span>
                </td>
                <td>
                  {meal.status !== "Delivered" ? (
                    <button className="btn btn-sm btn-error text-white">
                      Cancel
                    </button>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
              </tr>
            ))}
            {requestedMeals?.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-8">
                  No requested meals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedMeals;
