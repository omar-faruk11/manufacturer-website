import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/axiosPrivate';
import Loading from '../../Components/Loading';
import auth from '../../firebase.config';

const ProfileText = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { isLoading, error, data, isFetching, refetch } = useQuery("suser", async () => {
        return await axiosPrivate.get(`https://obscure-tor-98631.herokuapp.com/user?email=${user.email}`)
    });
    if (isFetching || isLoading) {
        return <Loading />
    };
    // console.log(error.response.status === (403 || 401));
    if (error) {
        if (error.response.status === (403 || 401)) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/login');
        }

    }
    return (
        <div>
            <div className='my-2'>
                <h2>Full name</h2>
                <p className=' bg-gray-50 p-2 text-xl '>{data?.data?.name}</p>
            </div>
            <div className='my-2'>
                <h2>Email Address</h2>
                <p className=' bg-gray-50 p-2 text-xl '>{data?.data?.email}</p>
            </div>
            <div className='my-2'>
                <h2>Education</h2>
                <p className='bg-gray-50 p-2 text-xl '>{(data?.data?.education) ? data?.data?.education : 'No Data '}</p>
            </div>
            <div className='my-2'>
                <h2>Location (city/district)</h2>
                <p className='bg-gray-50 p-2 text-xl '>{(data?.data?.location) ? data?.data?.location : ' No Data'}</p>
            </div>
            <div className='my-2'>
                <h2>Phone number</h2>
                <p className=' bg-gray-50 p-2 text-xl '>{(data?.data?.phone) ? data?.data?.phone : 'No Data'}</p>
            </div>
            <div className='my-2'>
                <h2>LinkedIn profile link:</h2>
                <p className='bg-gray-50 p-2 text-xl '>{(data?.data?.linkedin) ? <a href={data.data.linkedin} className='text-green-500 underline' rel="noreferrer" target="_blank">{data.data.linkedin}</a> : 'No Data'}</p>
            </div>
        </div>
    );
};

export default ProfileText;