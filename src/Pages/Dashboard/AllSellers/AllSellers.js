import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';
import CardAllSellers from './CardAllSellers';

const AllSellers = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const { data: sellers, isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/users?role=seller');
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    // const handleStatusUpdate = id => {
    //     fetch(`https://genius-car-server-neon.vercel.app/orders/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json',
    //             // authorization: `Bearer ${localStorage.getItem('genius-token')}`
    //         },
    //         body: JSON.stringify({ status: 'Verified' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 const remaining = sellers.filter(odr => odr._id !== id);
    //                 const approving = sellers.find(odr => odr._id === id);
    //                 approving.status = 'Verified'

    //                 const newOrders = [approving, ...remaining];
    //                 setOrders(newOrders);
    //             }
    //         })
    // }



    return (
        <div>
            <h2 className='text-4xl text-center'>All Sellers </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Seller Name</th>

                            <th>Seller email</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map(seller => <CardAllSellers
                                key={seller._id}
                                seller={seller}
                                isAdmin={isAdmin}
                            // handleStatusUpdate={handleStatusUpdate}
                            ></CardAllSellers>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllSellers;