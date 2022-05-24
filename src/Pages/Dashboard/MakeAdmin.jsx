import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../Api/axiosPrivate';
import Loading from '../../Components/Loading';
import User from './User';

const MakeAdmin = () => {
    const { isLoading, error, data, isFetching ,refetch} = useQuery("users", async () => {
        return await axiosPrivate.get('http://localhost:5000/users')
    });
    if (isLoading) {
        return <Loading />
    };
    return (
        <div>
            <h2 className=' text-3xl font-semibold primary uppercase text-center my-10'>Make Admin</h2>
            <div className='flex justify-center'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full md:w-11/12">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.data.map((user, index) => <User key={user._id} user={user} index={index} refetch={refetch} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;