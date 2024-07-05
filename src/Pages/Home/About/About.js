import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import './About.css';
import profileLogo from '../../../assets/img/bg-low-size.png';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

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

    const leftDiv = {
        hidden: { x: - 900 },
        visible: { x: 0, transition: { duration: 0.5 } }
    }
    const rightDiv = {
        hidden: { x: 900 },
        visible: { x: 0, transition: { duration: 0.2 } }
    }


    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);
    return (
        <div className=' about-div mx-auto container'>
            <h2 className=' text-4xl  md:text-6xl font-bold mb-5'>Who am i ?</h2>
            <div className="second-part  flex justify-center items-center py-5">
                        <motion.div
                            variants={leftDiv}
                            ref={ref}
                            initial={controls}
                            animate={controls}
                            className="second-part-left ">
                            <p>A Professional Photographer from a Small City in Bangladesh. I am a self taught Nerd. I have been doing Photography for more than a Decade. I have won several awards and four International Awards for Photography.
                                <br />
                                Street & Wild-life Photography is my favourite Genre. I also have a good hand In Wedding & Portfolio Area. Some of my sample works are given below.
                            </p>
                        </motion.div>

                        <motion.div
                            // variants={rightDiv}
                            // ref={ref}
                            // initial={controls}
                            // animate={controls}
                            className="second-part-right">
                            <div className="second-part-img-div">
                                <div className="second-part-img">
                                    <img src={profileLogo} alt="" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
        </div>
    );
};

export default About;


{/* <p>A Professional Photographer from a Small City in Bangladesh. I am a self taught Nerd. I have been doing Photography for more than a Decade. I have won several awards and four International Awards for Photography. </p>
                    <p>Street & Wild-life Photography is my favourite Genre. I also have a good hand In Wedding & Portfolio Area. Some of my sample works are given below.  </p> */}