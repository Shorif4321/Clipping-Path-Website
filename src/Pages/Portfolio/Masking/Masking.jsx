import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactCompareImage from "react-compare-image";
import './Masking.css'
import left from "../../../Images/high_end_retouching_after_01.jpg";
import right from "../../../Images/high_end_retouching_before_01.jpg"


const Masking = () => {

    /*     const [maskings, setMaskings] = useState([])
        useEffect(() => {
            fetch('./Services.JSON')
                .then(res => res.json())
                .then(data => setMaskings(data))
        }, []) */


    return (
        <div className='container'>
            <div className="masking-main p-md-3">
                <div className='col-md-6 col-12 p-3'>
                    <h2 className=' text-start m-0'>High End Retouching</h2>
                    <p className='common-p text-start mt-4 pb-4'>We offer competitive price for professional image manipulation and retouching & photo editing services which is very much affordable. We don’t say we provide the cheapest, but we provide the most reliable photo retouching and image editing services at affordable cost. Because we care for you!
                    </p>
                    <div className='d-flex'>
                        <Link className='service-button' to="/">Read More</Link>
                    </div>
                </div>

                <div className='col-md-6 col-12 py-5'>
                    <ReactCompareImage
                        hover={true}
                        vertical={false}
                        leftImage={left}
                        rightImage={right}
                    />

                </div>
            </div>


        </div >
    );
};

export default Masking;