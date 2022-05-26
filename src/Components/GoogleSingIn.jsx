import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.config';
import useToken from '../Hooks/useToken';

const GoogleSingIn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    
    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true });
            
        };
    },[token,from,navigate]);
    return (
        <div>
            <div className="divider">OR</div>
            <div onClick={()=> signInWithGoogle()} className="btn btn-outline w-full">
                Continue with Google
            </div>
        </div>
    );
};

export default GoogleSingIn;