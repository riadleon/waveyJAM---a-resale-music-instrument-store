import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyOrders = () => {
    const { booking } = useLoaderData();
    console.log(booking);
    return (
        <div>
            welcome
        </div>
    );
};

export default MyOrders;