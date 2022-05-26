import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleSingIn from '../../Components/GoogleSingIn';
import Loading from '../../Components/Loading';
import auth from '../../firebase.config';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"; 

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    };
    
    const [token] = useToken(user);
    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true });
           
        };
    },[token,from,navigate]);

    if (loading) {
        return <Loading />
    };
    
    
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-full md:w-1/3 shadow-md rounded-xl p-10">
                <h3 className=' text-3xl font-semibold'>Log In</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" className="input input-bordered w-full" {...register("email", {
                            required: {
                                value: true,
                                message: "Pleace, Enter your Email"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Invalid Email'
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
                                message: "Please, Enter your Password"
                            }
                        })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            <span className="label-text ml-auto text-rose-400 font-semibold"><Link to='/resetPassword'>Forget Password?</Link> </span>
                        </label>
                        <label className="label">
                            {
                                error&&<span className="label-text-alt text-red-500">{error.message}</span>
                            }
                        </label>
                    </div>

                    <input className=' btn w-full' type="submit" value="LogIn" />
                </form>
                <p className='mt-2'>Are you New? <Link className='text-rose-500 font-bold text-base' to="/register"> Register</Link></p>
                <GoogleSingIn />
            </div>

        </div>
    );
};

export default Login;