import React, { useState } from 'react';
import useAuth from './useAuth';
import usePurchased from './usePurchased';
import useAxiosSecure from './useAxiosSecure';
import { useLocation, useNavigate } from 'react-router';

const useLike = () => {
  const [ like, setLike ] = useState(false);
  const [ likeCount, setLikeCount ] = useState(0);
  const { user } = useAuth();
  const subscribed = usePurchased();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const location = useLocation();


  const handleLike = async (mealId) =>{
    
    if (!user) {
      return navigate("/login");
    }
    if (location.pathname === "/upcoming-meals" && subscribed.packageName !== "Silver" && subscribed.packageName !== "Gold" && subscribed.packageName !== "Platinum") {
      return navigate("/", { state: { scrollTo: "membership" } });
    }
    const res = await axiosSecure.post("/like", {
      mealId,
      email: user?.email,
      badge: subscribed.packageName || "Bronze",
    });
    if (res.data.modifiedCount === 1) {
      setLike(true);
      setLikeCount(1);
    }
  };

  return {handleLike, like, setLike, likeCount}
};

export default useLike;