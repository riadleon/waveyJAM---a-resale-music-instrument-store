import React from 'react';

const CardCategoryProduct = ({ product }) => {
    const { image, location, name, number, originalPrice, resalePrice, sellerName, time, uses, _id } = product;
    
    return (
        <div className="card lg:card-side bg-neutral ">
            <figure><img className='w-96 h-96' src={image} alt="Product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{location}</p>
                <p>{originalPrice}</p>
                <p>{resalePrice}</p>
                <p>{sellerName}</p>
                <p>{number}</p>
                <p>{uses}</p>
                <p>{time}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default CardCategoryProduct;

