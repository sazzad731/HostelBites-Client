import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecureOrPublic from "./useAxiosSecureOrPublic";

const useDbUser = () => {
  const { user, loading } = useAuth();
  const {axiosSecure} = useAxiosSecureOrPublic();

  const {data: dbUser,isLoading: loadingRole,} = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
        const res = await axiosSecure.get(`/user?email=${user?.email}`);
        return {
          role: res.data.result.role,
          badge: res.data.result.badge,
          numberOfMeal: res.data.numberOfMeals,
        };
    },
  });
  return { ...dbUser, loadingRole };
};

export default useDbUser;
