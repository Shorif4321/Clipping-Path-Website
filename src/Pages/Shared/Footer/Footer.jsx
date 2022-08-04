import React from 'react';
import "./Footer.css"
import logo from "../../../Images/images.png"
import { Link } from "react-router-dom"

const Footer = () => {

    return (
        <div className='footer-main p-md-5'>
            <div className='container'>
                <div className='subscribe-section col-md-9'>
                    <div className="row justify-content-between">
                        <div className="col-md-4 p-md-0 col-12">
                            <img className='img-fluid' src={logo} alt="" />
                        </div>
                        <div className="col-md-6 col-12">
                            <div className='footer-head my-3'> <label>Please Subscribe To Get Notification </label></div>
                            <div className='subscribe'>
                                <input type="text" name="" id="" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6"></div>
                <div className=' mt-md-5 pt-5  footer-sections'>
                    <div className="col-md-3  col-12">
                        <h4 className='footer-head'>Quick Links</h4>
                        <Link className='text-decoration-none footer-link' to="/">Home</Link>
                        <Link className='text-decoration-none footer-link' to="/blog">Blog</Link>
                        <Link className='text-decoration-none footer-link' to="/contact">Contact</Link>
                        <Link className='text-decoration-none footer-link' to="/portfolio">Portfolio</Link>
                        <Link className='text-decoration-none footer-link' to="/about-us">About us</Link>
                        <Link className='text-decoration-none footer-link' to="/blog">Blog</Link>

                    </div>
                    <div className="col-md-3  col-12">
                        <h4 className='footer-head'>Quick Links</h4>
                        <Link className='text-decoration-none footer-link' to="/home">Home</Link>
                        <Link className='text-decoration-none footer-link' to="/technologies">Technologies</Link>
                        <Link className='text-decoration-none footer-link' to="/service">Service</Link>
                        <Link className='text-decoration-none footer-link' to="/portfolio">Portfolio</Link>

                    </div>
                    <div className="col-md-3 col-12 first-colum">
                        <h4 className='footer-head'>Contact Us</h4>
                        <p>1/4, Block-E, Sat-Mosjit Road, Mohammadpur Bus Stand, Dhaka-1207. 1207 Dhaka, Dhaka Division, Bangladesh</p>
                        <p>info@topitltd.com</p>
                        <p>Phone: +880 1616-028947 <br />
                            Whatsapp: +880 1681-477270
                        </p>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className='py-md-5 mt-3'> <span className='divider'></span></div>
                    <div className='d-md-flex justify-content-between align-items-center py-3'>
                        <div className='d-flex network my-4'>
                            <p className='me-2 fs-2'>
                                <Link to="/" className='text-decoration-none'><i className="social3 fab fa-facebook-f"></i></Link>
                                <Link to="/" className='text-decoration-none'>  <i className="social5 fab fa-instagram"></i></Link>
                                <Link to="/" className='text-decoration-none'> <i className="social4 fab fa-twitter"></i></Link>
                            </p>
                        </div>
                        <div>
                            <p className='footer-last'>©TopITLTD 2022. All rights reserved.</p>
                        </div>
                        <div className='d-md-flex'>
                            <Link to="/privacy" className='text-decoration-none'><p className='footer-last me-3'>Privacy Policy</p></Link>
                            <Link to="/tram&Condition" className='text-decoration-none'><p className='footer-last'>Terms of Conditions</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;