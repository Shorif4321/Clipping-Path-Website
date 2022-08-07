import React from 'react';
import { Link } from 'react-router-dom';
import "./HowWork.css"
import howItWork from '../../../Images/section-how-it-works.svg'


const HowWork = () => {
    return (
        <div >
            <div className='row container mb-5 pb-5 col-lg-9 col-md-11 col-12 m-auto'>

                <div className='how-work-main'>

                    <div className="work1 col-lg-5 col-md-6 col-11">
                        <h1 className='work-heading fs-1 mb-5 '>How it works</h1>
                        <div className="first-text">
                            <h4>1</h4><p>Request a quote for the images you need edited — we’ll get back to you within 45 minutes</p>
                        </div>
                        <div className="first-text ">
                            <h4>2</h4>
                            <p>Request a quote for the images you need edited — we’ll get back to you within 45 minutes</p>
                        </div>
                        <div className="first-text ">
                            <h4>3</h4>
                            <p>Request a quote for the images you need edited — we’ll get back to you within 45 minutes</p>
                        </div>
                        <div className='d-flex mt-md-5'>
                            <Link to="/" className='service-button'>Show Details</Link>
                        </div>
                    </div>

                    <div className="work2 col-lg-5 col-md-6 col-11">
                        <img className='img-fluid' src={howItWork} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowWork;