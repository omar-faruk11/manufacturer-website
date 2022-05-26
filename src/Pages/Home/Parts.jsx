import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts , setParts] = useState([]);
    useEffect(()=>{
        (async()=>{
            const {data} = await axios.get('http://localhost:5000/parts');
            setParts(data);
            console.log(data);
        })()
    },[])
    
    return (
        <section className=' container mx-auto my-16'>
            <h2 className=' text-center text-3xl font-semibold mb-8 text-primary uppercase'>Parts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
            {
                parts.slice(0,6).map(part =><Part key={part._id} part={part}/>)
            }
            </div>
        </section>
    );
};

export default Parts;


/* 
minimumorderquantity
*/