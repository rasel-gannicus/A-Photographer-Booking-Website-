import React from 'react';
import './Cart.css'
import CartCard from './CartCard';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Utilities/firebase.init';
import { ClipLoader } from 'react-spinners';
import { useGetUserAllProductQuery } from '../../Redux/Features/product/productApi';

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
        <div className='cart-div'>
            {content}
            <div className="sideCart-div">
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="">
                        <span>9 items</span>
                        <p>$ 500.98</p>
                    </div>
                    <hr />
                </div>
                <div className="shipping-method">
                    <p>Shipping Mehod : </p>
                    <select name="" id="">
                        <option value="">Express Delivery $50</option>
                        <option value="">Reglar Delivery $10</option>
                    </select>
                </div>
                <div className="shipping-method">
                    <p>Coupon Code: </p>
                    <input type="text" name="coupon" placeholder='Got any Discount Code ?' />
                </div>
                <hr />
                <div className="subtotal">
                    <div className="">
                        <p>Shipping : </p>
                        <p>$ 45 </p>
                    </div>
                    <div className="">
                        <p>Discount : </p>
                        <p>$ 10 </p>
                    </div>
                    <hr className='hr' />
                    <div className="total-div">
                        <p>Total : </p>
                        <p>$ 10 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;