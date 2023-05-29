import React, { useEffect, useState } from 'react';
import { useDeleteServiceMutation, useGetServiceCartQuery } from '../../../Redux/Features/service/serviceApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import './Booking.css';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Bookings = () => {
    // --- getting user info from firebase
    const [user] = useAuthState(auth);


    // --- updating a bookings from 'pending' to 'confirmed' 
    const [date, setDate] = useState('');
    // --- getting current date 
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;




    // --- deleting a bookings from db
    const [deleteBooking, { data: deletedData, isLoading, isError, error, isSuccess }] = useDeleteServiceMutation();
    const handleDelete = (id) => {
        const isConfirm = window.confirm('Delete this booking ? ');
        if (isConfirm) {
            deleteBooking({ id, email: user?.email });
        }
    }
    // --- deciding what to show in UI while deleting the data from server
    if (isError) {
        toast.error(error.error || 'There was an error deleting the item !', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    if (deletedData?.deletedCount > 0) {
        toast.success('Booking deleted successfully !', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    // --- checking if the specific service is already added or not
    const { data } = useGetServiceCartQuery(user?.email, { skip: !user });
    let content = null;

    if (data?.length > 0) {
        content = data.map(index => <tr key={index._id} className='table-row' >
            <td className='first-td'> <img src={index.thumbImg} alt="" /> {index.packageCatagoryName}</td>
            <td className='booking-time'><input type="date" id={index._id} /></td>
            <td className='booking-price'>$ {index.price}</td>
            <td className='booking-pending'>{index?.status || 'Pending'}</td>
            <td className='booking-decision'>{isLoading ? <div className="loader-in-middle2"><ClipLoader size={30} color={'black'} /></div> : <><button onClick={()=>handleUpdate(index._id)}>Confirm</button><button onClick={() => handleDelete(index._id)}>Delete</button></>}</td>
        </tr>)
    }

    
    const handleUpdate = (id) => {
        let selectedDate = document.getElementById(`${id}`);
        console.log(selectedDate.value);

/*         if (formattedDate > date) {
            toast.error("You can't select Date before Today !", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } */
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
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;