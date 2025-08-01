import { useState } from "react";
import { FaPlus, FaUpload } from "react-icons/fa";
import Modal from "./Modal";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecureOrPublic from "../../../../hooks/useAxiosSecureOrPublic";
import Swal from "sweetalert2";

const AddUpcomingMeals = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ uploaded, setUploaded ] = useState(false);
  const {axiosSecure} = useAxiosSecureOrPublic();
  
  const { data: upcomingMeals = [], refetch } = useQuery({
    queryKey: ["upcomingMeals", uploaded===true],
    queryFn: async () => {
      const res = await axiosSecure.get("/upcoming-meals");
      setUploaded(false);
      return res.data;
    },
  });


  const handlePublish = async(id)=>{
    const publishableMeal = upcomingMeals.find(meals => meals._id === id);
    delete publishableMeal._id  
    
    try{
      const res = await axiosSecure.post('/add-meal', publishableMeal)
      if(res.data.insertedId){
        const res = await axiosSecure.delete(`/delete-upcomingMeal/${id}`);
        if (res.data.deletedCount === 1){
          Swal.fire({
            title: "Meal Published Successful",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          })
          refetch();
        }
      }
    }catch(error){
      Swal.fire({
        title: error.message,
        text: error,
        icon: "error"
      })
      console.log(error)
    }
  }


  return (
    <div className="space-y-6">
      {/* Heading and Add Button */}
      <div className="flex sm:flex-row flex-col justify-between gap-10 items-center">
        <h2 className="text-2xl font-bold">Upcoming Meals</h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <FaPlus className="mr-2" /> Add Upcoming Meal
        </button>
      </div>

      {/* Meals Table */}
      {upcomingMeals.length === 0 ? (
        <h4 className="text-center mt-20 text-xl text-black/50">
          No Meals Added
        </h4>
      ) : (
        <div className="overflow-x-auto rounded">
          <table className="table w-full">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th className="whitespace-nowrap">#</th>
                <th className="whitespace-nowrap">Image</th>
                <th className="whitespace-nowrap">Title</th>
                <th className="whitespace-nowrap">Category</th>
                <th className="whitespace-nowrap">Likes</th>
                <th className="whitespace-nowrap">Distributor</th>
                <th className="whitespace-nowrap">Publish</th>
              </tr>
            </thead>
            <tbody>
              {upcomingMeals.map((meal, idx) => (
                <tr key={meal._id}>
                  <td className="whitespace-nowrap">{idx + 1}</td>
                  <td className="whitespace-nowrap">
                    <img
                      src={meal.image}
                      alt="meal"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="whitespace-nowrap">{meal.title}</td>
                  <td className="whitespace-nowrap">{meal.category}</td>
                  <td className="whitespace-nowrap">{meal.likes.length}</td>
                  <td className="whitespace-nowrap">{meal.distributorName}</td>
                  <td className="whitespace-nowrap">
                    <button
                      onClick={() => handlePublish(meal._id)}
                      className="btn btn-sm btn-success"
                    >
                      <FaUpload className="mr-1" /> Publish
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal to Add Upcoming Meal */}
      {showModal && (
        <Modal setShowModal={setShowModal} setUploaded={setUploaded} />
      )}
    </div>
  );
};

export default AddUpcomingMeals;
