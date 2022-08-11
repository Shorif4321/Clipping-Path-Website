import React from 'react';
import "./Review.css"
import otherwise from '../../../Images/use.png'
import quite from '../../../Images/blockquite.png'
import quotation from '../../../Images/quotation.png'


const Review = () => {
    return (
        <div className='review-main pt-5 pb-md-5'>
            <div className="col-12 col-lg-9 container mt-5 pt-md-5">
                <div className='d-flex  review-heading'>
                    <blockquote> <img className='img-fluid me-3 ' src={quotation} alt="blockquote" /></blockquote>


                    <blockquote> <h1>Real Stories from Real Clients</h1>
                        <p className=''>Get Inspired by this Stores</p></blockquote>

                </div>
            </div>

            <div className="review-sub container py-md-5 col-lg-7 col-md-11 m-auto">

                <div className=" col-12 col-md-6 text-start ">
                    <div className="review-left rounded review-card">
                        <div className="p-4">
                            <div className='d-flex blockquote'>
                                <img className='img-fluid' src={quite} alt="aja" />
                                <h6>1 Great communication, and the work was high quality with a quick turnaround. Also, the results were quite great. I went for the free trial of image clipping services at first and then decided to work- Gosh! I was right. They are indeed the best.</h6>
                            </div>
                            <div className='d-flex align-items-center review-otherwise mt-4'>
                                <img className=' img-fluid me-3' src={otherwise} alt="" />
                                <div>
                                    <h5>Erick Bryner</h5>
                                    <p>Project Manager, Arquette</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 ms-md-5 text-start review-sub">
                    <div className="review-right">
                        <div className="review-left review-card  m-auto rounded">
                            <div className="p-4">
                                <div className='d-flex blockquote'>
                                    <img className='img-fluid' src={quite} alt="aja" />
                                    <h6>2 Great communication, and the work was high quality with a quick turnaround. Also, the results were quite great. I went for the free trial of image clipping services at first and then decided to work- Gosh! I was right. They are indeed the best.</h6>
                                </div>
                                <div className='d-flex align-items-center review-otherwise mt-4'>
                                    <img className=' img-fluid me-3' src={otherwise} alt="" />
                                    <div>
                                        <h5>Erick Bryner</h5>
                                        <p>Project Manager, Arquette</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="review-right2 mt-md-5 mt-4">
                            <div className="review-left review-card rounded">
                                <div className="p-4">
                                    <div className='d-flex blockquote'>
                                        <img className='img-fluid' src={quite} alt="aja" />
                                        <h6>3 Great communication, and the work was high quality with a quick turnaround. Also, the results were quite great. I went for the free trial of image clipping services at first and then decided to work- Gosh! I was right. They are indeed the best.</h6>
                                    </div>
                                    <div className='d-flex align-items-center review-otherwise mt-4'>
                                        <img className=' img-fluid me-3' src={otherwise} alt="" />
                                        <div>
                                            <h5>Erick Bryner</h5>
                                            <p>Project Manager, Arquette</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* end */}
            <div className="review-sub container pb-5 col-lg-7 col-md-11 m-auto">
                <div className="col-12 col-md-6  text-start review-sub me-md-5 ">
                    <div className="review-right">
                        <div className="review-left review-card m-auto rounded">
                            <div className="p-4">
                                <div className='d-flex blockquote'>
                                    <img className='img-fluid' src={quite} alt="aja" />
                                    <h6>4 Great communication, and the work was high quality with a quick turnaround. Also, the results were quite great. I went for the free trial of image clipping services at first and then decided to work- Gosh! I was right. They are indeed the best.</h6>
                                </div>
                                <div className='d-flex align-items-center review-otherwise mt-4'>
                                    <img className=' img-fluid me-3' src={otherwise} alt="" />
                                    <div>
                                        <h5>Erick Bryner</h5>
                                        <p>Project Manager, Arquette</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="review-right2 mt-md-5 mt-4">
                            <div className="review-left review-card rounded">
                                <div className="p-4">
                                    <div className='d-flex blockquote'>
                                        <img className='img-fluid' src={quite} alt="aja" />
                                        <h6>5 Great communication, and the work was high quality with a quick turnaround. Also, the results were quite great. I went for the free trial of image clipping services at first and then decided to work- Gosh! I was right. They are indeed the best.</h6>
                                    </div>
                                    <div className='d-flex align-items-center review-otherwise mt-4'>
                                        <img className=' img-fluid me-3' src={otherwise} alt="" />
                                        <div>
                                            <h5>Erick Bryner</h5>
                                            <p>Project Manager, Arquette</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="review-card col-12 col-md-6 text-start">
                    <div className="review-left review-card rounded">
                        <div className="p-4">
                            <div className='d-flex blockquote'>
                                <img className='img-fluid' src={quite} alt="aja" />
                                <h6>6 Great communication, and the work was high quality with a quick turnaround. Also, the results were quite great. I went for the free trial of image clipping services at first and then decided to work- Gosh! I was right. They are indeed the best.</h6>
                            </div>
                            <div className='d-flex align-items-center review-otherwise mt-4'>
                                <img className=' img-fluid me-3' src={otherwise} alt="" />
                                <div>
                                    <h5>Erick Bryner</h5>
                                    <p>Project Manager, Arquette</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;