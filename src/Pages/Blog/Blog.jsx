import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css"

const Blog = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return (
        <div className=''>
            <div class="subscribe-box">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-7 m-auto left-box">
                            <div class="subscribe-inner text-center clearfix">
                                <h2>Subscribe</h2>
                                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <form action="#" method="post">
                                    <div class="form-group">
                                        <input class="form-control-1 w-75" id="email-1" name="email" placeholder="Email Address" required="" type="text" />
                                    </div>
                                    <div class="">
                                        <button type="submit" class="service-button1 mt-4">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div id="blog" className="blog-box">
                <div className="container">
                    <div className="row">
                        {
                            services?.map(service => <div className="col-lg-4 col-md-6 col-sm-12 g-md-5">
                                <div className="blog-inner">
                                    <div className="blog-img">
                                        <img className="img-fluid" src={service?.image} alt="" />
                                    </div>
                                    <div className="item-meta">
                                        <Link className='text-decoration-none' to="/"><i className="fa fa-comments-o"></i> 5 Comment </Link>
                                        <Link className='text-decoration-none' to="/"><i className="fa fa-user-o"></i> Admin</Link>
                                        <span className="dti">25 July 2018</span>

                                    </div>
                                    <h3 className='mt-4'>{service?.name}</h3>
                                    <p className='mb-4'>{service?.des?.slice(0, 200)}</p>
                                    <Link to="/" className="blog-button mb-3" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            )
                        }

                    </div>
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

export default Blog;