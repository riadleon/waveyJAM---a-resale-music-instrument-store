import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardCategoryProduct from './CardCategoryProduct';
import ModalCategoryProduct from './ModalCategoryProduct';

const CategoryProduct = () => {
    const [product, setProduct] = useState(null)
    const products = useLoaderData();
    console.log(products);

    return (
        <div className='grid grid-cols-1'>
            <h2 className='text-4xl text-center m-5'>All Products</h2>
            {
                products.map(product => <CardCategoryProduct
                    key={product._id}
                    product={product}
                    setProduct={setProduct}
                ></CardCategoryProduct>)
            }
            {
                product &&
                <ModalCategoryProduct
                    product={product}
                    setProduct={setProduct}

                ></ModalCategoryProduct>
            }

        </div>
    );
};

export default CategoryProduct;