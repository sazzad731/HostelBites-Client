import React from 'react';
import { Link } from 'react-router';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const MealsByCategory = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mb-8 border-b border-black/20">
        <div className="flex justify-center -mb-px space-x-6 sm:space-x-8">
          <button
            className="cursor-pointer py-3 px-1 border-b-2 border-primary-500 text-primary-500 text-sm font-bold"
            href="#"
          >
            All Meals
          </button>
          <button
            className="cursor-pointer py-3 px-1 border-b-2 border-transparent text-slate-500 hover:text-primary-500 hover:border-primary-500 transition-colors text-sm font-medium"
            href="#"
          >
            Breakfast
          </button>
          <button
            className="cursor-pointer py-3 px-1 border-b-2 border-transparent text-slate-500 hover:text-primary-500 hover:border-primary-500 transition-colors text-sm font-medium"
            href="#"
          >
            Lunch
          </button>
          <button
            className="cursor-pointer py-3 px-1 border-b-2 border-transparent text-slate-500 hover:text-primary-500 hover:border-primary-500 transition-colors text-sm font-medium"
            href="#"
          >
            Dinner
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMkhPEf-Shyco14nnndO74zCLj0w3dgmLY_xZih6_-6HcrX4ophB-Iz1CS04X_L3_mG3bJjYH2FlG9DE3__dUva6gVsgW4eeee3NZykLXI6v3Ex3rbzWdSpb6Fs22HshCcTvBqJwQ7njQZfvgLMFEdasThZY4LmYVScz8J4cfPrA4AAIq6_Z3Wa-K7w8IjfbesxW0CdbrLE2QppDoaMcr36lcjS4wexL94e5cV2JfXrKxRJOtisZeiLIluz1WVsqhBPEVd1aLQvMpx")',
            }}
          ></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Morning Fuel
            </h3>
            <div className="flex items-center mb-2 text-sm text-primary">
              <div className='flex gap-1'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <span className="ml-2">4.5 (120)</span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Start your day with scrambled eggs, crispy bacon, and toasted
              bread.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-primary-500">$8.50</p>
              <Link
                className="text-sm font-semibold text-primary hover:bg-primary/15 px-5 py-2 transition-colors cursor-pointer rounded-full"
                href="#"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTgmwO4Pnd2QTNqsJnJE8Lja8dN3YcNyjHtWiMUl9_KSvaZYGSJ6nD5Zsom8nA2Ljv2DHwwU2lljuvNxu9IKiP7KBEIFSt3PIBdWKK947sVNF9cpnqij6L7G_EQCEQu9XUjql_UMA49YWzr5Xe1xu9mMTj45SbM8VjA5YBGhjBT2JnPs7bc2TklESUHkk9D_BJTm0kEO2g3TleXqvCDwM-VtCyzDjJ9pClhb_ucQ8y3HwLt7cANoSzP4T7WUtV_ZEUgrAwPQPBp-L5")',
            }}
          ></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Midday Recharge
            </h3>
            <div className="ratings flex items-center mb-2 text-sm text-slate-500">
              <span>★★★★★</span>
              <span className="ml-2">5.0 (98)</span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              A refreshing grilled chicken salad with quinoa and a light
              vinaigrette.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-primary-500">$12.00</p>
              <button
                className="text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
                href="#"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVIpwoJWFXcQssGLlFgYdW_E191AjNo2R2810lF0yHOiYnWIi0ibV89Z6vJ9PGDqcgbm2Wv3gSqsQE7IuqCU5qGlvKdqwcx56nnvYVgL4ErVMMjDCRTSGHFY30lAEtPOZ2p3b1D88TT2CPkkoQb46MYZYRz1B54tiWdl_xaWznYv2H3MZzURtT6tqh52h6jAwItpkx1pvkuha8CH37K9NJtjegakKQyWGPc-qaOtkn7MKqyOP_YcoU_94D10re6ugOjcXLI7uhwB-x")',
            }}
          ></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Evening Delight
            </h3>
            <div className="ratings flex items-center mb-2 text-sm text-slate-500">
              <span>★★★★☆</span>
              <span className="ml-2">4.8 (210)</span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Classic pasta with marinara sauce, savory meatballs, and garlic
              bread.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-primary-500">$15.00</p>
              <button
                className="text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
                href="#"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealsByCategory;