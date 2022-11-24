import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardCategoryProduct from './CardCategoryProduct';

const CategoryProduct = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            {
                [products].map(product => <CardCategoryProduct
                    key={product._id}
                    product={product}
                ></CardCategoryProduct>)
            }

        </div>
    );
};

export default CategoryProduct;