import React, { useEffect } from 'react';
import './ShopProuduct.css';
import { useAddProductToCartMutation } from '../../../../Redux/Features/product/productApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Utilities/firebase.init';
import { errorMessage, successMessage } from '../../../../Utilities/popupMsg';

const ShopProuduct = (props) => {    
    const{img, catagory, price} = props.index;
    // console.log(props.index);

    // --- getting user Information from Firebase
    const[user] = useAuthState(auth)

    // --- adding product to users cart and database
    const[addToCart, {data : addedData , isLoading, isError, error}] = useAddProductToCartMutation();
    function addProduct(e){
        addToCart({
            product : props.index,
            email : user.email,
            quantity : 1
        })
    }

    // --- deciding what to show while adding data to database
    if(isLoading && !isError){
        console.log('Loading...')
    }
    if(!isLoading && isError){
        console.log(error.error);
        errorMessage(error.error);
    }
    if(addedData){
        console.log(addedData) ; 
        if(addedData.insertedId){
            successMessage('Product Added', )
        }
    }
    return (
        <div className='product-img-parent'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-first-div">
                <button onClick={()=> addProduct()}>Add to Cart</button>
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