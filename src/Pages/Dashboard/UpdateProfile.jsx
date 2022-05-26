import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';
import auth from '../../firebase.config';

const UpdateProfile = () => {
    const [user]= useAuthState(auth);
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (updateUser) => {
        (async () => {
            const { data } = await axiosPrivate.put(`https://obscure-tor-98631.herokuapp.com/users/${user.email}`,(updateUser));
            if(data){
                navigate(-1);
                toast.success('Profile updated', {
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
    return (
        <div className='mx-5 md:mx-20'>
            <h2 className='text-2xl uppercase text-center my-4 '>Update your profile</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full" {...register("name")} />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" value={user?.email} readOnly className="input input-bordered w-full" {...register("email")} />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full" {...register("education")} />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full" {...register("location")} />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Phome number</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full" {...register("phone")} />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">LinkedIn profile link</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" {...register("linkedin")} />
                    </div>
                    <div className="flex justify-between mt-5">
                    <div onClick={()=>navigate(-1)} className='btn btn-outline btn-md btn-primary'>Cencel</div>
                    <input className=' btn btn-md btn-primary' type="submit" value="update your data" />
                    </div>
                </form>
        </div>
    );
};

export default UpdateProfile;