import React from 'react';
import Banner from './Banner/Banner';
import './Home.css' ; 
import About from './About/About';

const Home = () => {
    return (
        <div  className='home-div app-div'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;