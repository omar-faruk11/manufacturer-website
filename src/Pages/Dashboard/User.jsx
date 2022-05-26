import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';


const User = ({ user, index, refetch }) => {
    const { email, name, role } = user;
    const handleMakeAdmin = (email) => {
        (async () => {
            try {
                const { data } = await axiosPrivate.put(`https://obscure-tor-98631.herokuapp.com/users/admin/${email}`)
                if (data.acknowledged === true) {
                    refetch();
                    toast.success('Successfully made an admin', {
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
                    toast.error('Failed to Make an admin', {
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
        <tr className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {index + 1}
            </th>
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4">
                {email}
            </td>
            <td className="px-6 py-4">
                { role !== 'admin' &&
                    <button onClick={() => handleMakeAdmin(email)} className='btn btn-sm btn-primary rounded-md'>make admin</button>
                }
            </td>
            <td className="px-6 py-4 text-right">
                <button className="btn btn-sm btn-outline btn-primary rounded-md">Remove User</button>
            </td>
        </tr>
    );
};

export default User;