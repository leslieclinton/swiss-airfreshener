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
                    <p>Swiss Flower regular and refil airfreshener comes in multiple frangrances, designed to deodorize your environment. </p>

                   <Link to="/regular">
                        <div className="d__header-btn">
                            Swiss regular
                        </div>
                    </Link>
                </div>
            </div>
            <div className="desktop__header d__slide-2">
                <div className="d__header-content">
                    <h3>Swiss Flower</h3>
                    <h1>Scent Pad</h1>
                    <p> A reliable odour repellent. It comes in  variety of fragrance keeping your environment fresh with long lasting fragrances.</p>

                    <Link to="/scentpad">
                        <div className="d__header-btn">
                            Swiss scent pad
                        </div>
                    </Link>
                </div>
            </div>
            <div className="desktop__header d__slide-3">
                <div className="d__header-content">
                    <h3>Swiss Flower</h3>
                    <h1>Liquid</h1>
                    <p> Swiss Flower Liquid Air Freshener redefines and gives a refreshing identity on home care products; endowed richly for consumers taste. </p>

                    <Link to="/liquid">
                        <div className="d__header-btn">
                            Swiss Liquid
                        </div>
                    </Link>
                </div>
            </div>
            </SlickSlider>
        </>

    )
}

export default DesktopHeader
