import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.config';

const Navication = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut =() =>{
        signOut(auth);
         localStorage.removeItem('accessToken')
    }
    
    return (
        <div class="navbar bg-base-100 sticky top-0 left-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/' className='mx-2'>Home</NavLink></li>
                        <li><NavLink to='/dashboard' className='mx-2'>Dashboard</NavLink></li>
                        <li><NavLink to='/blogs' className='mx-2'>Blogs</NavLink></li>
                        <li><NavLink to='/myportfolio'>My Portfolio</NavLink></li>
                        <li><NavLink to='/login' className='mx-2'>Log In</NavLink></li>
                        {/* <li><NavLink to='/register' className='mx-2'>Register</NavLink></li> */}
                        <li> <button className="btn btn-ghost">Sign Out</button></li>
                        <li><button>User Name</button> </li>
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl"> </Link>
            </div>
            <div class="navbar-center hidden lg:flex navbar-end ">
                <ul class="menu menu-horizontal p-0 ">
                    <li><NavLink to='/' className='mx-1'>Home</NavLink></li>
                    <li><NavLink to='/dashboard' className='mx-1'>Dashboard</NavLink></li>
                    <li><NavLink to='/blogs' className='mx-1'>Blogs</NavLink></li>
                    <li><NavLink to='/myportfolio'>My Portfolio</NavLink></li>
                    {
                        !user ? <>
                            <li><NavLink to='/login' className='mx-1'>Log In</NavLink></li>
                        </> : <>
                            <li><div className='text-rose-500'>{user.displayName}</div> </li>
                            <li> <button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button></li>
                        </>
                    }
                    {/* <li><NavLink to='/register' className='mx-1'>Register</NavLink></li> */}

                </ul>
            </div>
        </div>
    );
};

export default Navication;