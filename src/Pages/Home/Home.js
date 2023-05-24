import React from 'react';
import Banner from './Banner/Banner';
import './Home.css' ; 
import About from './About/About';
import ShowCase from './ShowCase/ShowCase';

const Home = () => {
    return (
        <div  className='home-div app-div'>
            <Banner></Banner>
            <About></About>
            <ShowCase></ShowCase>
        </div>
    );
};

export default Home;