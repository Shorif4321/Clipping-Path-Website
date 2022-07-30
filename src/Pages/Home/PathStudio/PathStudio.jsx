import React from 'react';
import "./PathStudio.css"
import clipping from "../../../Images/home-studio.webp"

const PathStudio = () => {
    return (
        <div className='py-lg-5'>
            <div className='container row py-5 my-md-5'>
                {/*   <h1 className='clipping-text'>Why Clipping Path Studio?</h1> */}
                <div className="row">
                    <div className="section-main">
                        <div className="clop-left mt-5">
                            <img className='img-fluid' src={clipping} alt="" />
                        </div>
                        <div className="clop-right">
                            <h2>We’re your virtual <span>photo editing</span> and design studio</h2>
                            <h5>Image editing services for ecommerce businesses and pros, from product photographers to Amazon sellers to global brands.</h5>
                            <p>Because a quick product shoot can easily turn into a week or more of editing and formatting your images. Let us look after the edits, so you can get back to the work that needs you.</p>
                            <h4>Starting at 25¢ per image</h4>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default PathStudio;