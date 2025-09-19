// frontend/src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { user } = useContext(AuthContext);
    // If user exists, render the child route (Outlet), otherwise redirect to login
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;