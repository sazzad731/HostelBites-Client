import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: roleAndMeal,
    isLoading: loadingRole,
  } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user.email}`);
      return {
        role: res.data.result.role,
        numberOfMeal: res.data.numberOfMeals,
      };
    },
  });
  return { ...roleAndMeal, loadingRole };
};

export default useUserRole;
