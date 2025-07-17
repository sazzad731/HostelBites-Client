import React from 'react';
import Banner from './Banner/Banner';
import MealsByCategory from './MealsByCategory/MealsByCategory';
import HostelHighlights from './HostelHighlights/HostelHighlights';
import MembershipPackages from './MembershipPackages/MembershipPackages';

const Home = () => {
  return (
    <>
      <Banner />
      <MealsByCategory />
      <HostelHighlights />
      <MembershipPackages/>
    </>
  );
};

export default Home;