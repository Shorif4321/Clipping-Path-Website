import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import PathStudio from './PathStudio/PathStudio';
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
        </>
    );
};

export default Home;