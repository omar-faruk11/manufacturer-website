import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import axiosPrivate from '../../Api/axiosPrivate';
import Loading from '../../Components/Loading';
import auth from '../../firebase.config';
import ManageAllOrderModal from './ManageAllOrderModal';
import ManageAllOrderRow from './ManageAllOrderRow';

const ManageAllOrders = () => {
    // const [singleOrder, setSingleOrder] = useState(null)
    const { isLoading, error, data, isFetching, refetch } = useQuery('allorders', async () => {
        return await axiosPrivate.get(`https://obscure-tor-98631.herokuapp.com/orders`)
    });

    if (isLoading) {
        return <Loading />
    };
    if (error?.response?.status === (401 || 403)) {
        signOut(auth);
        localStorage.removeItem('accessToken');
        Navigate('/');
    };
    const allUser = data?.data;
    return (
        <div>
            <h2 className="text-2xl text-primary uppercase text-center mt-10 pb-8">All orders</h2>
            <p className='text-center mb-4'>orders: {data?.data?.length}</p>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>picture</th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>price</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUser.map(userOrder => <ManageAllOrderRow key={userOrder._id} refetch={refetch} userOrder={userOrder} />)

                        }

                    </tbody>
                </table>
            </div>
            {/* {singleOrder&&<ManageAllOrderModal singleOrder={singleOrder} setSingleOrder={setSingleOrder} refetch={refetch} />} */}
        </div>
    );
};

export default ManageAllOrders;


