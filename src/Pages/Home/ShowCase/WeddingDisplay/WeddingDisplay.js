import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './WeddingDisplay.css';

const WeddingDisplay = () => {
    return (
        <div className='portraitdiv-parent'>
            <h2 className='pt-2 '>My Wedding Photography  </h2>
            <hr width='50%' className='text-center mx-auto' />
            <Carousel>             
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/1XwKWmX/nathan-dumlao-H-c-Zqry-Uuok-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/zfDzPLV/nathan-dumlao-j-HXZZx5-D-lg-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/wJLgc2J/nathan-dumlao-5t-WJ49fht-Bw-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/9bnZ4s9/ulyana-tim-Abn-CRg-L2-DNs-unsplash-1.jpg" alt=''/>
                </div>     
                <div className='carousel-img-div '>
                    <img src="https://i.ibb.co/BqRSV64/alok-verma-oh-ENj-R9w0bk-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/bdnmFHc/sean-williams-d-jy-Me-P6u-NQ-unsplash-2-1.jpg" alt=''/>
                </div>            
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/k8KTX64/rayyu-maldives-Ku-An-Md-XZav-Y-unsplash-1.jpg" alt=''/>
                </div>                    
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/L1Wqk5H/dollar-gill-T-PUQa-J8-YEw-unsplash-2-1.jpg" alt=''/>
                </div>              
            </Carousel>
        </div>
    );
};

export default WeddingDisplay;