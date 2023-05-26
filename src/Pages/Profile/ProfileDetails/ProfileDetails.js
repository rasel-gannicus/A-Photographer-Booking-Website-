import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import './ProfileDetails.css' ; 

const ProfileDetails = () => {
    const [user, loading, error] = useAuthState(auth);
    const{displayName, email:userEmail, photoURL, } = user;
    
    const [username, setUsername] = useState(displayName);
    const[email, setEmail] = useState(userEmail);
    const[photo, setPhoto] = useState(photoURL);
    return (
        <div className='profile-details'>
            <img src={photo} alt="" />
            <table>
                <tr>
                    <td>Name : </td>
                    <td><input type="name" name='name' value={username} onChange={e => setUsername(e.target.value)} /> </td>
                </tr>
                <tr>
                    <td>Email : </td>
                    <td><input type="email" name='email' value={email}  /></td>
                </tr>
                <tr>
                    <td>Photo Url : </td>
                    <td><input type="email" name='photo' value={photo} onChange={e => setPhoto(e.target.value)} /></td>
                </tr>
            </table>
        </div>
    );
};

export default ProfileDetails;