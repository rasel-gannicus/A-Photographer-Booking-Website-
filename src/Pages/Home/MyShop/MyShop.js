import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useProduct from '../../../Utilities/hooks/useProduct';
import './MyShop.css';
import ShopProuduct from './ShopProuduct/ShopProuduct';
import { useGetAllProductQuery } from '../../../Redux/Features/product/productApi';
import { ClipLoader } from 'react-spinners';

const MyShop = (props) => {

    const [count, setCount] = useState(3)

    // --- showing data from mongodb
    const { data, isLoading, isError, error } = useGetAllProductQuery(count);

    // --- deciding what to render while fetching data from server
    let content = null;

    // --- when fetching-data process is in loading state
    if (isLoading && !isError) {
        console.log('Loading');
        content = <div className="loader-in-middle2"><ClipLoader color="black" size={70} /></div>
    }
    
    // --- when there is a error happened while fetching-data 
    if (!isLoading && isError) {
        console.log(error);
        content = <div className="error-text">
            {error.error}
        </div>;
    }

    // --- when we finally get the data
    if (!isLoading && !isError && data.length > 0) {
        content = <div className="product-show-div ">
            {
                data.map(index => <ShopProuduct
                    index={index}
                    key={index.img}
                    addProduct={props.addProduct}
                ></ShopProuduct>)
            }
        </div>
    }


    function loadMoreProduct() {
        setCount(count + 3);
    }
    function loadLess() {
        setCount(count - 3);
    }
    return (
        <div className='my-5 home-my-shop'>
            <h2 className='my-5'>Some Of My Product <br />You Can Buy To Decorate Your Home/Office Wall</h2>
            {content}
            {/* <p className='loading-text mt-5'><Spinner animation="border" variant="primary" /></p> */}
            <button className='loadMoreButton' onClick={loadMoreProduct}>Load More</button>
            {data?.length>3 && <button className='loadMoreButton' onClick={loadLess}>Load Less</button>}
        </div>
    );
};

export default MyShop;