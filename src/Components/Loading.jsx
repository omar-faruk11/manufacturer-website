import React from 'react';
import loading from '../Assets/Images/loading.svg'

const Loading = () => {
    return (
        <div className=' h-screen w-full flex justify-center items-center flxed'>
            <img src={loading} alt="" />
        </div>
    );
};

export default Loading;