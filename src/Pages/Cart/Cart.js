import React, { useEffect, useState } from 'react';
import './Cart.css'
import CartCard from './CartCard';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Utilities/firebase.init';
import { ClipLoader } from 'react-spinners';
import { useGetUserAllProductQuery } from '../../Redux/Features/product/productApi';
import OrderSummaryCard from './OrderSummaryCard';

const Cart = () => {

    // --- getting user Information from Firebase
    const [user] = useAuthState(auth);

    // --- Getting all the cart product for individual user
    const { data, isLoading, isError, error } = useGetUserAllProductQuery(user?.email);
    // console.log(data);

    // --- deciding what to show in UI while fetching data from server
    let content = null;

    // --- when fetching-data process is in loading state
    if (isLoading && !isError) {
        content = <div className="loader-in-middle2"><ClipLoader color="black" size={70} /></div>
    }

    // --- when there is a error happened while fetching-data 
    if (!isLoading && isError) {
        console.log(error);
        content = <div className="error-text">
            {error.error}
        </div>;
    }

    // --- when we finally get the data
    if (!isLoading && !isError && data.length > 0) {
        content = data.map(index => <CartCard
            index={index}
            key={index._id}
        ></CartCard>)

    }

    return (
        <div className="flex flex-col  lg:flex-row gap-4 justify-center items-center">
            <div className='cart-div flex gap-4 flex-col'>
                {content}
            </div>
        
        <OrderSummaryCard></OrderSummaryCard>
        </div>
    );
};

export default Cart;