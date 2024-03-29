import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import HowWork from './How It Work/HowWork';
import PathStudio from './PathStudio/PathStudio';
import Pricing from './Pricing/Pricing';
import QA from './QA/QA';
import Review from './Review/Review';
import Services from './Services/Services';

const Home = () => {
    //  ========= Page Load from top of the page code start ========= 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])




    return (
        <>
            <Banner></Banner>
            <PathStudio></PathStudio>
            <Services></Services>

            <Pricing></Pricing>
            <HowWork></HowWork>
            <Review></Review>
            <QA></QA>
        </>
    );
};

export default Home;