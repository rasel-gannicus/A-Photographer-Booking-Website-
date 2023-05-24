import React from 'react';
import './PortraitShowcase.css';

const PortraitShowcase = () => {
    return (
        <div className='row g-4 protrait-showCase  mx-auto h-100'>
            <div className="col-6">
                <div className="">
                    <img src="https://i.ibb.co/gRcPr6d/tyler-nix-ZGa9d1a-4t-A-unsplash-1.jpg" alt="" />
                </div>
            </div>
            <div className="col-6">
                <div className="">
                    <img src="https://i.ibb.co/XjysBcs/elijah-hiett-umfp-Fo-Kx-IVg-unsplash-1.jpg" alt="" />
                </div>
            </div>
            <div className="col-6">
                <div className="">
                    <img src="https://i.ibb.co/qsFHB2f/umar-kashif-u0g-H1-D-GJw-E-unsplash-2.jpg" alt="" />
                </div>
            </div>
            <div className="col-6">
                <div className="">
                    <img src="https://i.ibb.co/843HCxZ/albert-dera-ILip77-Sbm-OE-unsplash-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PortraitShowcase;