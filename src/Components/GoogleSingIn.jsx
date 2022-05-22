import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.config';
import Loading from './Loading';

const GoogleSingIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(loading){
        return <Loading/>
    };
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