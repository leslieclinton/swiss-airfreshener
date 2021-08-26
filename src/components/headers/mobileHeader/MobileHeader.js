import React from 'react';
import './MobileHeader.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";


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
                        <p>Simple ingredients with stellar results.  in-house garment care line is tried.Simple ingredients with stellar </p>

                        <div className="m__header-btn">
                            Explore
                        </div>

                        </div>
                </div>
            </div>
            <div className="m__header m__slide-2">
               
                    <div className="m__header-content">
                    <div className="m__header-content-container">
                        <h3>Swiss Flower</h3>
                        <h1>Regular & Refil</h1>
                        <p>Simple ingredients with stellar results.  in-house garment care line is tried.Simple ingredients with stellar </p>

                        <div className="m__header-btn">
                            Explore
                        </div>

                        </div>
                </div>
            </div>
            </SlickSlider>
        </>
    )
}

export default MobileHeader
