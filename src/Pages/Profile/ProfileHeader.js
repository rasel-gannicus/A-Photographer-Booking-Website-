import React from 'react';

const ProfileHeader = () => {
    return (
        <div className='profile-header-div'>
            <div className="profile-header-left">
                <a href="">Profile</a>
                <a href="">Edit Profile</a>
                <a href="">Cart</a>
            </div>
            <div className="profile-header-right">
                <p>Shafiqul Hasan Russell</p>

            </div>
        </div>
    );
};

export default ProfileHeader;