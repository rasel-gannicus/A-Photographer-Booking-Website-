import { signOut } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../../Utilities/firebase.init';

const ProfileHeader = ({ user }) => {
    const { displayName, photoURL } = user;

    // --- logging out user
    const handleLogout = (e) => {
        e.preventDefault();
        let confirmation = window.confirm('Are You sure you want to log out ?');
        if(confirmation){
            signOut(auth).then(() => { console.log('Sign Out Successfully') }).catch(err => { console.log(err) });
        }
    }
    return (
        <div className='profile-header-div'>
            <div className="profile-header-left">
                {/* <NavLink  to="/profile" className={({ isActive }) => (isActive ? 'activeHeader' : 'inactive')}></NavLink> */}
                <NavLink to="/profile/" className={({ isActive }) => (isActive ? 'activeHeader' : 'inactive')}>Profile</NavLink>
                <NavLink to="/profile/editProfile" className={({ isActive }) => (isActive ? 'activeHeader' : 'inactive')}>Edit Profile</NavLink>
                <NavLink to="/profile/cart" className={({ isActive }) => (isActive ? 'activeHeader' : 'inactive')}>Cart</NavLink>
                <a href="" onClick={handleLogout}> Logout</a>
            </div>
            <div className="profile-header-right">
                <p>{displayName}</p>
                <img src={photoURL} alt="" />
            </div>
        </div>
    );
};

export default ProfileHeader;