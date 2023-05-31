import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDeleteProductOfUserMutation } from '../../Redux/Features/product/productApi';

const CartCard = ({index}) => {
    const{email, quantity, _id, product} = index  ;
    const{_id:productOriginalId, catagory, price, img} = product;

    // --- delete a product
    const[deleteProduct, {data, isLoading, isError, isSuccess}] = useDeleteProductOfUserMutation();

    const handleDelete = () => {
        deleteProduct({email, id:_id});
    }
    return (
        <div className="cart-cards">
        <div className="first-half">
            <div className="first-half-img">
                <img src={img} alt="" />
            </div>
            {/* <div className="first-half-details">
                <h2>Product Title</h2>
                <p>Catagory : Wild</p>
            </div> */}
        </div>
        <div className="second-half">
            <div className="amount-div">
                <div className="amount-icon">
                    <span draggable><FontAwesomeIcon icon={faMinus} /></span>
                    <p>{quantity}</p>
                    <span draggable><FontAwesomeIcon icon={faPlus} /></span>
                </div>
            </div>
            <div className="total-price-div">
                <p>Total : $ 2500</p>
            </div>
        </div>
        <div className="third-half">
            <button onClick={handleDelete}>Remove Item</button>
        </div>
    </div>
    );
};

export default CartCard;