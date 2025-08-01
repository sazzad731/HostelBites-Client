import React from 'react';
import useAuth from '../hooks/useAuth';
import useDbUser from '../hooks/useDbUser';
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import { Navigate } from 'react-router';


const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const { role, loadingRole } = useDbUser();


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