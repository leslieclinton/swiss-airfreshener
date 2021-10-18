import React from 'react';
import './MobileHeader.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import {Link} from 'react-router-dom'



function MobileHeader() {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        cssEase: "linear",
        arrows: false
      };

    return (
        <>
        <SlickSlider {...settings}>
            <div className="m__header m__slide-1">
                <div className="m__header-content">
                    <div className="m__header-content-container">
                        <h3>Swiss Flower</h3>
                        <h1>Scent Pad</h1>
                        <p> A reliable odour repellent. It comes in  variety of fragrance keeping your environment fresh with long lasting fragrances.</p>
                        <Link to='/scentpad'>
                            <div className="m__header-btn">
                                Swiss Scent Pad
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="m__header m__slide-2">
                <div className="m__header-content">
                    <div className="m__header-content-container">
                        <h3>Swiss Flower</h3>
                        <h1>Regular & Refil</h1>
                        <p>Swiss Flower regular and refil air freshener comes in multiple frangrances, designed to deodorize your environment. </p>
                        <Link to='/regular'>
                            <div className="m__header-btn">
                                Swiss Regular
                            </div>
                        </Link>
                     </div>
                </div>
            </div>
            <div className="m__header m__slide-3">
                <div className="m__header-content">
                    <div className="m__header-content-container">
                        <h3>Swiss Flower</h3>
                        <h1>Liquid</h1>
                        <p>Swiss Flower Liquid Air Fresheners comes in sweet distinct fragrances that make your surroundings feel more inviting.  </p>
                        <Link to='/liquid'>
                            <div className="m__header-btn">
                            Swiss Liquid
                            </div>
                        </Link>
                     </div>
                </div>
            </div>
            </SlickSlider>
        </>
    )
}

export default MobileHeader
