import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center mt-10'>
            <div className="w-full md:w-2/5 p-8 shadow-md rounded-md">
                <div className="flex justify-center">
                    <img className='w-16 rounded-full' src="https://react-firebase-assignmen-6de9d.web.app/static/media/omar.7efc6cc95ff79aadcebc.jpg" alt="" />
                </div>
                <div className='my-2'>
                    <h2>Name:</h2>
                    <p className='bg-gray-50 p-2 text-xl '>Omar faruk</p>
                </div>
                <div className='my-2'>
                    <h2>Email:</h2>
                    <p className='bg-gray-50 p-2 text-xl '>omarabdullah1811@gmail.com</p>
                </div>
                <div className='my-2'>
                    <h2>Educational background:</h2>
                    <p className='bg-gray-50 p-2 text-xl '>Student of debidwar Sujat Ali Govt.College,Debidwar,Cumillah</p>
                </div>
                <div className='my-2'>
                    <h2>skills I have as a web developer:</h2>
                    <p className='bg-gray-50 p-2 text-xl '>HTML, CSS BOOTSTRAP, TAILWIND, JS, REACT , REACTBOOTSTRAP, REACT QUEARY, REACT HOOKS FORM etc</p>
                </div>
                <div className='my-2'>
                    <h2>My three project link:</h2>
                    <div className='bg-gray-50 p-2 text-xl '>
                        <p>1. <a className='text-primary' href="https://assignment-11-a4057.web.app/" target="_blank" rel="noopener noreferrer">https://assignment-11-a4057.web.app/</a> </p>
                        <p>2. <a className='text-primary' href="https://react-firebase-assignmen-6de9d.web.app/" target="_blank" rel="noopener noreferrer">https://react-firebase-assignmen-6de9d.web.app/</a> </p>
                        <p>3. <a className='text-primary' href="https://laptopcorner.netlify.app/" target="_blank" rel="noopener noreferrer">https://laptopcorner.netlify.app/</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;