import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    

    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = { email, name };
        (async () => {
            const { data } = await axios.put(`http://localhost:5000/users/${email}`,(currentUser));
            if (data) {
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            }
        })();
    }, [user])

    return[token]
};


export default useToken;