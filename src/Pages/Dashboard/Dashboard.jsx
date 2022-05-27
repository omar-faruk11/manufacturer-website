import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.config';
import useAdmin from '../../Hooks/useAdmin'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="dashboard-manu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className=' text-3xl text-primary font-semibold uppercase pl-2'>Dashboard</h2>
                    <p className='pl-2'>Welcome to your Dashboard.</p>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-manu" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><NavLink to='/dashboard/myprofile'>My Profile</NavLink></li>
                        {
                            !admin && <>
                                <li><NavLink to='/dashboard/myorder'> My Order</NavLink></li>
                                <li><NavLink to='/dashboard/addreview'>Add A review</NavLink></li>
                            </>
                        }

                        {
                            admin && <>
                                <li><NavLink to='/dashboard/manageorders'>Manage All Orders</NavLink></li>
                                <li><NavLink to='/dashboard/manageproducts'>Manage Products</NavLink></li>
                                <li><NavLink to='/dashboard/addproduct'>Add A Product</NavLink></li>
                                <li><NavLink to='/dashboard/makeadmin'>Make A Admin</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


