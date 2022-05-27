import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../Api/axiosPrivate';
import Loading from '../../Components/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51L3Fp1IjxtgD4oeXTqiApOHtHeSKHRXD6BocMvTAYep7X0JMFKcISN3rBhttaCDNvKzFIVpCxXjYXHC5DpKO7cvj00SqtC0smY');

const Payment = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useQuery(["paymentorders", id], async () => {
        return await axiosPrivate.get(`https://obscure-tor-98631.herokuapp.com/order/${id}`)
    });

    if (isLoading) {
        return <Loading />
    };
    
    const { userName, name, totalPrice, quantity } = data?.data
   
    return (
        <div className='w-full flex justify-center md:mt-24'>
            <div className="md:w-4/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="rounded-md shadow-md p-5 w-full">
                        <h2 className='text-xl font-semibold'>Hello, {userName}</h2>
                        <h4 className='text-md '> Please Pay for: {name}</h4>
                        <h5>Your parts Quantity : {quantity}</h5>
                        <p>Please pay:$ {totalPrice} </p>
                    </div>
                    <div className="rounded-md shadow-md p-5 w-full">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={data?.data}/>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;