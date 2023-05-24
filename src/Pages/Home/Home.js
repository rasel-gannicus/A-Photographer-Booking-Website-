import React from 'react';
import Banner from './Banner/Banner';
import './Home.css' ; 
import About from './About/About';
import ShowCase from './ShowCase/ShowCase';
import MyServices from './MyServices/MyServices';
import MyShop from './MyShop/MyShop';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className='home-div app-div'>
            <Banner></Banner>
            <About></About>
            <ShowCase></ShowCase>
            <MyServices></MyServices>
            <MyShop></MyShop>
            <Contact></Contact>
        </div>
    );
};

export default Home;