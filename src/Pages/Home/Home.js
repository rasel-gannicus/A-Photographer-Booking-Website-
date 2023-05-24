import React from 'react';
import Banner from './Banner/Banner';
import './Home.css' ; 
import About from './About/About';
import ShowCase from './ShowCase/ShowCase';
import MyServices from './MyServices/MyServices';

const Home = () => {
    return (
        <div  className='home-div app-div'>
            <Banner></Banner>
            <About></About>
            <ShowCase></ShowCase>
            <MyServices></MyServices>
        </div>
    );
};

export default Home;