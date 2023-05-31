
import React from 'react';
import './CartPopup.css';
import { useGetServiceCartQuery } from '../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useGetAllProductCartQuery } from '../../Redux/Features/product/productApi';

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
    
    // --- getting user's product cart info
    const{data:products} = useGetAllProductCartQuery();
    // console.log(products);
    return (
        <div className='mini-popup'>
            <div onClick={()=>navigation('/profile/bookings')} draggable className="booking-cart">
                {data?.length>0 && <div className="booking-cart-child">
                    <img src="https://i.ibb.co/BGLHLcM/clock.png" alt="" />
                    <span><p>{data?.length}</p></span>
                </div>}
            </div>
            <div onClick={()=>navigation('/profile/cart')} draggable className="products-cart">
                {products?.length>0 && <div className="booking-cart-child">
                    <img src="https://i.ibb.co/9b9NP7G/shopping-cart-2.png" alt="" />
                    <span><p>{products?.length}</p></span>
                </div>}
            </div>
        </div>
    );
};

export default CartPopup;