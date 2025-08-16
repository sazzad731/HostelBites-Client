import React, { useEffect, useRef } from 'react';
import Banner from './Banner/Banner';
import MealsByCategory from './MealsByCategory/MealsByCategory';
import HostelHighlights from './HostelHighlights/HostelHighlights';
import MembershipPackages from './MembershipPackages/MembershipPackages';
import { useLocation } from 'react-router';
import CustomersReview from './CustomersReview/CustomersReview';
import TeamSection from './TeamSection/TeamSection';
import Newsletter from './Newsletter/Newsletter';
import FAQ from './FAQ/FAQ';

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
      <CustomersReview />
      <TeamSection />
      <Newsletter />
      <FAQ/>
    </>
  );
};

export default Home;