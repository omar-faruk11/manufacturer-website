import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../Api/axiosPrivate';



const CheckoutForm = ({order}) => {
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const {_id,totalPrice,userName,email} = order;
    
    
    useEffect(()=>{
        (async ()=>{
            const {data} = await axiosPrivate.post('https://obscure-tor-98631.herokuapp.com/create-payment-intent',{totalPrice});
            if(data.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })();
    },[totalPrice]);
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        };
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || ' ');
        setSuccess('');
        const {paymentIntent, error:paymentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: userName,
                  email: email
                },
              },
            },
          );
         
        if (paymentError) {
            setCardError(paymentError?.message);
            
        }else{
            setCardError('');
            setSuccess('Your payment is completed.');
            setTransactionId(paymentIntent.id);
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            };
            (async ()=>{
                const {data} = await axiosPrivate.patch(`https://obscure-tor-98631.herokuapp.com/orders/${_id}`,(payment));
                if(data){
                    console.log(data);
                }
            })();
            
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm rounded mt-8 mb-2' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError&& <p className='text-error'>{cardError}</p>
            }
            {
                success&& <div >
                <small className='text-green-500'>{success}</small>
                <h1>Your Transaction Id: {transactionId} </h1>
                </div>
            }
        </>
    );
};

export default CheckoutForm;