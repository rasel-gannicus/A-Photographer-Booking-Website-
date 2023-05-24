import React from 'react';
import './About.css' ; 
import profileLogo from '../../../assets/img/bg-low-size.png';

const About = () => {
    function showAbout() {
        const secondPart = document.querySelector('.second-part');
        secondPart.classList.add('active');

        const secondPartLeft = document.querySelector('.second-part-left');
        secondPartLeft.classList.add('active');

        const secondPartRight = document.querySelector('.second-part-right');
        secondPartRight.classList.add('active');
    }
    function hideAbout() {
        const secondPart = document.querySelector('.second-part');
        secondPart.classList.remove('active');

        const secondPartLeft = document.querySelector('.second-part-left');
        secondPartLeft.classList.remove('active');

        const secondPartRight = document.querySelector('.second-part-right');
        secondPartRight.classList.remove('active');
    }
    return (
        <div className=' about-div mx-auto'>
            <div onMouseEnter={showAbout} onMouseLeave={hideAbout} className=" mx-auto">
                <div className="first-part">
                    <h2>Who am i ?</h2>
                    <p>A Professional Photographer from a Small City in Bangladesh. I am a self taught Nerd. I have been doing Photography for more than a Decade. I have won several awards and four International Awards for Photography. </p>
                    <p>Street & Wild-life Photography is my favourite Genre. I also have a good hand In Wedding & Portfolio Area. Some of my sample works are given below.  </p>
                    <div className="second-part">
                        <div className="second-part-left ">
                            <p>A Professional Photographer from a Small City in Bangladesh. I am a self taught Nerd. I have been doing Photography for more than a Decade. I have won several awards and four International Awards for Photography.
                                <br />
                                Street & Wild-life Photography is my favourite Genre. I also have a good hand In Wedding & Portfolio Area. Some of my sample works are given below.
                            </p>
                        </div>
                        <div className="second-part-right">
                            <div className="second-part-img-div">
                                <div className="second-part-img">
                                    <img src={profileLogo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;