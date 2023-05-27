import React from 'react';
import { Spinner } from 'react-bootstrap';
import ShopProuduct from '../MyShop/ShopProuduct/ShopProuduct';
import './Shop.css';
import useProduct from '../../Utilities/hooks/useProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllProductQuery, useGetProductByCatagoryMutation, useGetProductByCatagoryQuery } from '../../Redux/Features/product/productApi';
import { ClipLoader } from 'react-spinners';

const Shop = (props) => {
    const [product, setProduct] = useProduct();

    // --- getting all products data from mongodb
    const { data, isLoading, isError, error } = useGetAllProductQuery();

    // --- deciding what to show in the webpage while fetching data from server
    let content = null;
    if (isLoading && !isError) {
        content = <div className="loader-in-middle2"><ClipLoader color="black" size={70} /></div>
    }
    if (!isLoading && isError) {
        console.log(error);
        content = error.error;
    }
    if (!isLoading && !isError && data.length > 0) {
        content = <div className="product-show-div all-product ">
             {data.map(index => <ShopProuduct
                index={index}
                key={index.img}
                addProduct={props.addProduct}
            ></ShopProuduct>)}
        </div>
    }

    // --- getting product data according to catagory
    const[getProductByCatagory, {data:catagoryProduct, isLoading:catagoryLoading, isError:catagoryIsError, error:catagoryError}] = useGetProductByCatagoryMutation();

    if (catagoryLoading && !catagoryIsError) {
        content = <div className="loader-in-middle2"><ClipLoader color="black" size={70} /></div>
    }
    if (!catagoryLoading && catagoryIsError) {
        console.log(catagoryError);
        content = catagoryError.error;
    }
    if (!catagoryLoading && !catagoryIsError && catagoryProduct?.length > 0) {
        content = <div className="product-show-div all-product ">
             {catagoryProduct.map(index => <ShopProuduct
                index={index}
                key={index.img}
                addProduct={props.addProduct}
            ></ShopProuduct>)}
        </div>
    }
    // ---- show product by catagory
    function showByCategory(category) {
        getProductByCatagory(category);        
        
        let productTitle = document.querySelector('.product-title');
        productTitle.innerText = `${category} Photography`;
    }

    // --- the previous code i wrote here was more than 180+ lines. which i just made  25 lines with more efficient way. The beauty of coding ! The beauty of more learning !
    
    return (
        <div>
            <div className="catagory  ">
                <div className="catagory-title ">
                    <p>Catagory : </p>
                </div>
                <div className="catagory-detail ">
                    <button onClick={()=>showByCategory('urban')}>Urban</button>
                    <button onClick={()=>showByCategory('street')}>Street</button>
                    <button onClick={()=>showByCategory('wild')}>Wild Life</button>
                    <button onClick={()=>showByCategory('citylife')}>City Life </button>
                    <button onClick={()=>showByCategory('others')}>Others </button>
                    <button onClick={()=>showByCategory('all')}>All </button>
                </div>
            </div>
            <p className="spinners hideMe"><Spinner animation="border" variant="primary" /></p>

            <h2 className='my-5'>Showing <span className='product-title'>All</span> Product </h2>
            {/* -------------- This div will show only 'All' catagory ------------ */}
            {content}
            {/* -------------- This div will show only 'Urban' catagory ------------ */}
            <div className="product-show-div urban-product hideMe">
                {
                    product.map(index => index.catagory == 'urban' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Street' catagory ------------ */}
            <div className="product-show-div street-product hideMe">
                {
                    product.map(index => index.catagory == 'street' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Wild' catagory ------------ */}
            <div className="product-show-div wild-product hideMe">
                {
                    product.map(index => index.catagory == 'wild' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Citylife' catagory ------------ */}
            <div className="product-show-div citylife-product hideMe">
                {
                    product.map(index => index.catagory == 'citylife' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Others' catagory ------------ */}
            <div className="product-show-div others-product hideMe">
                {
                    product.map(index => index.catagory == 'others' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

        </div>
    );
};

export default Shop;