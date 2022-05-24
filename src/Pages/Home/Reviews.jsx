import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews , setReviews] = useState([]);
    useEffect(()=>{
        (async()=>{
            const {data} = await axios.get("http://localhost:5000/reviews");
            setReviews(data);
        })()
    },[])
    return (
        <div className=' container mx-auto my-16'>
            <h2 className=' text-3xl text-center text-rose-500 uppercase my-8'>Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
                {
                reviews.map(sreview =><Review sreview={sreview} />)
                }
            </div>
        </div>
    );
};

export default Reviews;