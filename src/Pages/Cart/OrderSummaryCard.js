import React, { useEffect, useState } from 'react';
import { useGetUserAllProductQuery } from '../../Redux/Features/product/productApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Utilities/firebase.init';

const OrderSummaryCard = () => {

    // --- getting user Information from Firebase
    const [user] = useAuthState(auth);

    // --- Getting all the cart product for individual user
    const { data, isLoading, isError, error } = useGetUserAllProductQuery(user?.email);
    // console.log(data);

    // ---- calculation for cart
    let totalItems = 0 ;
    let totalPrice = 0 ;
    let allTotalPrice = 0;
    if(data?.length > 0){
        for(let element of data){
            totalItems = totalItems + element.quantity ;
            totalPrice = element.quantity * element.product.price;
            allTotalPrice = allTotalPrice + totalPrice ; 
        }
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
        <div className={`sideCart-div ${isSticky ? 'sticky' : ''}`}>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="">
                    <span>{totalItems} items</span>
                    <p>$ {allTotalPrice}</p>
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
    );
};

export default OrderSummaryCard;