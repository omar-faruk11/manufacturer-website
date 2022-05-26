import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';

const OrderRow = ({ order,refetch}) => {
    const navigate = useNavigate();
    const { _id,name, picture, quantity, totalPrice,paid,transactionId} = order;
    const handleProuductDelete = () =>{
        const Confirm = window.confirm('Are you sure?')
        if(Confirm){
            (async () => {
                try {
                    const { data } = await axiosPrivate.delete(`https://obscure-tor-98631.herokuapp.com/orders/${_id}`);
                    console.log(data);
                    if (data.acknowledged === true) {
                        refetch();
                        toast.success('Product deleted', {
                            position: "top-right",
                            autoClose: 500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            });
                            // setdelete(null);
                    }
                } catch (error) {
                    if (error.status === 403 ) {
                        toast.error('Failed to delete', {
                            position: "top-right",
                            autoClose: 500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            });
                    }
                }
            })();
        }
    };
    return (
        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={picture} alt={name} />
                    </div>
                </div>
            </th>
            <td className="px-6 py-4">
            {name}
            </td>
            <td className="px-6 py-4">
                {quantity}
            </td>
            <td className="px-6 py-4">
                {totalPrice}
            </td>
            <td className="px-6 py-4">
                {
                    paid?<>
                    <p>Paid</p>
                    <small>{transactionId}</small>
                    </>: <>
                    <button onClick={()=>navigate(`/dashboard/payment/${_id}`)} className='btn btn-primary btn-sm'>pay</button>
                    </>
                }
            </td>
            <td className="px-6 py-4 text-right">
                {
                    !paid && <label onclick={handleProuductDelete}  className='btn btn-error btn-sm rounded-md text-base-100'>Delete</label>
                }
            </td>
            
        </tr>
    );
};

export default OrderRow;




