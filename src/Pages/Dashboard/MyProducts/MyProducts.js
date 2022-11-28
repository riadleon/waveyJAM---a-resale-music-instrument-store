import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableMyProducts from './TableMyProducts';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const products = useLoaderData();
    // console.log(products);
    // const [refresh, setRefresh] = useState(false);

    // const advertise = {
    //     products
    // }
    // console.log(advertise);



    // const handleAddAdvertise = () => {
    //     fetch('https://wavey-jam-a12-server.vercel.app/advertise', {
    //         method: "POST",
    //         // headers: {
    //         //     authorization: `Bearer ${localStorage.getItem(' secureWeb-token')}`
    //         // }
    //         body: JSON.stringify(advertise)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data) {
    //                 toast.success("added to advertise list");
    //                 setRefresh(!refresh);
    //             } else {
    //                 toast.error("Failed to add in advertise list");
    //             }
    //         }).catch(err => toast.error(err.message))
    // }
    return (
        <div>
            <h2 className='text-4xl text-center'>My Products </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Seller email</th>
                            <th>Status</th>
                            <th> Resale Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(product => <TableMyProducts
                                key={product._id}
                                product={product}
                            // handleAddAdvertise={handleAddAdvertise}
                            ></TableMyProducts>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyProducts;