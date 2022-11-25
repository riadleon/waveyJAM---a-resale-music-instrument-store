import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyOrdersCard from './MyOrdersCard';
// import { useLoaderData } from 'react-router-dom';

const MyOrders = () => {
    // const { booking } = useLoaderData();
    // console.log(booking);
    const [bookings, getBookings] = useState([]);

    const url = 'http://localhost:8000/';

    useEffect(() => {
        getAllBookings();
    }, [])

    const getAllBookings = () => {
        axios.get(`${url}productBooking`)
            .then((response) => {
                const allBookings = response.data;
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





