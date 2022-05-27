import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from "react-query";
import axios from 'axios';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';


const Purchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [totalPrice, setTotalPrice] = useState(' ')
    const { register, handleSubmit, watch, control, getValues, setValue,reset, formState: { errors } } = useForm({ mode: 'onChange' });

    const { isLoading, error, data, isFetching } = useQuery(["repoData", id], async () => {
        return await axios.get(`https://obscure-tor-98631.herokuapp.com/parts/${id}`)
    });
    
    useEffect(() => {
        if (data) {
            setValue('quantity', min_order, { shouldDirty: true });
        };
    }, [data, setValue]);
    const productQuantity = getValues("quantity");
    const productPrice = data?.data?.price;
    const defaultQuantity = data?.data?.min_order;
    useEffect(()=>{
        
        if (productQuantity) {
            setTotalPrice(parseInt(productQuantity * productPrice))
        }else{
            setTotalPrice(parseInt(defaultQuantity * productPrice))
        }
    },[productQuantity,productPrice,defaultQuantity]);

    if (isLoading ||loading) {
        return <Loading />
    };


    const { _id, name, picture, description, min_order, available, price } = data?.data;


   


    const onSubmit = async (data) => {
        const order = {
            userName: user.displayName,
            email: user.email,
            productId: _id,
            name,
            picture,
            quantity: data.quantity,
            totalPrice : data.quantity * price

        };
        (async () => {
            const { data } = await axios.post('https://obscure-tor-98631.herokuapp.com/orders', (order))
                if (data) {
                    toast.success('Order Send', {
                        position: "top-right",
                        autoClose: 500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    reset();
                    
                };
        })();

    };

    return (
        <div className='md:mx-44 my-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                <div className="">
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={picture} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
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
                            <input type="text" value={errors?.quantity? 0 : totalPrice } readOnly className="input input-bordered w-full" {...register("totalPrice")} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text"  placeholder="Quantity" className="input input-bordered w-full" {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quantity is required"
                                },
                                pattern: {
                                    value: /[0-9]/,
                                    message:'must be number'
                                } ,
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
                            <input type="text"  className="input input-bordered w-full" {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address is required"
                                }})} />
                                <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text"   className="input input-bordered w-full mb-5" {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Phone Number is required"
                                }})} />
                                <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>
                        <input className=' btn w-full btn-primary text-white font-xl' disabled={errors.quantity} type="submit" value="purchase order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;





