import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';
import Loading from '../../Components/Loading';
import auth from '../../firebase.config';

const UpdateProfile = () => {
    const [user]= useAuthState(auth);
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm();
    const { isLoading, error, data, isFetching,  refetch } = useQuery("suser", async () => {
        return await axiosPrivate.get(`https://obscure-tor-98631.herokuapp.com/user?email=${user.email}`)
    });
    
    useEffect(()=>{
        if(data){
            setValue('education', data?.data?.education )
            setValue('location',data?.data?.location)
            setValue('phone',data?.data?.phone)
            setValue('linkedin',data?.data?.linkedin)
        }
    },[data,setValue])
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
    };
    if (isFetching || isLoading) {
        return <Loading />
    };
    // console.log(error.response.status === (403 || 401));
    
    return (
        <div className='mx-5 md:mx-20'>
            <h2 className='text-2xl uppercase text-center my-4 '>Update your profile</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <label className="label">
                            <span className="label-text">Full Name <span className='text-xs text-gray-300'>Cannot be changed</span> </span>
                            
                        </label>
                        <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full" {...register("name")} />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Email <span className='text-xs text-gray-300'>Cannot be changed</span></span>
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
                            <span className="label-text">Phone number</span>
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