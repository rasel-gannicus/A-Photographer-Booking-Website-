import React from 'react';
import './WeddingPackages.css';
import { useAddServiceToDbMutation } from '../../../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Utilities/firebase.init';

const WeddingPackages = (props) => {
    const { id, packageCatagory, packageCatagoryName, cameraMan, duration, thumbImg, price } = props.index;

    const [user] = useAuthState(auth);

    // --- booking a service & adding it to database
    const [addService, { data, isLoading, isError, error }] = useAddServiceToDbMutation();

    function bookButton(e) {

        if (user?.email) {
            addService({ email : user.email, serviceId: id, packageCatagory, packageCatagoryName, cameraMan, duration, thumbImg, price });
        }

        e.target.style.backgroundColor = '#ccc'
        e.target.innerText = 'Added';
        e.target.disabled = 'true';
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
                        <button onClick={bookButton} className="book-button">Add To Booking</button>
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