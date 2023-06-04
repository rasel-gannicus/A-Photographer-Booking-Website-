import React, { useEffect, useState } from 'react';

const OrderSummaryCard = () => {


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
    );
};

export default OrderSummaryCard;