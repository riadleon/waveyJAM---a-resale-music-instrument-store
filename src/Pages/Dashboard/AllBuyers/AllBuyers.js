import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CardAllBuyers from './CardAllBuyers';

const AllBuyers = () => {
    // const buyers = useLoaderData();
    // console.log(buyers);
    const { data: buyers, isLoading } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/users?role=buyer');
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
            <h2 className='text-4xl text-center'>All Buyers </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Buyer Name</th>

                            <th>Buyer email</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map(buyer => <CardAllBuyers
                                key={buyer._id}
                                buyer={buyer}
                            ></CardAllBuyers>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllBuyers;