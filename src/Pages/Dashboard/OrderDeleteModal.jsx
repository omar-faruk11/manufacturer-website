import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';



const OrderDeleteModal = ({deleted, refetch,setdelete }) => {
         const {_id} = deleted;
       
    return (
        <>
            <input type="checkbox" id="deleteorder" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-16">
                <div className=' flex justify-center my-4'>
                    <FontAwesomeIcon className="w-8 h-8 text-red-500" icon={faTrash}/>
                </div>
                    <h3 className="font-bold text-lg text-center">Are your sure You want to delete Order.</h3>
                    <div className="modal-action justify-center">
                        <div>
                        <label for="deleteorder" className="btn btn-sm btn-outline mx-2 rounded-sm ">Cencel</label>
                        <label for="deleteorder" className="btn btn-sm bg-red-500  mx-2 rounded-sm ">Confirma </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDeleteModal;