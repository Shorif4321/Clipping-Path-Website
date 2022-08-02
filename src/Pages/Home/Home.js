import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import PathStudio from './PathStudio/PathStudio';
import Pricing from './Pricing/Pricing';
import Review from './Review/Review';
import Services from './Services/Services';

const Home = () => {
    /* ========= Page Load from top of the page code start ========= */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Banner></Banner>
            <PathStudio></PathStudio>
            <Services></Services>
            <Pricing></Pricing>
            <Review></Review>
        </>
    );
};

export default Home;