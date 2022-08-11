import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css";
import had from "../../../Images/use.png"

const Banner = () => {
    return (
        <>
            <div className="main-sec">
                <div className='row justify-content-between container banner'>
                    <div className='col-12 col-md-6 col-lg-7 text-start'>
                        <div className='banner-left'>

                            <h1 className='hero-head'>Grow up yourBusiness and Branding as your  Dream
                            </h1>
                            <p className='hero-description mb-5 mt-4'>Growing up of business and branding is always challenging but not impossible.The more you use technology in business, the more people will be engaged and boostup business profit. </p>

                            <div className='hero-button text-start mb-5'>
                                <Link to="/service"> <button className='common-button '>Get Started With Us</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 left-side">
                        <img className='img-fluid ' src={had} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;