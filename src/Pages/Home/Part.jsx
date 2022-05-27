import React from 'react';
import {useNavigate} from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate();
    const {_id, name, picture, description, min_order, available, price } = part;
   
    return (
        <div>
            <div className="card card-compact h-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-500'>{description.slice(0,100)}</p>
                    <p className=' text-base capitalize '>minimum orders: {min_order}</p>
                    <p className=' text-base capitalize '>available: {available}</p>
                    <p className=' text-base capitalize '> price: {price} (per item)</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=> navigate(`/purchase/${_id}`)} disabled={parseInt(available < min_order)} className="btn w-full">{parseInt(available < min_order)? 'Stock Out':'book now'} </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;