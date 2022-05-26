import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/axiosPrivate';
import Loading from '../../Components/Loading';
import auth from '../../firebase.config';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const { isLoading, error, data, isFetching, refetch } = useQuery(["MyOrders", user], async () => {
        return await axiosPrivate.get(`http://localhost:5000/orders/${user.email}`)
    });

    if (isLoading) {
        return <Loading />
    };
    if (error?.response?.status === (401 || 403)) {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/');
    };
    return (
        <div>
            <h2 className="text-2xl text-primary uppercase text-center mt-10 pb-8">my orders</h2>
            <p className='text-center mb-4'>orders: {data?.data?.length}</p>
            <div className="flex justify-center">
                <div className="w-full md:w-11/12">


                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Picture
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                    Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Total Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                    Payment
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.data.map(order => <OrderRow key={order._id} order={order} refetch={refetch} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;