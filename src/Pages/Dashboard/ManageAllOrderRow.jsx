import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';

const ManageAllOrderRow = ({userOrder,refetch}) => {
    const {_id, name, picture, quantity, totalPrice,paid,shipped} = userOrder;
    const handleDeleteOrder = () =>{
        (async () => {
            try {
                const { data } = await axiosPrivate.delete(`https://obscure-tor-98631.herokuapp.com/orders/${_id}`);
                console.log(data);
                if (data.acknowledged === true) {
                    refetch();
                    toast.success('order Cencel', {
                        position: "top-right",
                        autoClose: 500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        // setSingleOrder(null);
                }
            } catch (error) {
                if (error.status === 403 ) {
                    toast.error('Failed to Cencel', {
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
    };
    const handleShipedOrder = () =>{
        (async () => {
            try {
                const {data} = await axiosPrivate.patch(`https://obscure-tor-98631.herokuapp.com/orders/shipped/${_id}`);
                console.log(data);
                if (data.acknowledged === true) {
                    refetch();
                    toast.success('changed status', {
                        position: "top-right",
                        autoClose: 500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            } catch (error) {
                if (error.status === 403 ) {
                    toast.error('Failed to change status', {
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
    return (
        <tr>
        <th>
            <div className="avatar">
                <div className="w-8 rounded">
                    <img src={picture} alt={name} />
                </div>
            </div>
        </th>
        <td>{name}</td>
        <td> {quantity}</td>
        <td>{totalPrice}</td>
        <td>{
            (!shipped && paid) && <p>pending</p>
            }
            {
                !paid && <p>unpaid</p>
            }
            {
                shipped && <p>Shiped</p>
            }
            </td>
        <td>   
             {!shipped&&<label onclick={handleShipedOrder} for="manageAll" className='btn btn-error btn-sm rounded-md text-base-100'>shipped</label>}
        </td>
        <td>   
             <label onclick={handleDeleteOrder} for="manageAll" className='btn btn-error btn-sm rounded-md text-base-100'>Cencel order</label>
        </td>
    </tr>
    );
};

export default ManageAllOrderRow;