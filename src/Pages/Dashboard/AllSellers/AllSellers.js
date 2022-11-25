import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CardAllSellers from './CardAllSellers';

const AllSellers = () => {
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
                            ></CardAllSellers>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllSellers;