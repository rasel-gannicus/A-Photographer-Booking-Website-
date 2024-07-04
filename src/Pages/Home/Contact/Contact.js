import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='my-5'>
            <div className="contact-parent container py-5">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="h-100">
                            <div className="contact-left h-100">
                                <img src="https://i.ibb.co/yRFfLG1/craig-manners-bm-Kb-Wks7pps-unsplash.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="h-100">
                            <div className="contact-form">
                                <h2 className='mb-3 text-4xl font-semibold'>Contact Me </h2>
                                <div className="input-fields">
                                    <form action="">
                                        <div className="input-field ">
                                            <input type="text" name="" id="" required/>
                                            <span className='input-placeholder'>Your Name </span>
                                        </div>
                                        <div className="input-field ">
                                            <input type="text" name="" id="" required/>
                                            <span className='input-placeholder'>Your Email </span>
                                        </div>
                                        <div className="input-field ">
                                            <textarea name="" id="" cols="20" rows="6" required></textarea>
                                            <span className='input-placeholder'>Your Message </span>
                                        </div>
                                        <div className="message-button-div ">
                                            <button>Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;