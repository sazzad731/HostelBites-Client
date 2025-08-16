import React, { useEffect, useRef } from 'react';
import Banner from './Banner/Banner';
import MealsByCategory from './MealsByCategory/MealsByCategory';
import HostelHighlights from './HostelHighlights/HostelHighlights';
import MembershipPackages from './MembershipPackages/MembershipPackages';
import { useLocation } from 'react-router';
import CustomersReview from './CustomersReview/CustomersReview';

const Home = () => {
  const membershipRef = useRef();
  const location = useLocation();

  useEffect(()=>{
    if (location.state?.scrollTo) {
      membershipRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location])
  return (
    <>
      <Banner />
      <MealsByCategory />
      <HostelHighlights />
      <MembershipPackages membershipRef={membershipRef} />
      <CustomersReview/>
    </>
  );
};

export default Home;