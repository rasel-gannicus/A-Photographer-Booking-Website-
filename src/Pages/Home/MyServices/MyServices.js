import React, { useEffect, useState } from 'react';
// import { addToBookingDb } from '../../../utilities/Local Storage/bookings-storage';
import './MyServices.css';
import WeddingPackages from './WeddingPackages/WeddingPackages';
import usePackages from '../../../Utilities/hooks/usePackages';

const MyServices = (props) => {
    const [packages, setPackages] = usePackages();  
    
    return (
        <div className=' myServices-div my-5 mx-auto '>
            <h2>My Services</h2>
            <h2 className=' pacakge-heading'>Wedding Packages</h2>
            <hr width='50%' className='mx-auto'/>
            <div className="wedding-packages-div">
                {
                    packages.map(index => index.mainCatagory == 'wedding' && <WeddingPackages
                        index={index}
                        key={index.id}
                        handleAddToBooking={props.handleAddToBooking}
                    ></WeddingPackages>)
                }
            </div>
            
            <h2 className='pacakge-heading'>Portrait Packages</h2>
            <hr width='50%' className='mx-auto'/>
            <div className="portrait-packages-div">
                {
                    packages.map(index => index.mainCatagory == 'portrait' && <WeddingPackages
                        index={index}
                        key={index.id}
                        handleAddToBooking={props.handleAddToBooking}
                    ></WeddingPackages>)
                }
            </div>
        </div>
    );
};

export default MyServices;