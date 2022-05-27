import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';
import Modal from '../../Components/Modal';
import ManageAllOrderModal from './ManageAllOrderModal';

const ManageAllOrderRow = ({ userOrder, refetch }) => {
    const [openModalFor, setOpenModal] = useState(null)
    const { _id, name, picture, quantity, totalPrice, paid, shipped } = userOrder;
    
    
    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={picture} alt={name} />
                    </div>
                </div>
            </th>
            <td>{name?.slice(0, 20)}</td>
            <td> {quantity}</td>
            <td>{totalPrice}</td>
            <td>{
              shipped? <p>Shipped</p>:( paid?<p>Pending</p>:<p>unpaid</p>)
            }
            </td>
            
            <td>
            {
                (!shipped&& paid) && <label for="manageAll" onClick={()=>setOpenModal(userOrder)} className='btn btn-primary btn-sm rounded-md text-base-100'>Manage Order</label>
            }
            {
                (!paid) && <label for="manageAll" onClick={()=>setOpenModal(userOrder)} className='btn btn-error btn-sm rounded-md text-base-100'>Delete</label>
            }
            </td>
            {openModalFor&&<ManageAllOrderModal openModalFor={openModalFor} setOpenModal={setOpenModal} refetch={refetch}/>}
        </tr>
    );
};

export default ManageAllOrderRow;