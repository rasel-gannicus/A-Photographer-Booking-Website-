import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import './Booking.css';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useAddServiceToDbMutation, useDeleteServiceMutation, useDeletingAServiceMutation, useGetAllConfirmedBookingsQuery, useGetServiceCartQuery, useUpdateServiceMutation } from '../../../Redux/Features/service/serviceApi';

const BookingsCard = ({ index }) => {

    const { serviceId, packageCatagory, packageCatagoryName, cameraMan, duration, thumbImg, price, status } = index;

    // --- getting user info from firebase
    const [user] = useAuthState(auth);

    // --- for checking duplicate booking from anoter user
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [morning, setMorning] = useState(false);
    const [afternoon, setAfternoon] = useState(false);
    const [night, setNight] = useState(false);

    const changeTimeMenu = (e) => {
        setDate(e.target.value);
        setMorning(false);
        setAfternoon(false);
        setNight(false);
        setTime('');
    }

    // --- get all confirmed booking data from server
    const { data: alreadyBooked, refetch } = useGetAllConfirmedBookingsQuery();

    // --- custom error & success message 
    let errMsg = (msg) => toast.error(msg || 'There was an error doing the operation !', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    let successMsg = (msg) => toast.success(msg, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    // --- getting current date 
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;


    /*  ----------------------------------- 
        Deleting a bookings from db 
    --------------------------------------*/

    const [deleteAservice, { data, isLoading, isError, error, isSuccess }] = useDeletingAServiceMutation();

    const handleDelete = (id) => {
        const isConfirm = window.confirm('Cancel this booking ? ');
        if (isConfirm) {
            let sendingData = { id: index._id, email: user?.email }
            deleteAservice(sendingData);
            refetch();
        }
    }
    // --- deciding what to show in UI while deleting the data from server
    useEffect(() => {
        if (isError) {
            console.log('Error happened !');
            errMsg(error.error || 'There was an error deleting the item !')
        }
        if (data?.deletedCount > 0) {
            console.log('Deleted');
            successMsg('Deleted Successfully !');
            refetch();
        }
        if (isLoading) {
            console.log('Loading ... ');
        }
    }, [isError, data, isLoading, error?.error, refetch])


    /* ------------------------------------------------------- 
        Booking or updating a service & adding it to database 
    ---------------------------------------------------------*/

    const [confirmUpdate, { data: updatedData, isLoading: updateLoading, isError: updateIsError, error: updateError }] = useUpdateServiceMutation();

    const handleUpdate = (id) => {
        let selectedDateId = document.getElementById(`${id}`);
        let selectedDate = selectedDateId.value;
        if (!selectedDate) {
            errMsg('Please Select Date First !')
        } else if (!time) {
            errMsg('You have to select time')
        } else {
            if (formattedDate > selectedDate) {
                errMsg("You can't select Date before Today !");
            } else if (formattedDate == selectedDate) {
                errMsg("You can't select Today !");
            } else {
                confirmUpdate({ email: user.email, serviceId, time, date: selectedDate, status: 'confirmed' })
            }
        }
    }

    // --- deciding what to show in UI while updating data
    if (updateLoading && !updateIsError) {
    }
    else if (!updateLoading && updateIsError) {
        errMsg(updateError.error);
    }
    useEffect(() => {
        if (updatedData) {
            console.log(updatedData);
            if (updatedData.acknowledged) {
                successMsg('Your Booking Has been Confirmed !');
                refetch();
            }
        }
    }, [updatedData, refetch]);


    // --- checking out if there is already booking in the same day by another user. If another user already confirmed a 'booking' at a certain time, the current user cannot make a new booking at that time. 
    useEffect(() => {
        if (date !== '') {
            const matchedDate = alreadyBooked?.filter(index => index.date === date);
            
            if (matchedDate) {
                for (let i = 0; i < matchedDate.length; i++) {
                    if (matchedDate[i].time === 'Afternoon') {
                        setAfternoon(true);
                    }
                    if (matchedDate[i].time === 'Morning') {
                        setMorning(true);
                    }
                    if (matchedDate[i].time === 'Night') {
                        setNight(true);
                    }
                }
                return;
            }
        }
    }, [date, afternoon, morning, night, alreadyBooked, refetch, updatedData, deleteAservice, data, isLoading, isSuccess])


    return (
        <tr key={index._id} className={`table-row ${status === 'confirmed' && 'green-row'}`} >

            <td className='first-td'>
                <img src={index.thumbImg} alt="" /> {index.packageCatagoryName}
            </td>

            <td className='booking-time'>
                <input type="date" id={index._id} defaultValue={index?.date} readOnly={index?.date} onChange={e => changeTimeMenu(e)} />
            </td>

            <td className='booking-time'>
                <select name="" id="" onChange={e => setTime(e.target.value)} defaultValue={index?.time} disabled={index?.time} value={time} >
                    <option disabled value='' >Select Time</option>
                    <option disabled={morning} value="Morning">Monrning</option>
                    <option disabled={afternoon} value="Afternoon">Afternoon</option>
                    <option disabled={night} value="Night">Night</option>
                </select>
            </td>

            <td className='booking-price'>
                $ {index.price}
            </td>

            <td className={status == 'confirmed' ? 'booking-pending confirmed-text' : 'booking-pending'}>
                {updateLoading ? <div className='loader-in-middle2'><ClipLoader size={30} color={'black'}></ClipLoader></div> : (index?.status || 'Pending')}
            </td>

            <td className='booking-decision'>
                {isLoading ? <div className="loader-in-middle2"><ClipLoader size={30} color={'black'} /></div>
                    :
                    <>
                        <button className={status === 'confirmed' ? 'disabled-green' : ''} disabled={status === 'confirmed'} onClick={() => handleUpdate(index._id)}>Confirm</button>
                        <button onClick={() => handleDelete(index._id)}>Cancel</button>
                    </>}
            </td>

        </tr>
    );
};

export default BookingsCard;