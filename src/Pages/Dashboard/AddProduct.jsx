import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';
import auth from '../../firebase.config';

const AddProduct = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [user, loading] = useAuthState(auth);
    const imgStoageKey = 'ec4d0c0ce230e885ea68445e705213d3';

    const onSubmit = async (productdata) => {
        const image = productdata.picture[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStoageKey}`;

        (async () => {
            try {
                const { data } = await axios.post(url, (formData))
                if (data.success) {

                    const picture = data.data.url;
                    const product = {
                        email: productdata.email,
                        name: productdata.name,
                        description: productdata.description,
                        min_order: productdata.min_order,
                        available: productdata.available,
                        price : productdata.price,
                        picture: picture
                    };
                   
                        (async () => {
                            const { data } = await axiosPrivate.post('https://obscure-tor-98631.herokuapp.com/parts',(product))
                            if (data) {
                                reset();
                                toast.success('Product added', {
                                    position: "top-right",
                                    autoClose: 500,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    });
                            }
                        })();

                }
            }
            catch (error) {
                if (error.response.status === (403 || 401)) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                }
            }
        })();
    }
    return (
        <div className="w-full flex justify-center items-center pb-8 ">
            <div className="w-full md:w-1/2 shadow-md rounded-xl p-10">
                <h2 className=' text-3xl text-center uppercase primary'>Add a Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='hidden'>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" value={user?.email} className="input input-bordered w-full" {...register("email")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder='Product Name' className="input input-bordered w-full" {...register("name", {
                            required: {
                                value: true,
                                message: "Name is Required"
                            }
                        })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" placeholder="description" className="textarea textarea-bordered w-full" {...register("description", {
                            required: {
                                value: true,
                                message: "description is Required"
                            }
                        })} />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" className="input input-bordered w-full" {...register("price", {
                            required: {
                                value: true,
                                message: "price is Required"
                            }
                        })} />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Min_order</span>
                        </label>
                        <input type="number" placeholder="min_order" className="input input-bordered w-full" {...register("min_order", {
                            required: {
                                value: true,
                                message: "min_order is Required"
                            }
                        })} />
                        <label className="label">
                            {errors.min_order?.type === 'required' && <span className="label-text-alt text-red-500">{errors.min_order.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Available</span>
                        </label>
                        <input type="number" placeholder="available" className="input input-bordered w-full" {...register("available", {
                            required: {
                                value: true,
                                message: "description is Required"
                            }
                        })} />
                        <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="file" className="input input-bordered w-full" {...register("picture", {
                            required: {
                                value: true,
                                message: "Picture is Required"
                            }
                        })} />
                        <label className="label">
                            {errors.picture?.type === 'required' && <span className="label-text-alt text-red-500">{errors.picture.message}</span>}
                        </label>
                    </div>
                    <input className=' btn w-full' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;