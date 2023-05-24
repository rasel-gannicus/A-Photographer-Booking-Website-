import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './WildDisplay.css';

const WildDisplay = () => {
    return (
        <div className='portraitdiv-parent'>
            <h2 className='pt-2 '>My Wildlife Photography  </h2>
            <hr width='50%' className='text-center mx-auto' />
            <Carousel>             
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/4gzsMb3/kevin-martin-jose-CRKe-Bz7-M73s-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/6FTG7nd/brian-scott-3672q-Py8-V9-Y-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/Lhxzc9k/alan-j-hendry-c-TTod-HKs8-NA-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/G0qPDhp/hidde-rensink-Krb-TI4-X1x4-U-unsplash-1.jpg" alt=''/>
                </div>     
                <div className='carousel-img-div '>
                    <img src="https://i.ibb.co/YZLDtBK/peter-burdon-k-XEUe-XR4it-Y-unsplash-1.jpg" alt=''/>
                </div>                
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/McHSzrL/georgi-kalaydzhiev-97w-VIopqxow-unsplash-1.jpg" alt=''/>
                </div>            
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/6YzMCxs/marta-rastovac-jn-PZc-Zk9-x-U-unsplash-1.jpg" alt=''/>
                </div>                    
                <div className='carousel-img-div'>
                    <img src="https://i.ibb.co/WpFTcwG/daniel-lincoln-IE2-Z11z-Ksso-unsplash-1.jpg" alt=''/>
                </div>              
            </Carousel>
        </div>
    );
};

export default WildDisplay;