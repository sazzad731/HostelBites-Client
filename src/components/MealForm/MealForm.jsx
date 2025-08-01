import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import useAxiosSecureOrPublic from '../../hooks/useAxiosSecureOrPublic';
import Swal from 'sweetalert2';

const MealForm = ({ postUrl, button, setShowModal, setUploaded }) => {
  const { user } = useAuth();
  const {axiosSecure} = useAxiosSecureOrPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_key}`,
        formData
      );

      if (res.data.status === 200 && res.data.success) {
        // Prepare full meal object
        const mealData = {
          ...data,
          price: parseFloat(data.price),
          image: res.data.data.url,
          rating: 0,
          likes: [],
          reviews: [],
          adminName: user?.displayName,
          adminEmail: user?.email,
        };

        try {
          const res = await axiosSecure.post(postUrl, mealData);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Meal Added Successfully",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            if (setUploaded) {
              setUploaded(true);
            }
            reset();
            if(setShowModal){
              setShowModal(false);
            }
          }
        } catch (error) {
          Swal.fire({
            title: error.message,
            text: error,
            icon: "error",
          });
          console.log(error);
        }
      }
    } catch (error) {
      Swal.fire({
        title: error.message,
        text: error,
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Title */}
      <div>
        <label className="block font-medium">Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          className="input input-bordered w-full"
          placeholder="Enter meal title"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      {/* Category */}
      <div>
        <label className="block font-medium">Category</label>
        <input
          {...register("category", { required: "Category is required" })}
          className="input input-bordered w-full"
          placeholder="e.g. Breakfast, Lunch, Dinner"
        />
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Image upload */}
      <div>
        <label className="block font-medium">Image Upload</label>
        <input
          {...register("image", { required: "Image is required" })}
          type="file"
          className="file-input file-input-bordered w-full"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block font-medium">Ingredients</label>
        <textarea
          {...register("ingredients", {
            required: "Ingredients are required",
          })}
          className="textarea textarea-bordered w-full"
          placeholder="List ingredients separated by commas"
        />
        {errors.ingredients && (
          <p className="text-red-500">{errors.ingredients.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium">Description</label>
        <textarea
          {...register("description", {
            required: "Description is required",
          })}
          className="textarea textarea-bordered w-full"
          placeholder="Brief description of the meal"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="block font-medium">Price ($)</label>
        <input
          type="number"
          step="0.01"
          {...register("price", { required: "Price is required" })}
          className="input input-bordered w-full"
          placeholder="Enter price"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      {/* Distributor name */}
      <div>
        <label className="block font-medium">Distributor Name</label>
        <input
          type="text"
          className="input input-bordered w-full"
          {...register("distributorName", {
            required: "Distributor name is required",
          })}
        />
        {errors.distributorName && (
          <p className="text-red-500">{errors.distributorName.message}</p>
        )}
      </div>

      {/* Distributor email */}
      <div>
        <label className="block font-medium">Distributor Email</label>
        <input
          type="text"
          className="input input-bordered w-full"
          {...register("distributorEmail", {
            required: "Distributor Email is required",
          })}
        />
        {errors.distributorEmail && (
          <p className="text-red-500">{errors.distributorEmail.message}</p>
        )}
      </div>

      {/* Addmin name and email */}
      <div>
        <label className="block font-medium">Admin name</label>
        <input
          type="text"
          value={user?.displayName}
          readOnly
          className="input input-bordered w-full cursor-not-allowed"
        />
      </div>

      <div>
        <label className="block font-medium">Admin email</label>
        <input
          type="email"
          value={user?.email}
          readOnly
          className="input input-bordered w-full cursor-not-allowed"
        />
      </div>

      <div className="modal-action">
        {button && (
          <button
            type="button"
            className="btn"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        )}

        {/* Submit */}
        <button
          type="submit"
          className={`btn btn-primary ${!button && "w-full"}`}
        >
          Add Meal
        </button>
      </div>
    </form>
  );
};

export default MealForm;