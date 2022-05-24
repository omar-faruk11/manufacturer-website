import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.config';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user, loading] = useAuthState(auth);
    const onSubmit = async (data) => {
        console.log(data);

    };
    return (
        <div className=" h-screen w-full flex justify-center items-center">
            <div className="w-full md:w-1/2 shadow-md rounded-xl p-10">
                <h2 className=' text-3xl text-center uppercase text-pink-500'>Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={user?.displayName} disabled class="input input-bordered w-full" {...register("name")} />

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" value={user?.email} disabled  class="input input-bordered w-full" {...register("email")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your review</span>
                        </label>
                        <textarea type="text" placeholder='Enter your review' class="textarea textarea-bordered w-full" {...register("review",{
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
                        <input type="file"  class="input input-bordered w-full" {...register("picture", {
                            required: {
                                value: true,
                                message: "Picture is Required"
                            }
                        })} />
                        <label class="label">
                            {errors.picture?.type === 'required' && <span className="label-text-alt text-red-500">{errors.picture.message}</span>}
                        </label>
                    </div>
                    <input className=' btn w-full' type="submit" value="Next" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;