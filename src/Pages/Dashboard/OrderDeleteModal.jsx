import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';



const OrderDeleteModal = ({ deleted, refetch, setdelete }) => {
    const { _id ,name} = deleted;
    const handleProuductDelete = () => {
            (async () => {
                try {
                    const { data } = await axiosPrivate.delete(`https://obscure-tor-98631.herokuapp.com/orders/${_id}`);

                    if (data.acknowledged === true) {
                        setdelete(null)
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
                    if (error.status === 403) {
                        setdelete(null)
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
    };

    return (
        <>
            <input type="checkbox" id="deleteorder" className="modal-toggle" />
            <div className="modal bg-transparent modal-bottom sm:modal-middle">
                <div className="modal-box w-16">
                    <div className=' flex justify-center my-4'>
                        <FontAwesomeIcon className="w-8 h-8 text-red-500" icon={faTrash} />
                    </div>
                    <h3 className="font-bold text-lg text-center">Are your sure.You want to delete Order.</h3>
                    <p className='text-center'>{name}</p>
                    <div className="modal-action justify-center">
                        <div>
                            <label onClick={() => setdelete(null)} className="btn btn-sm btn-outline mx-2 rounded-sm ">Cencel</label>
                            <label onClick={handleProuductDelete} className="btn btn-sm bg-red-500  mx-2 rounded-sm ">Confirma </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDeleteModal;