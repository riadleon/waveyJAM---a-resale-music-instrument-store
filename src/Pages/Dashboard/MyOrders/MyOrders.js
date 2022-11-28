import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyOrdersCard from './MyOrdersCard';
// import { useLoaderData } from 'react-router-dom';

const MyOrders = () => {
    // const { booking } = useLoaderData();
    // console.log(booking);
    const [bookings, getBookings] = useState([]);
    const { user } = useContext(AuthContext)

    const url = 'http://localhost:8000/';

    useEffect(() => {
        getAllBookings();
    }, [])

    const getAllBookings = () => {
        axios.get(`${url}productBooking?email=${user?.email}`)
            .then((response) => {
                const allBookings = response.data;
                console.log(allBookings);
                getBookings(allBookings);
            })
            .catch(error => console.error(`Error: ${error}`));
    }
    return (
        <div>
            <h2 className='text-4xl text-center'>My Products </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Product Name</th>

                            <th> Price</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking =>
                                <MyOrdersCard
                                    key={booking._id}
                                    booking={booking}
                                ></MyOrdersCard>)
                        }


                    </tbody>


                </table>

            </div>

        </div>
    );
};

export default MyOrders;





