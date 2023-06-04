import React, { useEffect, useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faDeleteLeft , faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDeleteProductOfUserMutation, useUpdateCartMutation } from '../../Redux/Features/product/productApi';
import './CartCard.css';

const CartCard = ({ index }) => {
    const { email, _id, product , quantity:qty } = index;
    const { _id: productOriginalId, catagory, price, img} = product;
    // console.log(index);

    // --- delete a product
    const [deleteProduct, { data, isLoading, isError, isSuccess }] = useDeleteProductOfUserMutation();

    const handleDelete = () => {
        deleteProduct({ email, id: _id });
    }

    /* --------------------------------------------
        Calculation Part
    ---------------------------------------------*/
    const[updateCart] = useUpdateCartMutation();
    const[quantity, setQuantity] = useState(qty);
    const[totalPrice, setTotalPrice] = useState( index.subTotal || price);


    const calculateTotalPrice = (quantity) => {
        const subTotal = quantity * price ; 
        const total = subTotal ; 
        setTotalPrice(subTotal);
        // console.log('Total : ', total);
    }

    const handleIncrease = () => {
        // console.log('Before: ',quantity);
        setQuantity(quantity + 1);
        calculateTotalPrice(quantity + 1);
        updateCart({
            quantity : quantity + 1,
            pricePerUnit : price,
            email : email,
            id : _id
        })
    }



    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
            calculateTotalPrice(quantity - 1);
        }
    }
    
    return (
        <div className="cart-cards">
            <div className="first-half">
                <div className="first-half-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="second-half">
                <div className="amount-div">
                    <div className="amount-icon">
                        <span onClick={handleDecrease} draggable><FontAwesomeIcon icon={faMinus} /></span>
                        <p>{quantity}</p>
                        <span onClick={handleIncrease} draggable><FontAwesomeIcon icon={faPlus} /></span>
                    </div>
                </div>
                <div className="total-price-div">
                    <p>Total : $ {totalPrice}</p>
                </div>
            </div>
            <div className="third-half" draggable  onClick={handleDelete}>
                {/* <button onClick={handleDelete}>Remove Item</button> */}
                <FontAwesomeIcon icon={faTrash} />
                <p>Delete</p>
            </div>
        </div>
    );
};

export default CartCard;