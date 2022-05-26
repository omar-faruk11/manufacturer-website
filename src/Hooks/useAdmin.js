import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin ] = useState('');

    useEffect(() => {
        const email = user?.email;
        (async()=>{
            const {data} = await axios.get(`https://obscure-tor-98631.herokuapp.com/admin/${email}`)
            setAdmin(data);
        })()
      
    },[user])

    return [admin];
};

export default useAdmin;