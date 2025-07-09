import React from 'react';
import Banner from './Banner/Banner';
import MealsByCategory from './MealsByCategory/MealsByCategory';
import HostelHighlights from './HostelHighlights/HostelHighlights';

const Home = () => {
  return (
    <>
      <Banner />
      <MealsByCategory />
      <HostelHighlights/>
    </>
  );
};

export default Home;