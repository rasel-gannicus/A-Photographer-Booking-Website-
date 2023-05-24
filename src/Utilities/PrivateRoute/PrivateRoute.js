import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { ClipLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const location = useLocation();
    let content = null;
    if (loading) {
        return content = <ClipLoader color="black" size={55} />
    }
    if (!user && !loading) {
        return <Navigate to='/login' state={{ from: location }} replace />
    };

    return children
};

export default PrivateRoute;