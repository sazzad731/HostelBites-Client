import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecureOrPublic from './useAxiosSecureOrPublic';

const usePurchased = () => {
  const { user } = useAuth();
  const {axiosSecure} = useAxiosSecureOrPublic();
  const { data: alreadyPurchased } = useQuery({
    queryKey: ["purchased", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/already_purchased?email=${user?.email}`
      );
      return res.data;
    },
  });
  return alreadyPurchased;
};

export default usePurchased;