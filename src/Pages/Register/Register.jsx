import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleSingIn from '../../Components/GoogleSingIn';
import auth from '../../firebase.config';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import useToken from '../../Hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    let registererror;

    if (loading || updating) {
        return <Loading />
    };


    if (error || updateError) {
        console.log(error.message);
        registererror = <span className="label-text-alt text-red-500">{error.message || updateError.message}</span>
    };

    if (token) {
        navigate(from, { replace: true });
        // navigate('/');
    };

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
    };

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-full md:w-1/3 shadow-md rounded-xl p-10">
                <h3 className=' text-3xl font-semibold'>Register</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full" {...register("name", {
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
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" className="input input-bordered w-full" {...register("email", {
                            required: {
                                value: true,
                                message: "Email is Required"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered w-full" {...register("password", {
                            required: {
                                value: true,
                                message: "Password is Required"
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                        {registererror}
                    </div>
                    <input className=' btn w-full' type="submit" value="register" />
                </form>
                <p className='mt-2'>Already have an account? <Link className='text-rose-500 font-bold text-base' to="/login">  login</Link></p>
                <GoogleSingIn />
            </div>

        </div>
    );
};

export default Register;