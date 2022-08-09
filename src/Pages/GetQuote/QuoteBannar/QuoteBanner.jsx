import React from 'react';
import tshirt from '../../../Images/get-quote.png'
import "./QuoteBannar.css"

const QuoteBanner = () => {
    return (
        <div className=''>
            <div className="container quote-banner py-5 d-flex align-items-center justify-content-center ">
                <div className="quote-banner-left col-lg-6 col-md-12 col-12 ms-md-4">
                    <h2 className='fw-bold fs-1 text-start'>Get a Quote</h2>
                    <p className='common-p text-start'>Wanna know if we’re the photo editing company you’re looking for? <br />
                        <span className='fw-bold free-quote2 pb-2'>Get a free trial now.</span>
                    </p>

                    <div>
                        <div className="row d-flex justify-content-between my-5">
                            <div className="col-md-4 d-flex align-items-start mt-2">
                                <div>
                                    <i className="quote-social fas fa-award"></i>
                                </div>
                                <div className='ms-3'>
                                    <h3 className='fw-bold text-start'>150 +</h3>
                                    <h6>Certified Professionals</h6>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex align-items-start mt-2">
                                <div>
                                    <i className="quote-social fas fa-clock"></i>
                                </div>

                                <div className='ms-3'>
                                    <h3 className='fw-bold text-start'>150 +</h3>
                                    <h6>Faster Delivery

                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex align-items-start mt-2">
                                <div>
                                    <i className="quote-social fab fa-battle-net"></i>
                                </div>

                                <div className='ms-3'>
                                    <h3 className='fw-bold text-start'>150 +</h3>
                                    <h6>Lower Cost</h6>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex '>
                            <button className='service-button'>Get Started  </button>
                        </div>
                    </div>
                </div>

                <div className="quote-banner-right col-lg-6 col-md-12 d-md-flex justify-content-lg-end justify-content-md-center col-11 m-auto pe-md-4">
                    <img className='img-fluid' src={tshirt} alt="clipping path t-shirt" />
                </div>
            </div>



        </div>
    );
};

export default QuoteBanner;