import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const CategoryCard = ({ category }) => {
    console.log(category);
    const { cat_img, category_name, _id
    } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full ">
            <figure><img src={cat_img} alt={category_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${_id}`}> <button className="btn btn-primary btn-sm">View</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;