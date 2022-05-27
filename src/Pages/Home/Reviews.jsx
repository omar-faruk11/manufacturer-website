import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import Review from './Review';

const Reviews = () => {
    // const [reviews , setReviews] = useState([]);
    const { isLoading, error, data, isFetching, refetch } = useQuery('homereview', async () => {
        return await axios.get(`https://obscure-tor-98631.herokuapp.com/reviews`)
    });
    // useEffect(()=>{
    //     (async()=>{
    //         const {data} = await axios.get("https://obscure-tor-98631.herokuapp.com/reviews");
    //         setReviews(data);
    //     })()
    // },[])
    if(isFetching || isLoading){
        return <Loading />
    };

    return (
        <div className=' container mx-auto my-16'>
            <h2 className=' text-3xl text-center text-primary uppercase my-8'>Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
                {
                data?.data?.map(sreview =><Review key={sreview._id} sreview={sreview} />)
                }
            </div>
        </div>
    );
};

export default Reviews;