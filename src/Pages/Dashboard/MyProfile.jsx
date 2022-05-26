import React from 'react';

const MyProfile = () => {
    return (
        <div className=' w-full flex justify-center'>
            <div className=" w-full md:w-1/2 p-6 ">
                <div className="flex justify-between">
                    <h3 className=' text-3xl uppercase'>My Profile</h3>
                    <button className='btn btn-sm rounded-md btn-primary text-white'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;