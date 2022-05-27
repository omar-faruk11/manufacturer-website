import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Navigate, useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/axiosPrivate';
import Loading from '../../Components/Loading';
import auth from '../../firebase.config';
import ManageAllOrderModal from './ManageAllOrderModal';
import ManageAllOrderRow from './ManageAllOrderRow';

const ManageAllOrders = () => {
    const navigate = useNavigate();
    // const [singleOrder, setSingleOrder] = useState(null)
    const { isLoading, error, data, isFetching, refetch } = useQuery('ManageAllOrders', async () => {
        return await axiosPrivate.get(`https://obscure-tor-98631.herokuapp.com/orders`)
    });

    if (isFetching || isLoading) {
        return <Loading />
    };
    if (error) {
        if (error.response.status === (403 || 401)) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/login');
        }

    };
    const allUser = data?.data;
    return (
        <div>
            <h2 className="text-2xl text-primary uppercase text-center mt-10 pb-8">All orders</h2>
            <p className='text-center mb-4'>orders: {data?.data?.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>picture</th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUser?.map(userOrder => <ManageAllOrderRow key={userOrder._id} refetch={refetch} userOrder={userOrder} />)

                        }

                    </tbody>
                </table>
            </div>
            {/* {singleOrder&&<ManageAllOrderModal singleOrder={singleOrder} setSingleOrder={setSingleOrder} refetch={refetch} />} */}
        </div>
    );
};

export default ManageAllOrders;


