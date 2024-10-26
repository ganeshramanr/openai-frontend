
// import { useContext } from "react";
import {useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const location = useLocation();
  const user = window.localStorage.getItem('user')

  return (
    user ? 
    <Outlet /> 
    : 
    <Navigate to="/login" state={{from: location}} replace />
  )
}

export default ProtectedRoutes
