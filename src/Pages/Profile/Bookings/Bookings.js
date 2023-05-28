import React, { useEffect } from 'react';
import { useDeleteServiceMutation, useGetServiceCartQuery } from '../../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import  './Booking.css' ; 

const Bookings = () => {    

    // --- deleting a bookings from db
    const[deleteBooking, {data:deletedData}] = useDeleteServiceMutation();
    const handleDelete = (id) =>{
        deleteBooking(id);
    }


    // --- getting user info from firebase
    const[user] = useAuthState(auth);
    // --- checking if the specific service is already added or not
    const { data, isLoading, isError, error, refetch } = useGetServiceCartQuery(user?.email, { skip: !user });
    let content = null ;
    if(data?.length > 0){
        content = data.map(index=><tr key={index._id}>
            <td> <img src={index.thumbImg} alt="" /> {index.packageCatagoryName}</td>
            <td>{index.price}</td>
            <td>{index?.status || 'Pending'}</td>
            <td><button>Confirm</button><button onClick={()=>handleDelete(index._id)}>Delete</button></td>
        </tr>)
    }
    useEffect(()=>{
        if(deletedData?.deletedCount>0){
            console.log(deletedData);
            console.log('Refetching');
            refetch();
        }
    },[deletedData])
    return (
        <div className='booking-div'>
            <h2>Total Bookings : {data?.length} </h2>
            <div >
                <table className="booking-cart-card">
                    <tbody>
                        <tr>
                            <th>Booking Title</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Decision</th>
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