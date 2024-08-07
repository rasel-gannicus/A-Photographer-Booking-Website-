import React, { useEffect, useState } from 'react';
import { useDeleteServiceMutation, useGetServiceCartQuery } from '../../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import './Booking.css';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import BookingsCard from './BookingsCard';

const Bookings = () => {


    // --- getting user info from firebase
    const [user] = useAuthState(auth);

    // --- checking if the specific service is already added or not
    const { data } = useGetServiceCartQuery(user?.email, { skip: !user });
    let content = null;

    if (data?.length > 0) {
        content = data.map(index => <BookingsCard key={index._id} index={index}></BookingsCard>)
    }


    return (
        <div className='booking-div'>
            <h2 className='text-2xl font-semibold'>Total Bookings : {data?.length} </h2>
            <div className='' >
                <table className="booking-cart-card ">
                    <tbody >
                        <tr className='table-header'>
                            <th className='booking-title'>Booking Title</th>
                            <th className='booking-time text-center'>Date & Time</th>
                            <th className='booking-price'>Price</th>
                            <th className='booking-pending'>Status</th>
                            <th className='booking-decision'>Decision</th>
                        </tr>
                        {content}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;