import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const PublicRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

    const location = useLocation();
    const navigate = useNavigate();

    let content = null;
    if (loading) {
        return  <div className="loader-in-middle"><ClipLoader color="black" size={120} /></div>
    }
    if (user && !loading) {
        return  navigate('/');
    };

    return children;
};

export default PublicRoute;