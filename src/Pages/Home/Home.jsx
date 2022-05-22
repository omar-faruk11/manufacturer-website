import React from 'react';
import Footer from '../../Sheard/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Reviews/>
            <BusinessSummary/>
            <Footer/>
        </div>
    );
};

export default Home;