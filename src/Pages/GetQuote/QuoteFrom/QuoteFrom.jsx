import React, { useEffect, useState } from 'react';
import "./QuoteFrom.css"
import googleDrive from "../../../Images/Google_Drive.png"
import dropbox from "../../../Images/2560px-Dropbox.png"
import oneDrive from "../../../Images/OneDrive.png"

const QuoteFrom = () => {

    const [instractions, setInstractions] = useState([]);
    useEffect(() => {
        fetch('./Instructions.JSON')
            .then(res => res.json())
            .then(data => setInstractions(data))
        console.log(instractions);
    }, {})


    return (
        <div>
            <div className="quote-form container py-5">
                <div>
                    <div className='quote-header d-flex justify-content-center align-items-center'>
                        <div className='col-md-5 col-12 pe-5'>
                            <h1 className='text-end fs-1 fw-semibold'>Get your custom quote
                                in <span className='fw-bold text-primary'>30 Minutes</span> </h1>
                        </div>
                        <div className='col-md-5 col-12 ps-lg-5 pe-5'>
                            <p className='common-p text-start'>
                                We at Clipping Path Studio enable our global clients to grow their businesses by providing hand-drawn, high-quality, affordable photoshop services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className='help-selection py-5'>
                <div className='container d-flex left-right-main'>
                    <div className='col-lg-7 col-md-11 m-auto col-12 form-left'>
                        <h3 className='text-start fw-bold py-2 '>
                            What can we help you with? </h3>
                        <p className='common-p text-start'>Choose the services you need help with by ticking the box below.</p>
                        {/* ==== input start==== */}
                        <div className='d-flex justify-content-between pt-4 pe-lg-5 '>
                            <div className=''>
                                <div className="mb-2">
                                    <input type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div className=" ">
                                    <input type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="mb-2 ">
                                    <input type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div className="mb-3 ">
                                    <input type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="mb-2 ">
                                    <input type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div className="mb-3 ">
                                    <input type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="mb-2">
                                    <input type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div className="mb-3 ">
                                    <input type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </div>
                        </div>

                        {/* =========  output field option ====== */}
                        <div className='output-filed'>
                            <h3 className='text-start fw-bold py-2'>
                                What can we help you with? </h3>
                            <p className='common-p text-start'>Choose your desired output file.</p>
                            <div className='d-md-flex justify-content-between pt-4 pe-lg-5 '>

                                <div className=''>
                                    <h5 className='fw-bold text-start'>File Format</h5>
                                    <select className="form-select w-100" aria-label="Default select example">
                                        <option value="1">JPEJ</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className=''>
                                    <h5 className='fw-bold text-start '>Background</h5>
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="1">Transparent</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className=''>
                                    <h5 className='fw-bold text-start'>Path</h5>
                                    <select className="form-select" aria-label="Default select example">

                                        <option value="1">No Path</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Upload File start */}
                        <div className='upload-file mt-5'>
                            <h3 className='text-start fw-bold'>
                                Upload Files</h3>
                            <p className='common-p text-start'>Send us your photos and images by uploading them here.</p>
                            <div className='d-flex justify-content-between pt-4 pe-lg-5 '>
                                <div className='upload-area'>
                                    <h3 className=' fw-bold '>
                                        Drag & Drop Files Here</h3>
                                    <h6>or</h6>
                                    <div>
                                        <div className=''>
                                            <input className="file-input" id="formFileLg" type="file" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-75 m-auto mt-3 text-secondary'>
                                <small className=''>If the size of your image more than 25MB then share your image link here from your cloud link Google Drive, DropBox, One Drive Or Wetransfer</small>
                            </div>
                        </div>

                        {/* =========  output field option ====== */}
                        <div className='output-filed'>
                            <div className='d-flex justify-content-between align-items-start pe-lg-5 mt-5'>
                                <div className=''>
                                    <h3 className='text-start fw-bold py-2'>
                                        Or insert a drive link </h3>
                                </div>
                                <div className='inset-logo'>
                                    <img className='img-fluid' src={googleDrive} alt="" />
                                    <img className='img-fluid mx-2' src={dropbox} alt="" />
                                    <img className='img-fluid' src={oneDrive} alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between pe-lg-5 '>
                                <input className="form-control border-0 " type="text" aria-label=".form-control-lg example" />
                            </div>
                        </div>

                        {/* ===========  Your Details or contact ========= */}
                        <div className='my-5'>
                            <h3 className='text-start fw-bold py-2'>
                                Your Details</h3>
                            <p className='common-p text-start'>Provide your contact information below.</p>

                            <div className=' pt-4 pe-lg-5 '>
                                <div className="row">
                                    <div className="col-12 col-md-6 text-start mb-3">
                                        <label htmlFor="" className='common-p pb-2'>Name *</label>
                                        <input type="text" className="form-control" aria-label="First name" />
                                    </div>
                                    <div className="col-12 col-md-6 text-start mb-3">
                                        <label htmlFor="" className='common-p pb-2'>Email *</label>
                                        <input type="email" className="form-control" aria-label="First name" />
                                    </div>
                                    <div className="col-12 col-md-6 text-start mb-3">
                                        <label htmlFor="" className='common-p pb-2'>Phone *</label>
                                        <input type="number" className="form-control" min="0" aria-label="First name" />
                                    </div>
                                    <div className="col-12 col-md-6 text-start mb-3">
                                        <label htmlFor="" className='common-p pb-2'>Website *</label>
                                        <input type="text" className="form-control" aria-label="First name" />
                                    </div>
                                    <div className="col-12 text-start mb-3">
                                        <label htmlFor="" className='common-p pb-2'>Message *</label>
                                        <div className="">
                                            <textarea className="form-control " rows="5" ></textarea>
                                        </div>
                                        <div className='mt-4'>
                                            <button className='get-quote-button text-center'>GET A QUOTE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-5 col-md-11 col-11 m-auto form-right ps-lg-5'>
                        <div className='quote-left-first'>
                            <h3 className='text-start fw-bold py-2 fs-4'>How ‘Get a Quote’ works
                            </h3>
                            <p className='common-p text-start pb-5'>After getting your sample files, we will examine the files quality and follow your instructions (if any) accordingly. Our expert designers will work enthusiastically to produce your desired results. Please note that we typically take less than 16 hours for the whole procedure and send you the fully edited file.</p>
                        </div>
                        <div className='quote-instructions mt-5'>
                            <h3 className='text-start fw-bold py-2 fs-4'>Get a Quote Instructions </h3>

                            {
                                instractions.map(instraction => <div id={instraction?.id} className='instractions bg-white rounded-3'>
                                    <div className='d-flex  px-4 py-4 my-5'>
                                        <div className='pe-4 mt-2'>
                                            <img className='' src={instraction?.image} alt="" />
                                        </div>
                                        <div >
                                            <h3 className='text-start fw-bold py-2 fs-5'>{instraction?.name}</h3>
                                            <p className='common-p text-start pb-4'>{instraction?.des}</p>
                                        </div>
                                    </div>
                                </div>)

                            }
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-start fw-bold py-2 fs-4'>Contact us for questions about your free trial </h3>
                            <p className='common-p text-start pb-4'>Contact us if you have questions or clarifications about the Get a Quote and we’ll be happy to address them for you.</p>
                        </div>
                    </div>
                </div>





            </section>




        </div>
    );
};

export default QuoteFrom;