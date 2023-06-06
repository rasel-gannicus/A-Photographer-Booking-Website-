import React, { useEffect, useState } from 'react';
import { useGetUserAllProductQuery } from '../../Redux/Features/product/productApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Utilities/firebase.init';

const OrderSummaryCard = () => {
    const[delivery, setDelivery] = useState(50);
    const[discount, setDiscount] = useState(0);
    const[coupon, setCoupon] = useState(false);
    const[finalPriceState, setFinalPriceState] = useState(0)
    // console.log(discount);
    const handleCoupon = (value) => {   
        if(value === 'web' && allTotalPrice >= 100){
            setCoupon(true);
            setDiscount(30);
        }else{
            setCoupon(false);
            setDiscount(0);
        }
    }

    // --- getting user Information from Firebase
    const [user] = useAuthState(auth);

    // --- Getting all the cart product for individual user
    const { data, isLoading, isError, error } = useGetUserAllProductQuery(user?.email);
    // console.log(data);

    // ---- calculation for cart
    let totalItems = 0 ;
    let totalPrice = 0 ;
    let allTotalPrice = 0;
    let deliveryCharge = 0 ;
    let finalPrice = 0
    if(data?.length > 0){
        for(let element of data){
            totalItems = totalItems + element.quantity ;
            totalPrice = element.quantity * element.product.price;
            allTotalPrice = allTotalPrice + totalPrice ; 
        }
        deliveryCharge = delivery * data.length;
        finalPrice = (deliveryCharge + allTotalPrice) - discount;
    }
    useEffect(()=>{
        if(allTotalPrice<100){
            setDiscount(0);
            setCoupon(false);
        }
    },[allTotalPrice])




    // --- sticky side cart menu
    const [isSticky, setIsSticky] = useState(false);
    function handleResize() {
        if (window.innerWidth <= 481) {
            setIsSticky(false);
        }
    }
    function handleScroll() {
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
                <select name="" id="" onChange={e => setDelivery(e.target.value)}>
                    <option value={50}>Express Delivery $50</option>
                    <option value={10}>Reglar Delivery $10</option>
                </select>
            </div>
            <div className="shipping-method">
                <p>Coupon Code : (Type 'web') </p>
                <input type="text" name="coupon" placeholder='For Above $100 order' className='text-center' onKeyDown={e => {if(e.key =='Enter'){handleCoupon(e.target.value)}} } />
                {coupon && <p className='coupon-text'>Coupon Applied</p>}
            </div>
            <hr />
            <div className="subtotal">
                <div className="">
                    <p>Shipping : </p>
                    <p>$ {deliveryCharge} </p>
                </div>
                <div className="">
                    <p>Discount : </p>
                    <p>$ {discount} </p>
                </div>
                <hr className='hr' />
                <div className="total-div">
                    <p>Total : </p>
                    <p>$ {finalPrice} </p>
                </div>
            </div>
            <button className='checkout-btn'>Checkout</button>
        </div>
    );
};

export default OrderSummaryCard;