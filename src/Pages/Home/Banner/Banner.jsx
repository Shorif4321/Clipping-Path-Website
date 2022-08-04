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

                            <h1 className='hero-head'>Grow up yourBusiness and <span>  Branding</span> as your  Dream
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

            <div className='row justify-content-evenly container main-banner-card '>
                <div className="col-12 col-md-3 banner-card">
                    <h4 className='text-start'>Some Text will be Add Here</h4>
                    <p className='text-start fw-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, sunt. Laborum ducimus rem molestiae ab animi at reiciendis cumque ullam.</p>

                </div>

                <div className="col-12 col-md-3  banner-card">
                    <h4 className='text-start'>Some Text will be Add Here</h4>
                    <p className='text-start fw-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, sunt. Laborum ducimus rem molestiae ab animi at reiciendis cumque ullam.</p>
                </div>

                <div className="col-12 col-md-3  banner-card">
                    <h4 className='text-start'>Some Text will be Add Here</h4>
                    <p className='text-start fw-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, sunt. Laborum ducimus rem molestiae ab animi at reiciendis cumque ullam.</p>
                </div>
            </div>
        </>
    );
};

export default Banner;