import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './StreetDisplay.css';

const StreetDisplay = () => {
    return (
        <div className='portraitdiv-parent'>
            <h2 className='pt-2 '>My Street Photography  </h2>
            <hr width='50%' className='text-center mx-auto' />
            <Carousel>
                <div className='carousel-img-div '>
                    <img src="https://i.ibb.co/V25NxTS/rafael-garcin-92c-Zp-Orb-H5-M-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/PFyqZFK/shifaaz-shamoon-FMewg-Wp-Y6-Ak-unsplash-1.jpg" alt=''/>
                </div>              
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/ph2rW8s/eugeniya-belova-j9-VZc-YCti-Og-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/3SNK3f1/raychan-yk7-F8bd-D0e-U-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/XzjCgmW/florin-bica-1-Yw-QZVr-APwg-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/ZfXHcr4/artem-beliaikin-8-As-Kha7a-Ivk-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/pw5YCm4/nathan-dumlao-1qsbpl-LDUa8-unsplash-1.jpg" alt=''/>
                </div>                    
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/Gt7qqtP/rene-bohmer-1o-DK5-RMat-A-unsplash-1.jpg" alt=''/>
                </div>              
            </Carousel>
        </div>
    );
};

export default StreetDisplay;