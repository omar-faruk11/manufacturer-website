import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin ] = useState('');

    useEffect(() => {
        const email = user?.email;
        (async()=>{
            const {data} = await axios.get(`http://localhost:5000/admin/${email}`)
            setAdmin(data);
        })()
      
    },[user])

    return [admin];
};

export default useAdmin;