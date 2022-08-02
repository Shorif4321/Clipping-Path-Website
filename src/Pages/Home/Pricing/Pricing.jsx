import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TwentyTwenty from "react-twentytwenty";
import './Pricing.css'
import imgage2 from "../../../Images/raster_vector_service_before_01.jpg"
import imgage1 from "../../../Images/neck_joint_ghost_mannequin_service_thumb_after_01.jpg"
const Pricing = () => {

    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setPrices(data?.slice(0, 4)))
        console.log(prices);

    }, [])



    return (
        <div className='pricing-main mt-5 py-5'>
            <div className="container service-section py-5 mb-5">
                <div className='col-10 m-auto'>
                    <h2 className='fs-1 text-bold mb-3 text-white'>
                        Services We Provide
                    </h2>
                    <p className='my-4 common-p text-white'>Clipping Path Studio – An outsourcing company providing all kinds of image editing services including background removal, image masking, ghost mannequin effect, shadow creation, color correction, and eCommerce Product photo editing service.</p>
                </div>

                <div className="row ">
                    {
                        prices?.map(price => <div id={price.id} className="col-12 col-md-6 col-lg-3 my-3">
                            <div className="pricing-card pb-5">
                                <div className=''>
                                    <TwentyTwenty className=""
                                        left={<img className="img-fluid card-img-top" src={price?.image} />}
                                        right={<img className="img-fluid card-img-top" src={price?.image2} />}
                                        slider={<div className="slider" />}
                                    />
                                </div>

                                <div className="col-10 card-body m-auto  mt-3">
                                    <h4 className="card-title text-white text-start">{price.name}</h4>
                                    <div className='divide d-flex justify-content-between  m-auto'>
                                        <p className="card-text py-3 common-p text-white">{price?.des?.slice(0, 25)}</p>
                                        <p className=" card-text py-3 common-p text-white">$ {price?.id}</p>
                                    </div>
                                    <div className='divide d-flex justify-content-between  m-auto'>
                                        <p className="card-text py-3 common-p text-white">{price?.des?.slice(0, 25)}</p>
                                        <p className=" card-text py-3 common-p text-white">$ {price?.id}</p>
                                    </div>
                                    <div className='divide d-flex justify-content-between  m-auto'>
                                        <p className="card-text py-3 common-p text-white">{price?.des?.slice(0, 25)}</p>
                                        <p className=" card-text py-3 common-p text-white">$ {price?.id}</p>
                                    </div>
                                    <div className='divide d-flex justify-content-between  m-auto'>
                                        <p className="card-text py-3 common-p text-white">{price?.des?.slice(0, 25)}</p>
                                        <p className=" card-text py-3 common-p text-white">$ {price?.id}</p>
                                    </div>

                                    <div className='mt-5'>
                                        <Link className='service-button text-center text-white ' to="/">Explore</Link>
                                        <Link className='service-button text-center text-white ' to="/">Explore</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Pricing;