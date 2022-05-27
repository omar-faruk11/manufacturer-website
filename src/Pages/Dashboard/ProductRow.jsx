import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';
import Modal from '../../Components/Modal';

const ProductRow = ({ product, refetch }) => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const {_id, name, picture, available, price } = product;
    const handleProuductDelete = () =>{
        const confirm = window.confirm('Are you sure?');
        if(confirm){
            (async () => {
                try {
                    const { data } = await axiosPrivate.delete(`https://obscure-tor-98631.herokuapp.com/parts/${_id}`);
                    
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
                            // setDeleteProduct(null);
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
    };
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {name}
            </th>
            <td className="px-6 py-4">
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={picture} alt={name}/>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4">
               {available}
            </td>
            <td className="px-6 py-4">
               {price}
            </td>
            <td className="px-6 py-4 text-right">
            <label onClick={()=>setDeleteProduct(product)} for="confirma" className='btn btn-error btn-sm rounded-md text-base-100'>Delete</label>
            </td>
            {
                deleteProduct&&<Modal deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch}/>
            }
        </tr>
    );
};

export default ProductRow;