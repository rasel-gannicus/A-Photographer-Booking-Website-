import React, { useEffect, useState } from 'react';
import { useDeleteServiceMutation, useGetServiceCartQuery } from '../../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import './Booking.css';

const Bookings = () => {
    // --- getting user info from firebase
    const [user] = useAuthState(auth);

    const [date, setDate] = useState('');
    // --- getting current date 
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;


    // --- deleting a bookings from db
    const [deleteBooking, { data: deletedData }] = useDeleteServiceMutation();
    const handleDelete = (id) => {
        deleteBooking({ id, email: user?.email });
    }



    // --- checking if the specific service is already added or not
    const { data, isLoading, isError, error, refetch } = useGetServiceCartQuery(user?.email, { skip: !user });
    let content = null;
    if (data?.length > 0) {
        content = data.map(index => <tr key={index._id} className='table-row' >
            <td className='first-td'> <img src={index.thumbImg} alt="" /> {index.packageCatagoryName}</td>
            <td  className='booking-time'><input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} /></td>
            <td className='booking-price'>$ {index.price}</td>
            <td className='booking-pending'>{index?.status || 'Pending'}</td>
            <td  className='booking-decision'><button>Confirm</button><button onClick={() => handleDelete(index._id)}>Delete</button></td>
        </tr>)
    }
    return (
        <div className='booking-div'>
            <h2>Total Bookings : {data?.length} </h2>
            <div >
                <table className="booking-cart-card">
                    <tbody>
                        <tr className='table-header'>
                            <th className='booking-title'>Booking Title</th>
                            <th className='booking-time'>Date</th>
                            <th className='booking-price'>Price</th>
                            <th className='booking-pending'>Status</th>
                            <th className='booking-decision'>Decision</th>
                        </tr>
                        {content}
                        {/* <tr>
                            <td>Jonathan Wick</td>
                            <td>Jonathan Wick</td>
                            <td>Jonathan Wick</td>
                            <td>Jonathan Wick</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;