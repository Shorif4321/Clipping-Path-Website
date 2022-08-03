import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import "./QA.css"

const QA = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-5 py-5'>
            <div className="container service-section mb-5">
                <div className='col-12'>
                    <h2 className='fs-1 text-bold mb-3'>
                        Have Any Questions?.. Here Is The Answers..Please
                    </h2>
                </div>

                <div className="row">
                    <div className='col-12 col-md-11 col-lg-8 m-auto'>
                        {
                            services.map(service => <Accordion defaultActiveKey="0">
                                <Accordion.Item className='' eventKey={service?.id}>
                                    <div className='faq-box my-3'>
                                        <Accordion.Header><h5>{service.des.slice(0, 100)} ?</h5></Accordion.Header>
                                        <div className='bg-white'>
                                            <Accordion.Body className='text-start'>
                                                {service?.des}
                                            </Accordion.Body >
                                        </div>
                                    </div>
                                </Accordion.Item>
                            </Accordion>)
                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default QA;