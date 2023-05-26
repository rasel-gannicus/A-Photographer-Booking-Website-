import React from 'react';
import { Spinner } from 'react-bootstrap';
import ShopProuduct from '../MyShop/ShopProuduct/ShopProuduct';
import './Shop.css';
import useProduct from '../../Utilities/hooks/useProduct';
import { useDispatch, useSelector } from 'react-redux';

const Shop = (props) => {
    const [product, setProduct] = useProduct();

    const productState = useSelector(state => state.products)
    console.log(productState);

    //--- This function will show only 'Urban' catagory
    function showUrban() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'Urban Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe')

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.remove('hideMe');
        }, 500);
    }

    //--- This function will show only 'Street' catagory
    function showStreet() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'Street Photography';


            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.remove('hideMe');
        }, 500);
    }

    //--- This function will show only 'Wild Div' catagory
    function showWild() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'Wild Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.remove('hideMe');

        }, 500);
    }

    //--- This function will show only 'Citylife Div' catagory
    function showCitylife() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'City Life Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.remove('hideMe');

        }, 500);
    }

    //--- This function will show only 'Others Div' catagory
    function otherslife() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'Others Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.remove('hideMe');

        }, 500);
    }
    //--- This function will show only 'All' catagory
    function showAll() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            let productTitle = document.querySelector('.product-title');
            productTitle.innerText = 'All Photography';

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.remove('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

        }, 500);
    }

    return (
        <div>
            <div className="catagory  ">
                <div className="catagory-title ">
                    <p>Catagory : </p>
                </div>
                <div className="catagory-detail ">
                    <button onClick={showUrban}>Urban</button>
                    <button onClick={showStreet}>Street</button>
                    <button onClick={showWild}>Wild Life</button>
                    <button onClick={showCitylife}>City Life </button>
                    <button onClick={otherslife}>Others </button>
                    <button onClick={showAll}>All </button>
                </div>
            </div>
            <p className="spinners hideMe"><Spinner animation="border" variant="primary" /></p>

            <h2 className='my-5'>Showing <span className='product-title'>All</span> Product </h2>
            {/* -------------- This div will show only 'All' catagory ------------ */}
            <div className="product-show-div all-product">
                {
                    product.map(index => <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>
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