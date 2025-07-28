import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePurchased = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: alreadyPurchased } = useQuery({
    queryKey: ["purchased"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/already_purchased?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });
  return alreadyPurchased;
};

export default usePurchased;