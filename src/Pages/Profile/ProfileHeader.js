import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileHeader = () => {
    return (
        <div className='profile-header-div'>
            <div className="profile-header-left">
                {/* <NavLink  to="/profile" className={({ isActive }) => (isActive ? 'activeHeader' : 'inactive')}></NavLink> */}
                <NavLink  to="/profile/" className={({ isActive }) => (isActive ? 'activeHeader' : 'inactive')}>Profile</NavLink>
                <NavLink  to="/profile/editProfile" className={({ isActive }) => (isActive ? 'activeHeader' : 'inactive')}>Edit Profile</NavLink>
                <NavLink  to="/profile/cart" className={({ isActive }) => (isActive ? 'activeHeader' : 'inactive')}>Cart</NavLink>
            </div>
            <div className="profile-header-right">
                <p>Shafiqul Hasan Russell</p>

            </div>
        </div>
    );
};

export default ProfileHeader;