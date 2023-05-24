import React from 'react';
import './Banner.css';
import bannerImg from '../../../assets/img/banner-bg.png';

const Banner = () => {
    return (
        <div className="banner-div">
            <div className='container'>
                <div className="row g-3">
                    <div className="col-lg-6">
                        <div className="h-100">
                            <div className="banner-left h-100">
                                <div className="banner-left-header">
                                    <p>Hi There</p>
                                    <h1><span className="special-color"></span>I am Jonathan Wick</h1>
                                </div>
                                <p>A Professional Award Winning PhotoGrapher</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="h-100">
                            <div className="banner-right">
                                <div className="banner-img">
                                    <img src={bannerImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;