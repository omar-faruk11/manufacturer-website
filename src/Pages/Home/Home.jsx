import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>
            <Banner/>
            <Parts/>
            <Reviews/>
            <BusinessSummary/>
            <ContactUs/>
        </>
    );
};

export default Home;