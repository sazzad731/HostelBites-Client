import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth()
  const location = useLocation();

  if(loading){
    return <LoadingSpinner/>
  }

  if(!user){
    return <Navigate to="/login" state={location.pathname}/>
  }

  return children
};

export default PrivateRoute;