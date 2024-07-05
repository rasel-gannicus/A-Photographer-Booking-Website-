import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion' ;
import './WeddingPackages.css';
import { useAddServiceToDbMutation, useGetServiceCartQuery } from '../../../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Utilities/firebase.init';
import { toast } from 'react-toastify';
import { errorMessage } from '../../../../Utilities/popupMsg';
import { useInView } from 'react-intersection-observer';

const WeddingPackages = (props) => {

     const child = {
         hidden: { y: 900, opacity: 0 },
         visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
     }
 
 

    const { id, packageCatagory, packageCatagoryName, cameraMan, duration, thumbImg, price } = props.index;

    const [button, setButton] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Booking')

    // --- getting user info from firebase
    const [user] = useAuthState(auth);

    // --- checking if the specific service is already added or not
    const { data: serviceCart, refetch } = useGetServiceCartQuery(user?.email, { skip: !user });
    
    useEffect(() => {
        if (serviceCart?.length > 0) {
            for (let element of serviceCart) {
                if (element.serviceId == id) {
                    setButton(true);
                    setButtonText('Added');
                }
            }
        }
    }, [serviceCart, user, id, refetch])

    // --- booking a service & adding it to database
    const [addService, { data, isLoading, isError, error }] = useAddServiceToDbMutation();

    useEffect(() => {
        if (isLoading && !isError) {
            setButtonText('Adding...');
        }
        else if (!isLoading && isError) {
            console.log('Error happened: ', error);
            errorMessage(error?.data?.message)
            setButtonText('Add to Booking');
        }
        else if (data) {
            if (data.acknowledged) {
                setButtonText('Added');
                setButton(true);
                refetch();
            }
        }else{
            setButtonText('Add to Booking');
        }
    }, [data, isLoading, isError, error?.error])

    function bookButton(e) {
        if (user?.email) {
            addService({ email: user.email, serviceId: id, packageCatagory, packageCatagoryName, cameraMan, duration, thumbImg, price, status :'pending' });
        }else{
            toast.error('You have to login first !', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <motion.div variants={child} className='mx-auto'>
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
                        <button onClick={bookButton} className={!button ? 'book-button' : 'book-button2'} disabled={button}>{button ? 'Added' : 'Add to Booking'}</button>
                        {/* <button className="book-button2">Added</button> */}
                    </div>
                </div>
                <div className="wedding-card-icon border">
                    <div className="wedding-card-icon-inner">
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default WeddingPackages;