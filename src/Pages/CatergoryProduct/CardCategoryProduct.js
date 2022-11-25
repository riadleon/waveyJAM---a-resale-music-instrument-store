import React from 'react';

const CardCategoryProduct = ({ product }) => {
    const { image, location, name, number, originalPrice, resalePrice, sellerName, time, uses, _id } = product;
    console.log(product.length);

    return (
        <div className="card lg:card-side bg-neutral m-5">
            <figure><img className='w-4/4 h-96' src={image} alt="Product" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <p>Location: {location}</p>
                <p>Original Price: ${originalPrice}</p>
                <p>Resale Price: ${resalePrice}</p>
                <p>Seller Name: {sellerName}</p>
                <p>Phone Number: {number}</p>
                <p>Years Of Uses: {uses}Years</p>
                <p>Posted Time: {time}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardCategoryProduct;

