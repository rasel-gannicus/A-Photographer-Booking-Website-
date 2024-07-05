import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'
import './About.css';
import profileLogo from '../../../assets/img/bg-low-size.png';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [controls, setControls] = useState('hidden');
    const [ref, inView] = useInView();


    const leftDiv = {
        hidden: { x: - 900, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    }
    const rightDiv = {
        hidden: { x: 900, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    }


    useEffect(() => {
        if (inView) {
            setControls('visible')
        }
        if (!inView) {
            setControls('hidden')
        }
    }, [controls, inView]);
    return (
        <div className=' about-div mx-auto container'>
            <h2 className=' text-4xl  md:text-6xl font-bold '>Who am i ?</h2>
            <div className="second-part hidden  md:flex justify-center items-center my-3"  ref={ref}>
                <motion.div
                    variants={leftDiv}
                    initial={controls}
                    animate={controls}
                    className="second-part-left ">
                    <p>A Professional Photographer from a Small City in Bangladesh. I am a self taught Nerd. I have been doing Photography for more than a Decade. I have won several awards and four International Awards for Photography.
                        <br />
                        Street & Wild-life Photography is my favourite Genre. I also have a good hand In Wedding & Portfolio Area. Some of my sample works are given below.
                    </p>
                </motion.div>

                <motion.div
                    variants={rightDiv}
                    initial={controls}
                    animate={controls}
                    className="second-part-right">
                    <div className="second-part-img-div">
                        <div className="second-part-img">
                            <img src={profileLogo} alt="" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- for mobile view --- */}
            <div className="md:hidden  my-5 flex flex-col justify-center items-center text-center font-semibold text-gray-400">
                <p>A Professional Photographer from a Small City in Bangladesh. I am a self taught Nerd. I have been doing Photography for more than a Decade. I have won several awards and four International Awards for Photography.
                    <br />
                    Street & Wild-life Photography is my favourite Genre. I also have a good hand In Wedding & Portfolio Area. Some of my sample works are given below.
                </p>
                <div className="second-part-img mt-2">
                    <img src={profileLogo} alt="" className=' ' />
                </div>
            </div>
        </div>
    );
};

export default About;


{/* <p>A Professional Photographer from a Small City in Bangladesh. I am a self taught Nerd. I have been doing Photography for more than a Decade. I have won several awards and four International Awards for Photography. </p>
                    <p>Street & Wild-life Photography is my favourite Genre. I also have a good hand In Wedding & Portfolio Area. Some of my sample works are given below.  </p> */}