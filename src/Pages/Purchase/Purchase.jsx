import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from "react-query";
import axios from 'axios';
import Loading from '../../Components/Loading';


const Purchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [totalPrice, setTotalPrice] = useState(' ')
    const { register, handleSubmit, watch, control, getValues, setValue, formState: { errors } } = useForm({ mode: 'onChange' });

    const { isLoading, error, data, isFetching } = useQuery(["repoData", id], async () => {
        return await axios.get(`http://localhost:5000/parts/${id}`)
    });
    
    useEffect(() => {
        if (data) {
            setValue('quantity', min_order, { shouldDirty: true });
        };
    }, [data, setValue]);
    const productQuantity = getValues("quantity");
    useEffect(()=>{
        if (productQuantity) {
            console.log('price', price);
            setTotalPrice(productQuantity * price)
        };
    },[productQuantity,data?.data?.price]);

    if (isLoading) {
        return <Loading />
    };


    const { _id, name, picture, description, min_order, available, price } = data?.data;


    console.log(totalPrice);


    const onSubmit = async (data) => {
        const order = {
            userName: user.displayName,
            email: user.email,
            productId: _id,
            name,
            picture,
            quantity: data.quantity,
            totalPrice

        };
        console.log(order);

    };

    return (
        <div className='md:mx-44 my-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                <div className="">
                    <div class="card  bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={picture} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">{name}</h2>
                            <p>{description}</p>
                            <p>Min Order: {min_order}</p>
                            <p>Available: {available}</p>
                            <p>Price :${price}</p>
                        </div>
                    </div>
                </div>
                <div className="shadow-md rounded-xl p-10">
                    <h2 className=' text-3xl font-bold text-center primary uppercase'>purchase order</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user.displayName} readOnly className="input input-bordered w-full" {...register("name")} />

                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" value={user.email} readOnly className="input input-bordered w-full" {...register("email")} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product</span>
                            </label>
                            <input type="text" value={name} readOnly className="input input-bordered w-full" {...register("parts")} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Total Price</span>
                            </label>
                            <input type="text" value={errors?.quantity? 0 :totalPrice} readOnly className="input input-bordered w-full" {...register("totalPrice")} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" className="input input-bordered w-full" {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quantity is required"
                                },
                                min: {
                                    value: min_order,
                                    message: `you can't order less than ${min_order}`
                                },
                                max: {
                                    value: available,
                                    message: `you can't order more than ${available}`
                                }
                            })} />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Street address</span>
                            </label>
                            <input type="text"  readOnly className="input input-bordered w-full" {...register("address")} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text"  readOnly className="input input-bordered w-full mb-5" {...register("phone")} />
                        </div>
                        <input className=' btn w-full btn-primary text-white font-xl' disabled={errors.quantity} type="submit" value="purchase order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;





