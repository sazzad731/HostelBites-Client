import React, { useContext } from 'react';
import { MdSearch } from "react-icons/md";
import { useNavigate } from 'react-router';
import { SearchContext } from '../../../contexts/SearchContext';

const Banner = () => {
  const navigate = useNavigate();

  const { setSearch } = useContext(SearchContext);

  const handleBannerSearch = (event)=>{
    event.preventDefault();
    const searchValue = event.target.searchField.value;
    setSearch(searchValue)
    navigate("/meals")
  }

  return (
    <div
      className="hero min-h-[40rem] rounded-2xl"
      style={{
        backgroundImage:
          "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCT8LZjGg1MpCaXYIZ7__NRPDQsJ28xF3vaDEznNOJKrK5ROw6qSSujl7DLu3wta-X2oVX911SwERdKruHH5PzQIA9VSGSdUQIKi5HUEEdnsoHQNVgQfjTLPVT4hUT6B3rYSgy2Lu59gStHjszWskNny1PeKlxTf2gyK2SVQfLP9-smP__r5GCXqyQmvIkKrJGiQdW8Zgdzn5qC_AVDfjQeI9gleMK8aiFMxJ5mmgOyMYbjXHLYIesbvBHxOvrzi2arVr0sI4bIzevB)",
      }}
    >
      <div className="hero-overlay rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl flex flex-col items-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight">
            Fuel Your Day with Delicious Hostel Meals
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg">
            Explore a variety of tasty and affordable meal options designed to
            keep you energized and satisfied throughout your stay.
          </p>
          <form onSubmit={handleBannerSearch} className="w-full max-w-lg mt-6">
            <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
              <input
                type='text'
                className="form-input flex-grow w-full border-0 bg-transparent py-3 px-6 text-slate-700 placeholder:text-slate-400 focus:outline-0"
                placeholder="Search for meals"
                name="searchField"
              />
              <button
                type="submit"
                className="bg-primary-500 text-black cursor-pointer font-bold py-3 px-6 m-1 rounded-full hover:bg-primary-600 transition-all"
              >
                <MdSearch size={30} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;