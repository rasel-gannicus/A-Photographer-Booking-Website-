import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { addToBookingDb } from '../../../utilities/Local Storage/bookings-storage';
import './MyServices.css';
import WeddingPackages from './WeddingPackages/WeddingPackages';
import usePackages from '../../../Utilities/hooks/usePackages';
import { useInView } from 'react-intersection-observer';

const MyServices = (props) => {
    const [packages, setPackages] = usePackages();

    // --- framer motion animation functionality
    const [controls, setControls] = useState('hidden');
    const [controls2, setControls2] = useState('hidden');
    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();

    const parent = {
        hidden: { y: 0, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { ease: "easeInOut", duration: 0.4, staggerChildren: 0.2 } }
    }
    // const child = {
    //     hidden: { x: 900, opacity: 0 },
    //     visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    // }


    useEffect(() => {

        if (inView) {
            setControls('visible')
        }
        if (!inView) {
            setControls('hidden')
        }

        if (inView2) {
            setControls2('visible')
            console.log('in');
        }
        if (!inView2) {
            setControls2('hidden');
            console.log('out');
        }

    }, [controls, inView, controls2, inView2]);

    return (
        <div className=' myServices-div my-5 mx-auto overflow-hidden py-10 '>
            <h2 className=' text-4xl md:text-6xl font-bold'>My Services</h2>
            <h2 className=' pacakge-heading text-3xl'>Wedding Packages</h2>
            <hr width='50%' className='mx-auto' />

            <motion.div className="wedding-packages-div  min-h-32 " ref={ref}>
                <motion.div variants={parent} initial={controls} animate={controls} className=" flex flex-wrap justify-center gap-5 items-center w-full ">
                    {
                        packages.map(index => index.mainCatagory == 'wedding' && <WeddingPackages
                            index={index}
                            key={index.id}
                            handleAddToBooking={props.handleAddToBooking}
                        ></WeddingPackages>)
                    }
                </motion.div>
            </motion.div>

            <h2 className='pacakge-heading text-3xl'>Portrait Packages</h2>
            <hr width='50%' className='mx-auto' />
            <motion.div className="portrait-packages-div  min-h-32" ref={ref2}>
                <motion.div variants={parent} initial={controls2} animate={controls2} className=" flex flex-wrap justify-center gap-5 items-center w-full ">
                    {
                        packages.map(index => index.mainCatagory == 'portrait' && <WeddingPackages
                            index={index}
                            key={index.id}
                            handleAddToBooking={props.handleAddToBooking}
                        ></WeddingPackages>)
                    }
                </motion.div>

            </motion.div>
        </div>
    );
};

export default MyServices;