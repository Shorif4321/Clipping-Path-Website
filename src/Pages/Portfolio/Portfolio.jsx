import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Portfolio.css"
import ReactCompareImage from "react-compare-image";
import Pricing from '../Home/Pricing/Pricing';
import Masking from './Masking/Masking';

const Portfolio = () => {
    //  ========= Page Load from top of the page code start ========= 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div className='mt-5 py-5 '>
                <div className='container'>
                    <div className='d-flex justify-content-between pb-5 flex-wrap'>
                        <div className="col-md-4 col-12 portfolio-upper1">
                            <h1 className='portfolio-name text-md-start'>Experience The Beauty of Our Services</h1>
                        </div>
                        <div className="col-md-3 col-11 m-auto  portfolio-upper2">
                            <p className='common-p text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea soluta earum expedita iste quas ipsa illum rerum molestias, nam ullam deleniti quisquam accusamus rem dolorum. Molestiae facere suscipit distinctio id ab. Doloremque.</p>

                        </div>
                        <div className="col-md-3 col-11 m-auto  portfolio-upper3">
                            <p className='common-p text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea soluta earum expedita iste quas ipsa illum rerum molestias, nam ullam deleniti quisquam accusamus rem dolorum. Molestiae facere suscipit distinctio id ab. Doloremque.</p>

                        </div>
                    </div>

                    <div className="row ">
                        {
                            services?.map(service => <div key={service?.id} className="col-12 col-md-6 col-lg-6 my-3">
                                <div className="clipping-main p-4">
                                    <div className=''>
                                        <div className="mainWrapper">
                                            <div className="contentWrapper">
                                                <h3 className='portfolio-name'>{service?.name}</h3>
                                                <ReactCompareImage
                                                    hover={true}
                                                    vertical={false}
                                                    leftImage={service?.image}
                                                    rightImage={service?.image2}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <section className='review-main  py-5'>
                <div className="container service-section py-5 mb-5">
                    <div className='col-11 col-md-10 m-auto'>
                        <h2 className='fs-1 text-bold mb-3 text-black'>
                            Get The Best Prices For Image Editing Services
                        </h2>
                        <p className='my-4 common-p text-black'>Clipping Path Studio – An outsourcing company providing all kinds of image editing services including background removal, image masking, ghost mannequin effect, shadow creation, color correction, and eCommerce Product photo editing service.</p>
                    </div>

                    <div className='bg-white rounded'>
                        <Tabs
                            defaultActiveKey="Masking"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3 nab-bac">

                            <Tab eventKey="Masking" title="Masking">
                                <Masking></Masking>
                            </Tab>

                            <Tab eventKey="ClippingShadow" title="ClippingShadow">
                                <Masking></Masking>
                            </Tab>

                            <Tab eventKey="Database" title="Database">
                                <Masking></Masking>
                            </Tab>

                            <Tab eventKey="CMS" title="CMS">
                                <Masking></Masking>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
            {/* === Pricing Common section ===== */}
            <Pricing></Pricing>
        </>
    );
};

export default Portfolio;