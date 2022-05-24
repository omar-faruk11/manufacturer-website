import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import axiosPrivate from '../../Api/axiosPrivate';
import auth from '../../firebase.config';
import useAdmin from '../../Hooks/useAdmin';

const AddReview = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [user, loading] = useAuthState(auth);
    const imgStoageKey = 'ec4d0c0ce230e885ea68445e705213d3';
    
    const onSubmit = async (reviewdata) => {
        const image = reviewdata.picture[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStoageKey}`;

        (async () => {
            try {
                const { data } = await axios.post(url, (formData));
                if (data.success) {

                    const picture = data.data.url;
                    const review = {
                        name: reviewdata.name,
                        email: reviewdata.email,
                        review: reviewdata.review,
                        star: reviewdata.star,
                        picture: picture
                    };
                    (async () => {
                        const { data } = await axiosPrivate.post('http://localhost:5000/reviews',(review))
                        if (data) {
                            reset()
                        }
                    })();

                };
            }
            catch (error) {
                console.log(error);
            };
        })();




    };
    return (
        <div className=" w-full flex justify-center items-center">
            <div className="w-full md:w-1/2 shadow-md rounded-xl p-10">
                <h2 className=' text-3xl text-center uppercase text-pink-500'>Add a Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={user?.displayName} class="input input-bordered w-full" {...register("name")} />

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" value={user?.email} class="input input-bordered w-full" {...register("email")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your review</span>
                        </label>
                        <textarea type="text" placeholder='Enter your review' class="textarea textarea-bordered w-full" {...register("review", {
                            required: {
                                value: true,
                                message: "Review is Required"
                            }
                        })} />
                        <label class="label">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Star</span>
                        </label>
                        <input type="number" min={1} max={5} placeholder="Star" class="input input-bordered w-full" {...register("star", {
                            required: {
                                value: true,
                                message: "Star is Required"
                            }
                        })} />
                        <label class="label">
                            {errors.star?.type === 'required' && <span className="label-text-alt text-red-500">{errors.star.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Picture</span>
                        </label>
                        <input type="file" class="input input-bordered w-full" {...register("picture", {
                            required: {
                                value: true,
                                message: "Picture is Required"
                            }
                        })} />
                        <label class="label">
                            {errors.picture?.type === 'required' && <span className="label-text-alt text-red-500">{errors.picture.message}</span>}
                        </label>
                    </div>
                    <input className=' btn w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;