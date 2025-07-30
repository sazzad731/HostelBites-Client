import { useState } from "react";
import { FaSearch, FaUtensils } from "react-icons/fa";
import useUserRole from "../../../../hooks/useUserRole";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

const ServeMeals = () => {
  const { role } = useUserRole();
  const [ searchTerm, setSearchTerm ] = useState("");
  const axiosSecure = useAxiosSecure();
  
  const { data: requestedMeals = [], refetch, isLoading } = useQuery({
    queryKey: [ 'serveMeals', role, searchTerm ],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/requested-meals?role=${role}&&search=${searchTerm}`);
      return res.data
    }
  });


  const handleStatus = async(id)=>{
    const res = await axiosSecure.patch(`/requested-meal/status/update`, { id });
    if (res.data.modifiedCount === 1){
      Swal.fire({
        title: "Status updated successful",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      })
      refetch()
    }
  }

  if(isLoading){
    return <LoadingSpinner/>
  }


  return (
    <div className="space-y-6">
      <div className="flex sm:flex-row flex-col gap-10 items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaUtensils /> Serve Meals
        </h2>

        <div className="relative">
          <input
            type="text"
            placeholder="Search by user email or name..."
            className="input input-bordered pl-10 w-64"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg">
        {requestedMeals.length === 0 ? (
          <h4 className="text-center text-xl text-black/60 mt-20">No data found</h4>
        ) : (
          <table className="table table-zebra w-full">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th className="whitespace-nowrap">#</th>
                <th className="whitespace-nowrap">Meal Title</th>
                <th className="whitespace-nowrap">User Email</th>
                <th className="whitespace-nowrap">User Name</th>
                <th className="whitespace-nowrap">Status</th>
                <th className="whitespace-nowrap">Serve</th>
              </tr>
            </thead>
            <tbody>
              {requestedMeals.map((meal, ind) => (
                <tr key={meal._id}>
                  <td className="whitespace-nowrap">{ind + 1}</td>
                  <td className="whitespace-nowrap">{meal.title}</td>
                  <td className="whitespace-nowrap">{meal.userEmail}</td>
                  <td className="whitespace-nowrap">{meal.userName}</td>
                  <td
                    className={`${
                      meal.status === "pending"
                        ? "text-warning"
                        : "text-success"
                    } font-semibold whitespace-nowrap capitalize`}
                  >
                    {meal.status}
                  </td>
                  <td className="whitespace-nowrap">
                    <button
                      onClick={() => handleStatus(meal._id)}
                      className="btn btn-sm btn-success"
                      disabled={meal.status === "delivered"}
                    >
                      Serve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ServeMeals;
