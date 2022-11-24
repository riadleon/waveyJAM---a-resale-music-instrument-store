import React from 'react';
import { FaHamburger } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarLayout = () => {
    return (
        <div>
            <div className="flex flex-col h-full p-3 w-60 dark:bg-gray-900 dark:text-gray-100">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2>Dashboard</h2>
                        <button className="p-2">
                            <FaHamburger></FaHamburger>
                        </button>
                    </div>

                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link to='/dashboard/myOrders' className="flex items-center p-2 space-x-3 rounded-md">My Orders</Link>
                                <Link to='/dashboard/addProducts' className="flex items-center p-2 space-x-3 rounded-md">Add Products</Link>
                                <Link to='/dashboard/myProducts' className="flex items-center p-2 space-x-3 rounded-md">My Products</Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SidebarLayout;