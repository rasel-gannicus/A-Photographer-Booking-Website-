import { faArrowRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductCart.css';
import ProductCartDisplay from './ProductCartDisplay/ProductCartDisplay';

const ProductCart = (props) => {

    let price = 0;
    let quantity = 0;
    let shipping = 0;
    let totalCost = 0;
    props.basket.map(index => {
        price = price + (index.price * index.quantity);
        quantity = quantity + index.quantity;
    })
    if (quantity <= 5) {
        shipping = 50 * quantity;
    } else {
        shipping = 50 * 5;
    }
    totalCost = shipping + price;

    // navigating to check out page function
    const navigate = useNavigate();
    function navigation(){
        navigate('/checkout');
    }
    return (
        <div className="">
            <div className='product-card-parent-div mx-auto my-4'>
                {
                    props.basket.map(index => <ProductCartDisplay
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                        decreaseProduct={props.decreaseProduct}
                        deleteProduct={props.deleteProduct}
                    ></ProductCartDisplay>)
                }

                {/* showing "Back to Home" when cart is empty */}
                {props.basket.length == 0 && <div className="back-to-homepage">
                    <h2>No item in Cart</h2>
                    <Link to='/'>Back To Home Page <FontAwesomeIcon className='text-danger ms-2' icon={faHome} /> </Link>
                </div>}
            </div>

            {props.basket.length != 0 && <div className="cart-calculation my-5">
                <table className='mx-auto'>
                    <tr>
                        <td>Total Quantity :</td>
                        <td>{quantity}</td>
                    </tr>
                    <tr>
                        <td>Total Price : </td>
                        <td>{price}</td>
                    </tr>
                    <tr className='last-tr'>
                        <td>Shipping Charge : <br /> <small className='text-primary'>(For Order more than 5 unit the Shipping charge will be Free)</small> </td>
                        <td>{shipping}</td>
                    </tr>
                    <tr className='fw-bold fs-5'>
                        <td>Total Cost : </td>
                        <td> {totalCost} </td>
                    </tr>
                </table>
                <button onClick={navigation} className='my-5'>Proceed To Check Out <FontAwesomeIcon className='ms-3' icon={faArrowRight} /> </button>
            </div>}
        </div>

    );
};

export default ProductCart;