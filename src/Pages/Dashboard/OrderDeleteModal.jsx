import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';


const OrderDeleteModal = ({id, refetch }) => {
        const handleProuductDelete = () =>{
        (async () => {
            try {
                const { data } = await axiosPrivate.delete(`http://localhost:5000/orders/${id}`);
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
    return (
        <>
            <input type="checkbox" id="deleteorder" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box w-16">
                <div className=' flex justify-center my-4'>
                    <FontAwesomeIcon className="w-8 h-8 text-red-500" icon={faTrash}/>
                </div>
                    <h3 class="font-bold text-lg text-center">Are your sure You want to delete Order.</h3>
                    <div class="modal-action justify-center">
                        <div>
                        <label for="deleteorder" class="btn btn-sm btn-outline mx-2 rounded-sm ">Cencel</label>
                        <label for="deleteorder"  onClick={handleProuductDelete} class="btn btn-sm btn-error  mx-2 rounded-sm ">Confirma </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDeleteModal;