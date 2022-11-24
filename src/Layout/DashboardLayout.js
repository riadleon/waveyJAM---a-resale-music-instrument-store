import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Header from '../Pages/Shared/Header/Header';
import Particle from '../Pages/Shared/Particle/Particle';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)
    return (

        <div >

            <Header></Header>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                        {/* {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        } */}
                        <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                        <li><Link to="/dashboard/myProduct">My Product</Link></li>
                        <li><Link to="/dashboard/allSeller">All Seller</Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;