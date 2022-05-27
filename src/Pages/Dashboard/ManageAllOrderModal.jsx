import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageAllOrderModal = ({ openModalFor, setOpenModal, refetch }) => {

    const { _id, paid, name, quantity, shipped } = openModalFor;
    const handleDeleteOrder = () => {
        (async () => {
            try {
                const { data } = await axiosPrivate.delete(`https://obscure-tor-98631.herokuapp.com/orders/${_id}`);

                if (data.acknowledged === true) {
                    setOpenModal(null);
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
                if (error.status === 403) {
                    setOpenModal(null);
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

    const handleShipedOrder = () => {
        console.log('working');
        (async () => {
            try {
                const { data } = await axiosPrivate.patch(`https://obscure-tor-98631.herokuapp.com/orders/shipped/${_id}`);

                if (data.acknowledged === true) {
                    setOpenModal(null);
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
                if (error.status === 403) {
                    setOpenModal(null)
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
        <>

            <input type="checkbox" id="manageAll" className="modal-toggle" />
            <div className="modal bg-inherit  modal-bottom sm:modal-middle">
                <div className="modal-box w-16">
                    <label onClick={() => setOpenModal(null)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=' flex justify-center my-4'>
                    </div>

                    {(!shipped && paid) && <h3 className="font-bold text-lg text-center">Lets change order states!</h3>}
                    {!paid && <>

                        <div className="flex justify-center">
                        <FontAwesomeIcon className="w-8 h-8 text-red-500 text-center" icon={faTrash} />
                            </div>    
                        <h3 className="font-bold text-lg text-center">Are you sure? Do you want to cencel order.</h3>
                    </>}
                    <div className="modal-action justify-center">
                        <div>
                            {(!shipped && paid) && <div onClick={handleShipedOrder} className="btn btn-sm btn-primary mx-2 rounded-sm ">Shiped </div>}

                            {!paid && <div onClick={handleDeleteOrder} className="btn btn-sm btn-outline mx-2 rounded-sm ">Cencel order</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageAllOrderModal;