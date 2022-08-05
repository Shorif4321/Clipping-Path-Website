import React from 'react';
import "./Footer.css"
import logo from "../../../Images/images.png"
import { Link } from "react-router-dom"

const Footer = () => {

    return (
        <div className='footer-main pt-md-5  px-md-5 pb-2'>
            <div className='container'>
                <div className='subscribe-section'>
                    <div className="row justify-content-between align-items-start">
                        <div className="col-lg-2  col-md-5 col-12 p-md-0">
                            <img className='img-fluid ' src={logo} alt="" />
                        </div>

                        <div className="col-lg-5 col-md-6 col-12">
                            <div className='footer-head '> {/* <label>Please Subscribe To Get Notification </label> */}</div>
                            <div className='subscribe'>
                                <input className='px-3 ' type="text" name="" id="" placeholder='Type Your Email' />
                                <button className=''>Subscribe</button>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12 col-12">
                            <p className=' footer-top-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sint ullam natus</p>
                        </div>
                    </div>
                </div>
                <div className="col-6"></div>
                <div className='pt-2  footer-sections'>
                    <div className="col-lg-3  col-10">
                        <h4 className='footer-head'>Quick Links</h4>
                        <Link className='text-decoration-none footer-link' to="/">Home</Link>
                        <Link className='text-decoration-none footer-link' to="/blog">Blog</Link>
                        <Link className='text-decoration-none footer-link' to="/contact">Contact</Link>
                        <Link className='text-decoration-none footer-link' to="/portfolio">Portfolio</Link>
                        <Link className='text-decoration-none footer-link' to="/about-us">About us</Link>
                        <Link className='text-decoration-none footer-link' to="/blog">Blog</Link>

                    </div>

                    <div className="col-lg-3  col-10  pe-lg-5 me-lg-5 first-colum ">
                        <h4 className='footer-head'>Quick Links</h4>

                        <p className=''>1/4, Block-E, Sat-Mosjit Road, Mohammadpur Bus Stand, Dhaka-1207. 1207 Dhaka, Dhaka Division, Bangladesh</p>
                        <p>info@topitltd.com</p>
                        <p>Phone: +880 1616-028947 <br />
                            Whatsapp: +880 1681-477270
                        </p>

                    </div>
                    <div className="col-md-3 col-10">
                        <h4 className='footer-head'>Quick Links</h4>
                        <Link className='text-decoration-none footer-link' to="/home">Home</Link>
                        <Link className='text-decoration-none footer-link' to="/technologies">Technologies</Link>
                        <Link className='text-decoration-none footer-link' to="/service">Service</Link>
                        <Link className='text-decoration-none footer-link' to="/portfolio">Portfolio</Link>

                    </div>
                    <div className="col-lg-3 col-12 first-colum  pe-lg-5">
                        <h4 className='footer-head'>Contact Us</h4>
                        <p>1/4, Block-E, Sat-Mosjit Road, Mohammadpur Bus Stand, Dhaka-1207. 1207 Dhaka, Dhaka Division, Bangladesh</p>
                        <p>info@topitltd.com</p>
                        <p>Phone: +880 1616-028947 <br />
                            Whatsapp: +880 1681-477270
                        </p>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className='mt-4 mb-1'>
                        <span className='divider'></span>
                    </div>

                    <div className='d-md-flex flex-wrap justify-content-between align-items-center'>

                        <div className='d-flex justify-content-md-start network my-4 col-md-6 col-12'>
                            <p className='me-2 fs-2'>
                                <Link to="/" className='text-decoration-none'>
                                    <i className="social3 fab fa-facebook-f"></i></Link>
                                <Link to="/" className='text-decoration-none mx-3'>
                                    <i className="social5 fab fa-instagram"></i></Link>
                                <Link to="/" className='text-decoration-none'>
                                    <i className="social4 fab fa-twitter"></i></Link>
                            </p>
                        </div>

                        <div className='d-md-flex justify-content-end col-md-6 col-12'>
                            <Link to="/privacy" className='text-decoration-none'><p className='footer-last me-3'>Privacy Policy</p></Link>
                            <Link to="/tram&Condition" className='text-decoration-none'><p className='footer-last'>Terms of Conditions</p></Link>
                        </div>

                    </div>
                    <div className='col-12'>
                        <div className=''>
                            <span className='divider'></span>
                        </div>
                        <p className='footer-last mt-md-4 mt-sm-1'>©TopITLTD 2022. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;