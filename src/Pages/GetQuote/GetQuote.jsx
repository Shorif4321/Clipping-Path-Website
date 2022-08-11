import React, { useEffect } from 'react';
import QuoteBanner from './QuoteBannar/QuoteBanner';
import QuoteFrom from './QuoteFrom/QuoteFrom';

const GetQuote = () => {
    //  ========= Page Load from top of the page code start ========= 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <QuoteBanner></QuoteBanner>
            <QuoteFrom></QuoteFrom>
        </>
    );
};

export default GetQuote;