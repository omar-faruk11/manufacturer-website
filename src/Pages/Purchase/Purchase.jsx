import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery, useQueryClient } from "react-query";
import axios from 'axios';
import Loading from '../../Components/Loading';


const Purchase = () => {
    const { id } = useParams();

    const [user, loading] = useAuthState(auth);
    console.log(id);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { isLoading, error, data, isFetching } = useQuery(["repoData", id], async () => {
        return await axios.get(`http://localhost:5000/parts/${id}`)
    });

    if (isLoading) {
        return <Loading />
    }
    const { name, available, min_order, price } = data?.data

    const onSubmit = async (data) => {

    }
    return (
        <div className=" h-screen w-full flex justify-center items-center">
            <div className="w-full md:w-1/3 shadow-md rounded-xl p-10">
                <h2 className=' text-3xl font-bold text-center text-pink-500 uppercase'>purchase order</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={user.displayName} disabled class="input input-bordered w-full" {...register("name")} />

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" value={user.email} disabled class="input input-bordered w-full" {...register("email")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Product</span>
                        </label>
                        <input type="text" value={name} disabled class="input input-bordered w-full" {...register("parts")} />
                        
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" min={min_order} max={available} value={min_order} placeholder="Quantity" class="input input-bordered w-full" {...register("quantity", {
                            required: {
                                value: true,
                                message: "Email is Required"
                            }
                        })} />
                        <label class="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                    </div>
                    <input className=' btn w-full' type="submit" value="Next" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;





