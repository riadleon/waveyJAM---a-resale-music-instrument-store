import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51M6bHZHIyRQBkvVpOWQMJSP8CJXNqEs45WWUdesU10qea1fhtqNT33WJR01secCzLAO2I5PsQltBsBxcGgpvdgAD00XnLOehJh');

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    const { name } = booking;
    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            {/* <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p> */}
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;