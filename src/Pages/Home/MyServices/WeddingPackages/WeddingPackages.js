import React, { useEffect, useState } from 'react';
import './WeddingPackages.css';
import { useAddServiceToDbMutation, useGetServiceCartQuery } from '../../../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Utilities/firebase.init';

const WeddingPackages = (props) => {
    const { id, packageCatagory, packageCatagoryName, cameraMan, duration, thumbImg, price } = props.index;
    const [button, setButton] = useState(false);

    // --- getting user info from firebase
    const [user] = useAuthState(auth);

    // --- checking if the specific service is already added or not
    const { data: serviceCart } = useGetServiceCartQuery(user?.email, { skip: !user });
    // let button = 
    useEffect(() => {
        if (serviceCart?.length > 0) {
            for (let element of serviceCart) {
                if (element.serviceId == id) {
                    setButton(true);
                }
            }
        }
    }, [serviceCart, user])

    // --- booking a service & adding it to database
    const [addService, { data, isLoading, isError, error }] = useAddServiceToDbMutation();
    if (isLoading && !isError) {
        console.log('Sending data');
    }
    if (!isLoading && isError) {
        console.log('Error happened: ', error.error);
    }
    useEffect(() => {
        if (data) {
            console.log('Added Successfully !', data);
            if (data.acknowledged) {
                setButton(true);
            }
        }
    }, [data])

    function bookButton(e) {
        if (user?.email) {
            addService({ email: user.email, serviceId: id, packageCatagory, packageCatagoryName, cameraMan, duration, thumbImg, price });
        }
    }
    return (
        <div className='mx-auto'>
            <div className="wedding-card ">
                <div className="wedding-card-upper">
                    <img src={thumbImg} alt="" />
                </div>
                <div className="wedding-card-lower ">
                    <div className="wedding-card-desc">
                        <h4>{packageCatagoryName}</h4>
                        <div className="package-main-feature">
                            <div className="package-main-feature-left">
                                <p>{cameraMan}</p>
                                <p>Camera Man</p>
                            </div>
                            <div className="package-main-feature-right">
                                <p>{duration}</p>
                                <p>Hours Shooting</p>
                            </div>
                        </div>
                        <button onClick={bookButton} className={!button ? 'book-button' : 'book-button2'} disabled={button}>{button ? 'Added' : 'Add To Booking'}</button>
                        {/* <button className="book-button2">Added</button> */}
                    </div>
                </div>
                <div className="wedding-card-icon border">
                    <div className="wedding-card-icon-inner">
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingPackages;