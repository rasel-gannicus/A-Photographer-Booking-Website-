import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ShopProuduct from '../Home/MyShop/ShopProuduct/ShopProuduct';
import './Shop.css';
import {  useGetProductByCatagoryMutation,  } from '../../Redux/Features/product/productApi';
import { ClipLoader } from 'react-spinners';

const Shop = (props) => {
    const[categories, setCategories]= useState('all');
    const[currentPage, setCurrentPage] = useState(0);
    const[contentPerPage, setContentPerPage] = useState(10);


    // --- getting product data according to catagory
    const[getProductByCatagory, {data:catagoryProduct, isLoading:catagoryLoading, isError:catagoryIsError, error:catagoryError}] = useGetProductByCatagoryMutation();
    let content = null;

    if (catagoryLoading && !catagoryIsError) {
        content = <div className="loader-in-middle2"><ClipLoader color="black" size={70} /></div>
    }
    if (!catagoryLoading && catagoryIsError) {
        console.log(catagoryError);
        content = catagoryError.error;
    }
    let totalPage = 0 ;
    if (!catagoryLoading && !catagoryIsError && catagoryProduct?.result?.length > 0) {
        const{count, result} = catagoryProduct;
        totalPage = Math.ceil(count/contentPerPage);
        console.log('Count From DB: ',count);

        content = <div className="product-show-div all-product ">
             {result.map(index => <ShopProuduct
                index={index}
                key={index.img}
                addProduct={props.addProduct}
            ></ShopProuduct>)}
        </div>
    }
    // ---- show product by catagory
    function showByCategory(category, currentPage, contentPerPage) {
        getProductByCatagory({category, currentPage, contentPerPage});        
        
        let productTitle = document.querySelector('.product-title');
        productTitle.innerText = `${category} Photography`;
    }

    useEffect(()=>{
        showByCategory(categories, currentPage, contentPerPage);
    },[categories, currentPage, contentPerPage])

    // --- the previous code i wrote here was more than 180+ lines. which i just made  25 lines with more efficient way. The beauty of coding ! The beauty of more learning !

    return (
        <div>
            <div className="catagory  ">
                <div className="catagory-title ">
                    <p>Catagory : </p>
                </div>
                <div className="catagory-detail ">
                    <button onClick={()=>setCategories('urban')}>Urban</button>
                    <button onClick={()=>setCategories('street')}>Street</button>
                    <button onClick={()=>setCategories('wild')}>Wild Life</button>
                    <button onClick={()=>setCategories('citylife')}>City Life </button>
                    <button onClick={()=>setCategories('others')}>Others </button>
                    <button onClick={()=>setCategories('all')}>All </button>
                </div>
            </div>
            <p className="spinners hideMe"><Spinner animation="border" variant="primary" /></p>

            <h2 className='my-5'>Showing <span className='product-title'>All</span> Product </h2>
            {/* -------------- Show product by catagory ------------ */}
            {content}          
            <div className="pagination">
                {[...Array(totalPage).keys()].map(index=><button 
                key={index}
                onClick={()=>setCurrentPage(index)}
                className={currentPage == index && 'selectedButton'}
                >{index}</button>)}
                <select name="" id="" onChange={e => setContentPerPage(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;