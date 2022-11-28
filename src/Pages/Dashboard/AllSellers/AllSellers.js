import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';
import CardAllSellers from './CardAllSellers';
import { deleteUsers, getAllUsers, verifyStatus } from '../../../api/User'
import Spinner from '../../../Spinner/Spinner';

const AllSellers = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    // const { data: sellers, isLoading } = useQuery({
    //     queryKey: ['seller'],
    //     queryFn: async () => {
    //         const res = await fetch('https://wavey-jam-a12-server.vercel.app/users?role=seller');
    //         const data = await res.json();
    //         console.log(data);
    //         return data;
    //     }
    // })

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
    }, [])


    const handleStatusUpdate = user => {
        verifyStatus(user).then(data => {
            console.log(data);
            getUsers()
        })

    }
    const handleDelete = user => {
        deleteUsers(user);
    }

    const getUsers = () => {
        setLoading(true)
        getAllUsers().then(data => {
            setUsers(data)
            setLoading(false)
        })
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
                            <th>Status</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((user, i) => (
                                <tr key={i}>
                                    <td className='px-5 py-5 border-b   text-sm'>
                                        <p className=' whitespace-no-wrap'>
                                            {user.name}
                                        </p>
                                    </td>

                                    <td className='px-5 py-5 border-b   text-sm'>
                                        <p className=' whitespace-no-wrap'>
                                            {user.email}
                                        </p>
                                    </td>
                                    <td className='px-5 py-5 border-b   text-sm'>
                                        {user?.status === 'requested' && (
                                            <span
                                                onClick={() => handleStatusUpdate(user)}
                                                className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                                            >
                                                <span
                                                    aria-hidden='true'
                                                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                                                ></span>
                                                <span className='relative'>
                                                    {loading ? <Spinner></Spinner> : ' Approve Request'}
                                                </span>
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <button onClick={handleDelete}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllSellers;