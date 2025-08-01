import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { useInfiniteQuery } from "@tanstack/react-query";
import useAxiosSecureOrPublic from "../../hooks/useAxiosSecureOrPublic";
import { useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Meals = () => {
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const limit = 6;
  const {axiosPublic} = useAxiosSecureOrPublic();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["meals", searchString, category, priceRange],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axiosPublic.get(
        `/meals?page=${pageParam}&limit=${limit}&search=${searchString}&category=${category}&priceRange=${priceRange}`
      );
      return res.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.flatMap((p) => p.meals).length;
      return totalFetched < lastPage.total ? allPages.length + 1 : undefined;
    },
  });


  const allMeals = data?.pages.flatMap((page) => page.meals) || [];

  return (
    <section className="flex-1 mb-20 min-h-screen">
      <div>
        {/* Filters */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Meals</h1>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <IoMdSearch
                size={40}
                className="text-gray-400 pointer-events-none absolute left-0 top-0 p-2"
              />
              <input
                onChange={(e) => setSearchString(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-800 placeholder-gray-400 shadow-sm focus:outline-primary focus:ring-primary"
                placeholder="Search meals..."
                type="search"
              />
            </div>

            <div className="flex gap-4">
              <select
                onChange={(event) => setCategory(event.target.value)}
                defaultValue=""
                className="select rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
              >
                <option value="">Category</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>

              <select
                onChange={(event) => setPriceRange(event.target.value)}
                defaultValue=""
                className="select rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
              >
                <option value="">Price range</option>
                <option>$10-$30</option>
                <option>$30-$60</option>
                <option>$60-$100</option>
              </select>
            </div>
          </div>
        </div>

        {/* Meals Section */}
        {isLoading ? (
          <LoadingSpinner />
        ) : allMeals.length === 0 ? (
          <h3 className="text-center text-2xl text-gray-500 mt-20">
            No Meals Found
          </h3>
        ) : (
          <InfiniteScroll
            dataLength={allMeals.length}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<LoadingSpinner />}
            endMessage={
              <p className="text-center text-gray-500 my-8">
                No more meals to load.
              </p>
            }
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allMeals.map((meal) => (
                <div
                  key={meal._id}
                  className="rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="h-48 bg-cover bg-center rounded-t-lg"
                    style={{
                      backgroundImage: `url("${meal.image}")`,
                    }}
                  ></div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {meal.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {meal.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        ${meal.price}
                      </span>
                      <Link
                        to={`/meal/${meal._id}`}
                        className="rounded-full bg-primary p-2 text-white hover:bg-opacity-90"
                      >
                        <FiShoppingCart size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </section>
  );
};

export default Meals;
