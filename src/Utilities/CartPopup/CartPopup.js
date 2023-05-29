
import React from 'react';
import './CartPopup.css';
import { useGetServiceCartQuery } from '../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const CartPopup = () => {
    // --- taking user to corresponding cart details page
    const navigate = useNavigate();
    const navigation = (path) => {
        navigate(path);
    }
    // --- getting user info from firebase
    const [user] = useAuthState(auth);

    // --- getting user cart info for service booking
    const { data } = useGetServiceCartQuery(user?.email);
    // console.log(data);
    return (
        <div className='mini-popup'>
            <div onClick={()=>navigation('/profile/bookings')} draggable className="booking-cart">
                {data?.length>0 && <div className="booking-cart-child">
                    <img src="https://i.ibb.co/BGLHLcM/clock.png" alt="" />
                    <span><p>{data?.length}</p></span>
                </div>}
            </div>
        </div>
    );
};

export default CartPopup;