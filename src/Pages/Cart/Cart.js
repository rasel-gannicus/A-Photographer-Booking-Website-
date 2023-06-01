import React, { useEffect, useState } from 'react';
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

    // --- sticky side cart menu
    const [isSticky, setIsSticky] = useState(false);
    function handleResize() {
        if (window.innerWidth <= 481) {
            setIsSticky(false);
        }
    }
    function handleScroll() {
        const divToStart = document.querySelector('.third-half');
        // console.log(window.scrollY);
        if (window.innerWidth > 481) {
            if (window.scrollY > 220) {
                // console.log('Triggered');
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        } else {
            setIsSticky(false);
        }
    }
    useEffect(() => {
        handleResize();
        handleScroll();

        return () => {
            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <div className="cart-div-parent">
            <div className='cart-div'>
                {content}
            </div>
            <div className={`sideCart-div ${isSticky ? 'sticky' : ''}`}>
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
                    <input type="text" name="coupon" placeholder='Discount Code' className='text-center' />
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
                <button className='checkout-btn'>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;