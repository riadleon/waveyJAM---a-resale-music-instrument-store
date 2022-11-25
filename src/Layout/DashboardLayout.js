import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyers from '../hooks/useBuyers';
import Header from '../Pages/Shared/Header/Header';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyers(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {

                            isBuyer && <>
                                <li><Link to="/dashboard">My Orders</Link></li>
                            </>

                        }
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allSellers">All Seller</Link></li>
                                <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                            </>
                        }
                        <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                        <li><Link to="/dashboard/myProduct">My Product</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;