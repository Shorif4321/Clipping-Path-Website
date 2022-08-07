import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"
import ReactCompareImage from "react-compare-image";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return (
        <div className=''>
            <div className="container service-section mb-md-5">
                <div className='col-11 col-md-10 m-auto'>
                    <h2 className='fs-1 text-bold mb-3'>
                        Services We Provide
                    </h2>
                    <p className='my-4 common-p'>Clipping Path Studio – An outsourcing company providing all kinds of image editing services including background removal, image masking, ghost mannequin effect, shadow creation, color correction, and eCommerce Product photo editing service.</p>
                </div>

                <div className="row ">
                    {
                        services?.map(service => <div key={service?.id} className="col-12 col-md-6 col-lg-6 my-3">
                            <div className="clipping-main p-4">
                                <div className=''>
                                    <div className="mainWrapper">
                                        <div className="contentWrapper">
                                            <ReactCompareImage
                                                hover={true}
                                                vertical={false}
                                                leftImage={service?.image}
                                                rightImage={service?.image2}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body py-4">
                                    <h4 className="card-title">{service?.name?.slice(0, 30)}</h4>
                                    <p className="card-text common-p">{service.des.slice(0, 325)}</p>
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