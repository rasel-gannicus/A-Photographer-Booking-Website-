import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import './ProfileDetails.css' ; 
import {ClipLoader} from 'react-spinners'
import { toast } from 'react-toastify';

const ProfileDetails = () => {
    const [user, loading, error] = useAuthState(auth);
    const{displayName : currentUserName, email:userEmail, photoURL, } = user;
    const [updateProfile, updating,] = useUpdateProfile(auth);
    
    // --- to fill up the input field with user info
    const [username, setUsername] = useState(currentUserName);
    const[email, setEmail] = useState(userEmail);
    const[photo, setPhoto] = useState(photoURL);

    // --- changing the 'Update' button's style
    const[isChanged, setIsChanged] = useState(false);
    let btnLoader = <ClipLoader color="black" size={20} />
    useEffect(()=>{
        if(username !== currentUserName || photo !== photoURL){
            setIsChanged(true);
        }
    },[username, photo, photoURL, currentUserName]);

    // --- update user functionality
    const handleUpdateUser = async() => {
        const isConfirm = window.confirm('Update Profile ?');
        if(isConfirm){
            const result = await updateProfile({displayName : username, photoURL:photo});
            if(result){
                toast.success('User updated successfully !', {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            
                setIsChanged(false);
            }
        }
    }

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
                    <td><input type="email" name='email' value={email} readOnly /></td>
                </tr>
                <tr>
                    <td>Photo Url : </td>
                    <td><input type="email" name='photo' value={photo} onChange={e => setPhoto(e.target.value)} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button onClick={handleUpdateUser} disabled={!isChanged || updating} className={isChanged ? 'profile-btn-active' : 'profile-btn-deactive'}> { updating && btnLoader} Update</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ProfileDetails;