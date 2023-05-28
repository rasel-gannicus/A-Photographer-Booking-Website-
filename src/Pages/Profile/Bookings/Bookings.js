import React from 'react';
import { useGetServiceCartQuery } from '../../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import  './Booking.css' ; 

const Bookings = () => {

    // --- getting user info from firebase
    const[user] = useAuthState(auth);
    // --- checking if the specific service is already added or not
    const { data } = useGetServiceCartQuery(user?.email, { skip: !user });
    
    return (
        <div className='booking-div'>
            <h2>Total Bookings : {data?.length} </h2>
            <div >
                <table className="booking-cart-card">
                    <tbody>
                        <tr>
                            <th>Booking Title</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                        <tr>
                            <td>Jonathan Wick</td>
                            <td>Jonathan Wick</td>
                            <td>Jonathan Wick</td>
                        </tr>
                        <tr>
                            <td>Jonathan Wick</td>
                            <td>Jonathan Wick</td>
                            <td>Jonathan Wick</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;