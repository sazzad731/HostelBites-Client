import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { FiCheck } from 'react-icons/fi';
import { MdStarRate } from "react-icons/md";
import useAuth from "../../hooks/useAuth"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(`${import.meta.env.VITE_stripe_pk}`);

const Checkout = () => {
  const { user } = useAuth();
  const [ total, setTotal ] = useState(0)
  const { packageId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: packageDetail } = useQuery({
    queryKey: ["packageDetail"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/package/${packageId}`);
      setTotal((res.data.price * 0.05 + res.data.price).toFixed(2));
      return res.data;
    },
  });
  
  return (
    <div className="grid lg:grid-cols-2 gap-12 min-h-screen">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6">Selected Plan</h2>
        <div
          key={packageDetail?.name}
          className={`card rounded-2xl shadow-md border hover:shadow-lg transition-all py-10 ${
            packageDetail?.name === "Silver" && "bg-slate-200 border-slate-300"
          } ${
            packageDetail?.name === "Gold" &&
            "bg-yellow-500/10 border-yellow-300"
          } ${
            packageDetail?.name === "Platinum" &&
            "bg-slate-300 border-slate-300"
          }`}
        >
          <div className="card-body">
            <h3
              className={`text-3xl ${
                packageDetail?.name === "Silver" && "text-slate-400"
              } ${packageDetail?.name === "Gold" && "text-yellow-500"} ${
                packageDetail?.name === "Platinum" && "text-slate-600"
              } font-poppins font-semibold mb-2`}
            >
              {packageDetail?.name}
            </h3>
            <p className="text-2xl font-bold mb-4">
              ${packageDetail?.price}
              <span className="text-sm font-semibold text-slate-500">
                /month
              </span>
            </p>

            <ul className="text-left mb-6 font-inter space-y-2">
              {packageDetail?.services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FiCheck className="text-primary mt-1" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                  <MdStarRate
                    size={40}
                    className={`${
                      packageDetail?.name === "Silver" && "text-slate-400"
                    } ${packageDetail?.name === "Gold" && "text-yellow-500"} ${
                      packageDetail?.name === "Platinum" && "text-slate-600"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">
                    {packageDetail?.name} Subscription
                  </h3>
                  <p className="text-sm text-[#6B7280]">Billed monthly</p>
                </div>
              </div>
              <p className="font-semibold text-primary">
                ${packageDetail?.price}
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t space-y-3">
            <div className="flex justify-between text-sm text-[#6B7280]">
              <span>Subtotal</span>
              <span className="font-medium text-primary">
                ${packageDetail?.price}
              </span>
            </div>
            <div className="flex justify-between text-sm text-[#6B7280]">
              <span>VAT (5%)</span>
              <span className="font-medium text-primary">
                ${(packageDetail?.price * 0.05).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-primary pt-3 border-t mt-3">
              <span>Total due today</span>
              <span>${total}</span>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note:</span> Your subscription
              will automatically renew on the 15th of each month. You can cancel
              anytime from your account settings.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:sticky top-16 self-start">
        {/* Contact Information */}
        <div className="p-6 rounded-xl shadow-sm mb-10">
          <h2 className="text-2xl font-semibold mb-6">Contact information</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-[#6B7280] mb-1.5"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-primary focus:ring-primary focus:ring-opacity-50 cursor-not-allowed"
                id="name"
                placeholder={user?.displayName}
                type="text"
                disabled
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-[#6B7280] mb-1.5"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-primary focus:ring-primary focus:ring-opacity-50 cursor-not-allowed"
                id="email"
                placeholder={user?.email}
                type="email"
                disabled
              />
            </div>
          </form>
        </div>

        {/* Card Information */}
        <div className="p-6 rounded-xl shadow-sm">
          <Elements stripe={stripePromise}>
            <CheckoutForm packageDetail={packageDetail} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Checkout;