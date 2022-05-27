import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import Part from './Part';

const Parts = () => {
    // const [parts , setParts] = useState([]);
    const { isLoading, error, data, isFetching, refetch } = useQuery('homeparts', async () => {
        return await axios.get(`https://obscure-tor-98631.herokuapp.com/parts`)
    });
    // useEffect(()=>{
    //     (async()=>{
    //         const {data} = await axios.get('https://obscure-tor-98631.herokuapp.com/parts');
    //         setParts(data);
    //         (data);
    //     })()
    // },[])
    if(isFetching || isLoading){
        return <Loading />
    }
    
    
    return (
        <section className=' container mx-auto my-16'>
            <h2 className=' text-center text-3xl font-semibold mb-8 text-primary uppercase'>Parts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
            {
                data?.data?.slice(0,6).map(part =><Part key={part._id} part={part}/>)
            }
            </div>
        </section>
    );
};

export default Parts;


/* 
minimumorderquantity
*/