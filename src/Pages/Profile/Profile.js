import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Utilities/firebase.init';
import { signOut } from 'firebase/auth';
import ProfileHeader from './ProfileHeader';
import { Outlet } from 'react-router-dom';
import './Profile.css' ; 

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="profile-div">
                            <ProfileHeader user={user}></ProfileHeader>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;