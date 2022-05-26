import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div className=' w-full flex justify-center'>
            <div className=" w-full md:w-1/2 p-6 shadow-md rounde-md">
                <div className="flex justify-between bg-gray-50 p-5">
                    <h3 className=' text-3xl uppercase'>My Profile</h3>
                    <NavLink to='updateprofile' className='btn btn-sm rounded-md btn-primary text-white'>Update</NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default MyProfile;