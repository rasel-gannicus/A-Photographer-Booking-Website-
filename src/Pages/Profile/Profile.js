import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Utilities/firebase.init';
import { signOut } from 'firebase/auth';

const Profile = () => {
    const[user, loading, error] = useAuthState(auth);
    console.log(user);
    const handleLogout = () =>{
        signOut(auth).then(()=>{console.log('Sign Out Successfully')}).catch(err=>{console.log(error)});
    }
    return (
        <div>
            <h2>Profile here</h2> 
            <button onClick={handleLogout}>Logout Here</button>
        </div>
    );
};

export default Profile;