import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useProduct from '../../../Utilities/hooks/useProduct';
import './MyShop.css';
import ShopProuduct from './ShopProuduct/ShopProuduct';

const MyShop = (props) => {
    const[product, setProduct] = useProduct();
    const[secondProduct, setSecondProduct] = useState([]);
    let secondProductArray = [];
    
    useEffect(()=>{        
        secondProductArray = product.slice(0,3);
        setSecondProduct(secondProductArray);
    },[product])

    let[secondCounter, setSecondCounter] = useState(6);
    function loadMoreProduct(){
        document.querySelector('.loading-text').style.display='block';
        setTimeout(() => {
            setSecondCounter(secondCounter+3);
            secondProductArray = product.slice(0,secondCounter);
            setSecondProduct(secondProductArray);
            document.querySelector('.loading-text').style.display='none';    
        }, 700);
        
    }
    return (
        <div className='my-5'>
            <h2 className='my-5'>Some Of My Product <br />You Can Buy To Decorate Your Wall</h2>
            <div className="product-show-div ">                
                {
                    secondProduct.map(index=><ShopProuduct
                        index = {index}
                        key = {index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>
            <p className='loading-text mt-5'><Spinner animation="border" variant="primary" /></p>
            <button className='loadMoreButton' onClick={loadMoreProduct}>Load More</button>
        </div>
    );
};

export default MyShop;