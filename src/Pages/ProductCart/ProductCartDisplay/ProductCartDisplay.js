import { faMinus, faPlus, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProductCartDisplay.css';

const ProductCartDisplay = (props) => {
    const { price, img, quantity } = props.index;
    let costPerUnit = quantity * price;


    return (
        <div>
            <div className="product-card">
                <img src={img} alt="" />
                <p className='mt-3'>Price Per Unit : <span className='bold-text'>$ {props.index.price}</span> </p>
                <p>Quantity : {quantity} </p>
                <p>Cost : {costPerUnit} </p>
                <div className="increment-div my-3 mx-auto">
                    <span onClick={() => props.decreaseProduct(img)} draggable className='increment-icon'><FontAwesomeIcon icon={faMinus} /></span>
                    <div> <span className='blue-text'>{quantity}</span>  Unit </div>
                    <span onClick={() => props.addProduct(img)} draggable className='increment-icon'><FontAwesomeIcon icon={faPlus} /></span>
                </div>
                <div className="delete-icon-parent">
                    <div onClick={()=>props.deleteProduct(img)} draggable className='delete-icon'><FontAwesomeIcon icon={faTrashCan} />
                    </div>
                        <div className="second-delete">
                            <p>Delete</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCartDisplay;