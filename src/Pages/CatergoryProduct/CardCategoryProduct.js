import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { CheckmarkIcon } from 'react-hot-toast';

const CardCategoryProduct = ({ product, setProduct }) => {
    const { image, location, name, number, originalPrice, resalePrice, sname, time, uses, _id } = product;


    return (
        <div className="card lg:card-side bg-neutral m-5">
            <figure><img className='w-4/4 h-96' src={image} alt="Product" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <p>Location: {location}</p>
                <p>Original Price: ${originalPrice}</p>
                <p>Resale Price: ${resalePrice}</p>
                <p>Seller Name: {sname} <span><CheckmarkIcon></CheckmarkIcon></span>
                </p>

                <p>Phone Number: {number}</p>
                <p>Years Of Uses: {uses}Years</p>
                <p>Posted Time: {time}</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setProduct(product)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default CardCategoryProduct;

