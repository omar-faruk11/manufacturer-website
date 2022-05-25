import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';
import Modal from '../../Components/Modal';

const ProductRow = ({ product, refetch }) => {
    const [confirma, setConfirma] = useState(false);
    const {_id, name, picture, available, price } = product;
    const handleProuductDelete = () =>{
        console.log(confirma);
        const confirmaa =window.confirm('Are you suse?')
        if(confirmaa){
            (async () => {
                try {
                    const { data } = await axiosPrivate.delete(`http://localhost:5000/parts/${_id}`);
                    console.log(data);
                    if (data.acknowledged === true) {
                        refetch();
                        setConfirma(false)
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
                    if (error.status === 403) {
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
    }
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {name}
            </th>
            <td class="px-6 py-4">
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={picture} alt={name}/>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4">
               {available}
            </td>
            <td class="px-6 py-4">
               {price}
            </td>
            <td class="px-6 py-4 text-right">
            <label  onClick={handleProuductDelete} className='btn btn-error btn-sm rounded-md text-base-100'>Delete</label>
            </td>
            {/* for="confirma" */}
            <Modal setConfirma={setConfirma}/>
        </tr>
    );
};

export default ProductRow;