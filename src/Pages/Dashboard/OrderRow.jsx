import React from 'react';
import OrderDeleteModal from './OrderDeleteModal'

const OrderRow = ({ order ,refetch}) => {
    const { _id,name, picture, quantity, totalPrice } = order;
    return (
        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={picture} alt={name} />
                    </div>
                </div>
            </th>
            <td class="px-6 py-4">
            {name}
            </td>
            <td class="px-6 py-4">
                {quantity}
            </td>
            <td class="px-6 py-4">
                {totalPrice}
            </td>
            <td class="px-6 py-4">
                <button className='btn btn-primary btn-sm'>pay</button>
            </td>
            <td class="px-6 py-4 text-right">
                <label for="deleteorder" className='btn btn-error btn-sm rounded-md text-base-100'>Delete</label>
            </td>
            <OrderDeleteModal id={_id} refetch={refetch}/>
        </tr>
    );
};

export default OrderRow;




