import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-manu" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <Outlet/>
                </div>
                <div class="drawer-side ">
                    <label for="dashboard-manu" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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


