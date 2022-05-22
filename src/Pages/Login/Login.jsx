import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import GoogleSingIn from '../../Components/GoogleSingIn';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-full md:w-1/3 shadow-md rounded-xl p-10">
                <h3 className=' text-3xl font-semibold'>Log In</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" class="input input-bordered w-full" {...register("email", {
                            required: {
                                value: true,
                                message: "Email is Required"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                        <label class="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered w-full" {...register("password", {
                            required: {
                                value: true,
                                message: "Password is Required"
                            }
                        })} />
                        <label class="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            <span class="label-text ml-auto text-rose-400 font-semibold">Forget Password?</span>
                        </label>
                        <label class="label">
                            
                        </label>
                    </div>

                    <input className=' btn w-full' type="submit" value="LogIn" />
                </form>
                <p className='mt-2'>Already have an account? <Link className='text-rose-500 font-bold text-base' to="/register"> Register</Link></p>
                <GoogleSingIn />
            </div>

        </div>
    );
};

export default Login;