import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router';
import { FiShoppingCart } from "react-icons/fi";

const Meals = () => {
  return (
    <section className="flex-1 mb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Meals</h1>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row">
            {/* search field */}
            <div className="relative flex-1">
              <IoMdSearch
                size={40}
                className="text-gray-400 pointer-events-none absolute left-0 top-0 p-2"
              />
              <input
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-800 placeholder-gray-400 shadow-sm focus:outline-primary focus:ring-primary"
                placeholder="Search meals..."
                type="search"
              />
            </div>

            <div className="flex gap-4">
              <select
                defaultValue="Category"
                className="select rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
              >
                <option disabled={true}>Category</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>

              <select
                defaultValue="Price range"
                className="select rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
              >
                <option disabled={true}>Price range</option>
                <option>$10-$30</option>
                <option>$30-$60</option>
                <option>$60-100</option>
              </select>
            </div>
          </div>
        </div>

        {/* card section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNRQyhTRS7KeAeZMCPTlbuRnzESA4uOnxVhKn2vSISVEU2HQCSfskdhws1Q9QlL4DQJbvqty2EKguXbdrugJRLYEkZf2KfdBLlbNYBWthfnsUHAhZSgLxXBQ0A7rdLISgjN7B37e2CRUumOIM2XVgOuFdoLEopeT6UuPLgxJGilljaf1ATXghNUL8YCbKMT779-KL_BhlNOXOTRYeLmyqnLeHmMceeKmIrzd34l988xJR_ZqbHmgLFNoghY821vmVduFNRj--Y7-_4")`,
              }}
            ></div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                Breakfast Special
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Start your day with our hearty breakfast special, featuring a
                variety of options to fuel your adventures.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">$12.99</span>
                <Link
                  to="/meal/id"
                  className="rounded-full bg-primary p-2 text-white hover:bg-opacity-90"
                >
                  <FiShoppingCart size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meals;