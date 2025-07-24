import React from 'react';
import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from "../../hooks/useAxiosSecure"

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data)=>{
    createUser(data.email, data.password)
    .then((result)=>{
      updateUserProfile({ displayName: data.name})
      .then(()=>{
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          role: "student",
          badge: "Bronze"
        };
        axiosSecure.post('/users', userInfo)
          .then((res) => {
            if(res.data.insertedId){
              Swal.fire({
                title: "Account Created Successful",
                icon: "success",
              });
              navigate("/")
            }
          }).catch(err => {
            Swal.fire({
              title: err.response.data.message,
              icon: "error"
            });
          })
      }).catch(err=>{
        Swal.fire({
          title: err.message,
          text: err,
          icon: "error"
        })
      })
    }).catch(err=>{
      Swal.fire({
        title: err.message,
        text: err,
        icon: "error",
      });
    })
  }

  return (
    <div className="flex flex-1 items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-2xl shadow-primary-200/50">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Register to manage your hostel bookings.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <FaUser size={18} />
              </span>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 transition duration-150 ease-in-out focus:outline-primary focus:border-primary focus:ring-primary"
                id="name"
                placeholder="Type you'r name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <MdEmail size={20} />
              </span>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 transition duration-150 ease-in-out focus:outline-primary focus:border-primary focus:ring-primary"
                id="email"
                placeholder="you@example.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-slate-700"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <MdLock size={20} />
              </span>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 transition duration-150 ease-in-out focus:outline-primary focus:border-primary focus:ring-primary"
                id="password"
                placeholder="••••••••"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors cursor-pointer"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-slate-500">
              Or continue with
            </span>
          </div>
        </div>
        <AuthButtons />
        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-primary">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;