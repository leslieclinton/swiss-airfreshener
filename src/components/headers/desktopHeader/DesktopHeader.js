import React from 'react'
import './DesktopHeader.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import {Link} from 'react-router-dom'


function DesktopHeader() {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        cssEase: "linear"
      };

    
    return (
        <>
        <SlickSlider {...settings}>
            <div className="desktop__header d__slide-1">
                <div className="d__header-content">
                    <h3>Swiss Flower</h3>
                    <h1>Regular & Refil</h1>
                    <p>Swiss Flower Regular and Refil Air Freshener comes in multiple frangrances, designed to deodorize your environment. </p>

                   <Link to="/regular">
                        <div className="d__header-btn">
                            Swiss Flower Regular
                        </div>
                    </Link>
                </div>
            </div>
            <div className="desktop__header d__slide-2">
                <div className="d__header-content">
                    <h3>Swiss Flower</h3>
                    <h1>Scent Pad</h1>
                    <p> A reliable odour repellent. It comes in  variety of fragrances keeping your environment fresh with long lasting scents.</p>

                    <Link to="/scentpad">
                        <div className="d__header-btn">
                            Swiss Flower Scent Pad
                        </div>
                    </Link>
                </div>
            </div>
            <div className="desktop__header d__slide-3">
                <div className="d__header-content">
                    <h3>Swiss Flower</h3>
                    <h1>Liquid</h1>
                    <p>Swiss Flower Liquid Air Fresheners comes in sweet distinct fragrances that make your surroundings feel more inviting.  </p>

                    <Link to="/liquid">
                        <div className="d__header-btn">
                            Swiss Flower Liquid
                        </div>
                    </Link>
                </div>
            </div>
            </SlickSlider>
        </>

    )
}

export default DesktopHeader
