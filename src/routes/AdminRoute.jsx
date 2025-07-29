import React from 'react';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import { Navigate } from 'react-router';


const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const { role, loadingRole } = useUserRole();


  if(loading || loadingRole){
    return <LoadingSpinner />
  }

  if (!user || role !== "admin") {
    return (
      <Navigate state={{ from: location.pathname }} to="/"></Navigate>
    );
  }

  return children;
};

export default AdminRoute;