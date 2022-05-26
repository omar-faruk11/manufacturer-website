import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import News from './News';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
            <Reviews/>
            <News/>
            <ContactUs/>
        </>
    );
};

export default Home;