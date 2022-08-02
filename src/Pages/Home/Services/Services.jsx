import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"
import img1 from "../../../Images/images.png"
import TwentyTwenty from "react-twentytwenty";


const Services = () => {
    /* ========= Page Load from top of the page code start ========= 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) */


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
        console.log(services);

    }, [])




    return (
        <div className=''>
            <div className="container service-section mb-5">
                <div className='col-10 m-auto'>
                    <h2 className='fs-1 text-bold mb-3'>
                        Services We Provide
                    </h2>
                    <p className='my-4 common-p'>Clipping Path Studio – An outsourcing company providing all kinds of image editing services including background removal, image masking, ghost mannequin effect, shadow creation, color correction, and eCommerce Product photo editing service.</p>
                </div>

                <div className="row ">
                    {
                        services?.map(service => <div className="col-12 col-md-12 col-lg-6 my-3">
                            <div className="clipping-main p-4">
                                <div className='col-12 col-md-5 '>
                                    <TwentyTwenty className=""
                                        left={<img className="card-img-top" src={service?.image} />}
                                        right={<img className="card-img-top" src={service?.image2} />}
                                        slider={<div className="slider" />}

                                    />


                                </div>
                                <div className="card-body text-start ps-md-4 col-12 col-md-7">
                                    <h3 className="card-title">{service.name}</h3>
                                    <p className="card-text py-3 common-p">{service.des.slice(0, 325)}</p>
                                    <Link className='service-button text-center' to="/">Explore</Link>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    <div className='pagination-main col-12'>
                        <span className='pagination'>1</span>
                        <span className='pagination'>2</span>
                        <span className='pagination'>3</span>
                        <span className='pagination'>4</span>
                        <p className='pagination'>5</p>
                        <p className='pagination'>6</p>
                        <p className='pagination'>7</p>
                        <p className='pagination'>8</p>
                        <p className='pagination'>9</p>
                    </div>
                </div>




            </div>



        </div>
    );
};

export default Services;