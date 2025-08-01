import { useQuery } from "@tanstack/react-query";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecureOrPublic from "../../../../hooks/useAxiosSecureOrPublic";
import { Link } from "react-router";
import { useState } from "react";

const AllMeals = () => {
  const {axiosSecure} = useAxiosSecureOrPublic();
  const [ sortOption, setSortOption ] = useState("");

  const { data: meals = [] } = useQuery({
    queryKey: ["all-Meals", sortOption],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/all-meals?sort=${sortOption.split(" ").join("-")}`
      );
      return res.data;
    },
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">All Meals</h2>

      <div className="flex gap-4">
        <select
          onChange={(event) => setSortOption(event.target.value)}
          defaultValue=""
          className="select rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
        >
          <option value="">Sort by</option>
          <option>Like</option>
          <option>Reviews count</option>
        </select>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full min-w-[800px]">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Likes</th>
              <th>Reviews</th>
              <th>Rating</th>
              <th>Distributor</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal, index) => (
              <tr key={meal._id}>
                <td>{index + 1}</td>
                <td className="capitalize">{meal.title}</td>
                <td>{meal.likes.length}</td>
                <td>{meal.reviews.length}</td>
                <td>{meal.rating}</td>
                <td>{meal.distributorName}</td>
                <td className="flex gap-2 justify-center">
                  <Link
                    to={`/meal/${meal._id}`}
                    className="btn btn-sm btn-info"
                    title="View"
                  >
                    <FaEye />
                  </Link>
                  <button className="btn btn-sm btn-warning" title="Edit">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-error" title="Delete">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMeals;
