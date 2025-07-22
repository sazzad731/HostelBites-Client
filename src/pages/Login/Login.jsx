import React from 'react';
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from 'react-router';
import AuthButtons from '../../components/AuthButtons/AuthButtons';

const Login = () => {
  return (
    <div className="flex flex-1 items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-2xl shadow-primary-200/50">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Login to manage your hostel bookings.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" for="email">
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
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-slate-700"
                for="password"
              >
                Password
              </label>
              <a
                className="text-sm font-medium text-primary-500 hover:text-primary-600"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <MdLock size={20} />
              </span>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 transition duration-150 ease-in-out focus:outline-primary focus:border-primary focus:ring-primary"
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </div>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors cursor-pointer"
              type="submit"
            >
              Login
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
        <AuthButtons/>
        <p className="text-center text-sm text-slate-600">
          Don't have an account?
          <Link
            to="/register"
            className="font-medium text-primary"
          > {" "}
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;