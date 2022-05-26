import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';

const ManageAllOrderModal = ({singleOrder, refetch,setSingleOrder}) => {
    const {_id,paid} = singleOrder;
        
    
    return (
        <>
        <input type="checkbox" id="manageAll" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-16">
            <label for="manageAll" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className=' flex justify-center my-4'>
                
            </div>
                <h3 className="font-bold text-lg text-center">Lets change order states!</h3>
                <div className="modal-action justify-center">
                    <div>
                    <label for="manageAll" className="btn btn-sm bg-red-500  mx-2 rounded-sm ">Shiped </label>
                    <label for="manageAll"  className="btn btn-sm btn-outline mx-2 rounded-sm ">Cencel order</label>
                    
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default ManageAllOrderModal;