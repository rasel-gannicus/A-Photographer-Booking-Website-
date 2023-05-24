import React from 'react';
import './BookingCartDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus,faTrash } from '@fortawesome/free-solid-svg-icons';



const BookingCartDisplay = (props) => {
    const { packageCatagoryName, cameraMan, duration, thumbImg , quantity, id } = props.index;
    
    return (
        <div>
            <div className="cart-card">
                <div className="cart-card-left">
                    <div className="cart-left-img">
                        <img src={thumbImg} alt="" />
                    </div>
                    <div className="cart-left-desc">
                        <p>{packageCatagoryName} </p>
                        <p> <span className='blue-text'>{cameraMan}</span>  Camera-man </p>
                        <p> <span className='blue-text'>{duration}</span> Hours </p>
                    </div>
                </div>
                <div draggable className="cart-card-right">
                    <p>Book For</p>
                    <div className="increment-div">
                        <span draggable onClick={()=>props.decreaseBooking(id)} className='increment-icon'><FontAwesomeIcon icon={faMinus} /></span>
                        <div> <span className='blue-text'>{quantity}</span>  Days </div>
                        <span draggable onClick={()=>props.handleAddToBooking(id , quantity)} className='increment-icon'><FontAwesomeIcon icon={faPlus} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCartDisplay;