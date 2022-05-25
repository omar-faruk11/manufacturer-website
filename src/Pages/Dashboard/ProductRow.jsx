import React, { useState } from 'react';
import Modal from '../../Components/Modal';

const ProductRow = ({ product, refetch }) => {

    const {_id, name, picture, available, price } = product;
    
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
            <label  for="confirma" className='btn btn-error btn-sm rounded-md text-base-100'>Delete</label>
            </td>
           
            <Modal id={_id} refetch={refetch}/>
        </tr>
    );
};

export default ProductRow;