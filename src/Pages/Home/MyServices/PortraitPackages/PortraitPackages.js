import React from 'react';

const PortraitPackages = (props) => {
    const{id, packageCatagory, packageCatagoryName, cameraMan, duration, thumbImg, price} = props.index;
    
    function bookButton(e){
        // console.log(e.target.parentNode);
        props.handleAddToBooking(id);
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

export default PortraitPackages;