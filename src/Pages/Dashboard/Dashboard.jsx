import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="dashboard-manu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className=' text-3xl text-primary font-semibold uppercase'>Dashboard</h2>
                    <p>Welcome to your Dashboard.</p>
                    <Outlet/>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-manu" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><NavLink to='myprofile'>My Profile</NavLink></li>
                        <li><NavLink to='/dashboard/myorder'> My Order</NavLink></li>
                        <li><NavLink to='/dashboard/addreview'>Add A review</NavLink></li>
                        <li><NavLink to='/dashboard/manageorders'>Manage All Orders</NavLink></li>
                        <li><NavLink to='/dashboard/manageproducts'>Manage Products</NavLink></li>
                        <li><NavLink to='/dashboard/addproduct'>Add A Product</NavLink></li>
                        <li><NavLink to='/dashboard/makeadmin'>Make A Admin</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


