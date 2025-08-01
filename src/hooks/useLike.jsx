import React, { useState } from 'react';
import useAuth from './useAuth';
import useAxiosSecureOrPublic from './useAxiosSecureOrPublic';
import { useLocation, useNavigate } from 'react-router';
import useDbUser from './useDbUser';

const useLike = () => {
  const [ like, setLike ] = useState(false);
  const [ likeCount, setLikeCount ] = useState(0);
  const { user } = useAuth();
  const { badge } = useDbUser();
  const {axiosSecure} = useAxiosSecureOrPublic();
  const navigate = useNavigate()
  const location = useLocation();


  const handleLike = async (mealId) =>{
    
    if (!user) {
      return navigate("/login");
    }
    if (location.pathname === "/upcoming-meals" && badge !== "Silver" && badge !== "Gold" && badge !== "Platinum") {
      return navigate("/", { state: { scrollTo: "membership" } });
    }
    const res = await axiosSecure.post("/like", {
      mealId,
      email: user?.email,
      badge: badge || "Bronze",
    });
    if (res.data.modifiedCount === 1) {
      setLike(true);
      setLikeCount(1);
    }
  };

  return {handleLike, like, setLike, likeCount}
};

export default useLike;