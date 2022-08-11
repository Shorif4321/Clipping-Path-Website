import React, { useEffect } from 'react';
import QuoteBanner from '../GetQuote/QuoteBannar/QuoteBanner';
import FreeForm from './FreeForm/FreeForm';

const FreeQuote = () => {
    //  ========= Page Load from top of the page code start ========= 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <>
            <QuoteBanner></QuoteBanner>
            <FreeForm></FreeForm>

        </>
    );
};

export default FreeQuote;