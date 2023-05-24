import React, { useEffect } from 'react';
import './ShopProuduct.css';

const ShopProuduct = (props) => {    
    const{img, catagory, price} = props.index;

    function addButton(e){
        props.addProduct(img)
        // e.target.style.backgroundColor = '#ccc'
        e.target.innerText = 'Added';
        e.target.disabled = 'true';
    }
    return (
        <div className='product-img-parent'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-first-div">
                <button onClick={addButton}>Add to Cart</button>
            </div>
            <div className="product-second-div">
                <button>Add to Wishlist</button>
            </div>
            <div className="price">
                <p>$ {price} </p>
            </div>            
        </div>
    );
};

export default ShopProuduct;