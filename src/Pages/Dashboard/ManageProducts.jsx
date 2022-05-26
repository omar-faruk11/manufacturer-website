import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import ProductRow from './ProductRow';
import Modal from '../../Components/Modal';


const ManageProducts = () => {
    // const [deleteProduct, setDeleteProduct] = useState(null);
    const { isLoading, error, data, isFetching ,refetch} = useQuery("Proudctokparts", async () => {
        return await axios.get('https://obscure-tor-98631.herokuapp.com/parts')
    });
    if (isLoading) {
        return <Loading />
    };
    return (
        <div>
            <h2 className="text-2xl text-primary uppercase text-center mt-10 pb-8">Manage Products</h2>
            <p className='text-center mb-4'>Products: {data?.data?.length}</p>
            <div className="flex justify-center">
                <div className="w-full md:w-11/12">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                      Part Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                       Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        available
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only"></span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.data.map(product => <ProductRow key={product._id} product={product} refetch={refetch}/>)
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* {
                        deleteProduct&&<Modal deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch}/>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;