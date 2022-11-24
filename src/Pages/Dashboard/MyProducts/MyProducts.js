import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableMyProducts from './TableMyProducts';

const MyProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h2 className='text-4xl text-center'>My Products </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Time Of Uses</th>
                            <th>Location</th>
                            <th> Resale Price</th>
                            <th>Original Price</th>
                            <th>Posted Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(product => <TableMyProducts
                                key={product._id}
                                product={product}
                            ></TableMyProducts>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyProducts;