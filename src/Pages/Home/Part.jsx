import React from 'react';

const Part = ({ part }) => {
    const { name, picture, description, min_order, available, price } = part;
    return (
        <div>
            <div class="card card-compact h-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className='text-gray-500'>{description.slice(0,100)}</p>
                    <p className=' text-base capitalize '>minimum orders: {min_order}</p>
                    <p className=' text-base capitalize '>available: {available}</p>
                    <p className=' text-base capitalize '> price: {price} (per item)</p>
                    <div class="card-actions justify-end">
                        <button class="btn w-full">book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;