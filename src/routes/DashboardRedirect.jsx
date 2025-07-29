import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const DashboardRedirect = () => {
  const navigate = useNavigate();
  const { loading } = useAuth(); // you likely already have this
  const { role, loadingRole } = useUserRole(); // assume this returns role

  useEffect(() => {
    if (!loading && !loadingRole) {
      if (role === "admin") {
        navigate("/dashboard/admin-profile", { replace: true });
      } else {
        navigate("/dashboard/my-profile", { replace: true });
      }
    }
  }, [loading, loadingRole, role, navigate]);

  return <LoadingSpinner/>;
};

export default DashboardRedirect;
